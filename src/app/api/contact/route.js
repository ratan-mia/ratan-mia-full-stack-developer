import { NextResponse } from 'next/server';
import {
  createTransporter,
  fromHeader,
  getEmailConfig,
  isEmailConfigured,
} from '@/lib/email';

// Import contact email templates
let contactClientTemplate, contactAdminTemplate;

try {
  const clientModule = await import('@/lib/email-templates/contact-client-template');
  const adminModule = await import('@/lib/email-templates/contact-admin-template');
  contactClientTemplate = clientModule.contactClientTemplate;
  contactAdminTemplate = adminModule.contactAdminTemplate;
} catch (error) {
  console.error('Failed to import contact email templates:', error);
  contactClientTemplate = (formData) => `
    <h1>Thank you, ${formData.name}!</h1>
    <p>We received your message about: ${formData.subject}</p>
    <p>We'll get back to you at ${formData.email} within 24 hours.</p>
    <p>Best regards,<br>Ratan Mia</p>
  `;
  contactAdminTemplate = (formData) => `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Subject:</strong> ${formData.subject}</p>
    <p><strong>Message:</strong> ${formData.message}</p>
    ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
    ${formData.website ? `<p><strong>Website:</strong> ${formData.website}</p>` : ''}
  `;
}

const validateFormData = (data) => {
  const errors = [];

  if (!data) {
    errors.push('No form data received');
    return errors;
  }

  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push('Please provide a valid email address');
  }

  if (!data.subject || typeof data.subject !== 'string') {
    errors.push('Subject is required');
  } else if (data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }

  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};

const sanitizeFormData = (data) => ({
  name: data.name?.trim() || '',
  email: data.email?.trim().toLowerCase() || '',
  subject: data.subject?.trim() || '',
  message: data.message?.trim() || '',
  phone: data.phone?.trim() || '',
  website: data.website?.trim() || '',
  timestamp: new Date().toISOString(),
});

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    console.log('📧 Contact form submission started');

    if (!isEmailConfigured()) {
      console.error('❌ Missing Titan SMTP credentials');
      return NextResponse.json(
        {
          error: 'Email service not configured',
          details: 'Missing: SMTP_USER / SMTP_PASS',
          code: 'ENV_CONFIG_ERROR',
        },
        { status: 503, headers }
      );
    }

    let rawFormData;
    try {
      rawFormData = await request.json();
    } catch (error) {
      return NextResponse.json(
        {
          error: 'Invalid JSON data',
          details: error.message,
          code: 'JSON_PARSE_ERROR',
        },
        { status: 400, headers }
      );
    }

    const validationErrors = validateFormData(rawFormData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationErrors,
          code: 'VALIDATION_ERROR',
        },
        { status: 400, headers }
      );
    }

    const formData = sanitizeFormData(rawFormData);
    const { adminEmail } = getEmailConfig();
    const transporter = createTransporter();
    if (!transporter) {
      return NextResponse.json(
        {
          error: 'Email service initialization failed',
          code: 'TRANSPORTER_ERROR',
        },
        { status: 503, headers }
      );
    }

    let clientHtml, adminHtml;
    try {
      clientHtml = contactClientTemplate(formData);
      adminHtml = contactAdminTemplate(formData);
    } catch (error) {
      return NextResponse.json(
        {
          error: 'Email template generation failed',
          details: error.message,
          code: 'TEMPLATE_ERROR',
        },
        { status: 500, headers }
      );
    }

    const clientMailOptions = {
      from: fromHeader('Ratan Mia - Full Stack Developer'),
      to: formData.email,
      subject: `✅ Thank you for reaching out, ${formData.name}!`,
      html: clientHtml,
      headers: {
        'X-Mailer': 'Ratan Mia Portfolio Contact Form',
        'X-Priority': '3',
      },
    };

    const adminMailOptions = {
      from: fromHeader('Portfolio Contact Form'),
      to: adminEmail,
      subject: `🔔 New Contact: ${formData.name} - ${formData.subject}`,
      html: adminHtml,
      replyTo: formData.email,
      headers: {
        'X-Mailer': 'Ratan Mia Portfolio Contact Form',
        'X-Priority': '1',
      },
    };

    const emailResults = await Promise.allSettled([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    const clientResult = emailResults[0];
    const adminResult = emailResults[1];
    const success = {
      client: clientResult.status === 'fulfilled',
      admin: adminResult.status === 'fulfilled',
    };

    if (success.client && success.admin) {
      return NextResponse.json(
        {
          message:
            'Your message has been sent successfully! Check your email for confirmation.',
          timestamp: formData.timestamp,
          code: 'SUCCESS',
        },
        { status: 200, headers }
      );
    }

    const errors = [];
    if (!success.client) {
      console.error('❌ Client confirmation email failed:', clientResult.reason);
      errors.push(
        `Client email failed: ${clientResult.reason?.message || 'Unknown error'}`
      );
    }
    if (!success.admin) {
      console.error('❌ Admin notification email failed:', adminResult.reason);
      errors.push(
        `Admin email failed: ${adminResult.reason?.message || 'Unknown error'}`
      );
    }

    return NextResponse.json(
      {
        error: 'Partial email failure',
        details: errors,
        success,
        code: 'PARTIAL_FAILURE',
      },
      { status: 207, headers }
    );
  } catch (error) {
    console.error('❌ Unexpected error in contact API:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details:
          process.env.NODE_ENV === 'development'
            ? error.message
            : 'Something went wrong',
        code: 'INTERNAL_ERROR',
        timestamp: new Date().toISOString(),
      },
      { status: 500, headers }
    );
  }
}

export async function GET() {
  try {
    const configured = isEmailConfigured();
    return NextResponse.json({
      status: 'Contact API is running',
      timestamp: new Date().toISOString(),
      emailConfigured: configured,
      provider: 'titan',
      version: '2.0.0',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Health check failed', details: error.message },
      { status: 500 }
    );
  }
}
