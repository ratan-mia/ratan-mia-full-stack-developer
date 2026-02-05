import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Import contact email templates
let contactClientTemplate, contactAdminTemplate;

try {
  const clientModule = await import('@/lib/email-templates/contact-client-template');
  const adminModule = await import('@/lib/email-templates/contact-admin-template');
  contactClientTemplate = clientModule.contactClientTemplate;
  contactAdminTemplate = adminModule.contactAdminTemplate;
} catch (error) {
  console.error('Failed to import contact email templates:', error);
  // Fallback templates
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

// Create Gmail transporter with better error handling
const createTransporter = () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS, // Fallback to old env var
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    transporter.verify((error, success) => {
      if (error) {
        console.error('Transporter verification failed:', error);
      } else {
        console.log('Email transporter is ready');
      }
    });

    return transporter;
  } catch (error) {
    console.error('Failed to create email transporter:', error);
    return null;
  }
};

// Validate form data with detailed error messages
const validateFormData = (data) => {
  const errors = [];
  
  // Check if data exists
  if (!data) {
    errors.push('No form data received');
    return errors;
  }
  
  // Validate name
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  // Validate email
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push('Please provide a valid email address');
  }
  
  // Validate subject
  if (!data.subject || typeof data.subject !== 'string') {
    errors.push('Subject is required');
  } else if (data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  } else if (data.subject.trim().length > 200) {
    errors.push('Subject must be less than 200 characters');
  }
  
  // Validate message
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (data.message.trim().length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }
  
  return errors;
};

// Sanitize form data
const sanitizeFormData = (data) => {
  return {
    name: (data.name || '').trim().substring(0, 100),
    email: (data.email || '').trim().toLowerCase().substring(0, 254),
    subject: (data.subject || '').trim().substring(0, 200),
    message: (data.message || '').trim().substring(0, 2000),
    projectType: (data.projectType || '').trim().substring(0, 100),
    budget: (data.budget || '').trim().substring(0, 50),
    timestamp: new Date().toISOString()
  };
};

// POST handler for form submission
export async function POST(request) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    console.log('📧 Contact form submission started');

    // Check environment variables first
    const requiredEnvVars = {
      GMAIL_USER: process.env.GMAIL_USER,
      GMAIL_PASS: process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS
    };

    const missingEnvVars = Object.entries(requiredEnvVars)
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    if (missingEnvVars.length > 0) {
      console.error('❌ Missing environment variables:', missingEnvVars);
      return NextResponse.json(
        { 
          error: 'Email service not configured', 
          details: `Missing: ${missingEnvVars.join(', ')}`,
          code: 'ENV_CONFIG_ERROR'
        },
        { status: 503, headers }
      );
    }

    // Parse form data with error handling
    let rawFormData;
    try {
      rawFormData = await request.json();
      console.log('📝 Raw form data received:', { 
        hasName: !!rawFormData?.name,
        hasEmail: !!rawFormData?.email,
        hasSubject: !!rawFormData?.subject,
        hasMessage: !!rawFormData?.message
      });
    } catch (error) {
      console.error('❌ Failed to parse JSON:', error);
      return NextResponse.json(
        { 
          error: 'Invalid JSON data', 
          details: error.message,
          code: 'JSON_PARSE_ERROR'
        },
        { status: 400, headers }
      );
    }
    
    // Validate form data
    const validationErrors = validateFormData(rawFormData);
    if (validationErrors.length > 0) {
      console.error('❌ Validation errors:', validationErrors);
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationErrors,
          code: 'VALIDATION_ERROR'
        },
        { status: 400, headers }
      );
    }

    // Sanitize form data
    const formData = sanitizeFormData(rawFormData);
    console.log('✅ Form data validated and sanitized');
    
    // Create transporter
    const transporter = createTransporter();
    if (!transporter) {
      console.error('❌ Failed to create email transporter');
      return NextResponse.json(
        { 
          error: 'Email service initialization failed',
          code: 'TRANSPORTER_ERROR'
        },
        { status: 503, headers }
      );
    }

    // Generate email templates with error handling
    let clientHtml, adminHtml;
    try {
      clientHtml = contactClientTemplate(formData);
      adminHtml = contactAdminTemplate(formData);
      console.log('✅ Contact email templates generated successfully');
    } catch (error) {
      console.error('❌ Email template generation failed:', error);
      return NextResponse.json(
        { 
          error: 'Email template generation failed',
          details: error.message,
          code: 'TEMPLATE_ERROR'
        },
        { status: 500, headers }
      );
    }
    
    // Prepare client confirmation email
    const clientMailOptions = {
      from: {
        name: 'Ratan Mia - Full Stack Developer',
        address: process.env.GMAIL_USER
      },
      to: formData.email,
      subject: `✅ Thank you for reaching out, ${formData.name}!`,
      html: clientHtml,
      headers: {
        'X-Mailer': 'Ratan Mia Portfolio Contact Form',
        'X-Priority': '3'
      }
    };
    
    // Prepare admin notification email
    const adminMailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.GMAIL_USER
      },
      to: 'shorifull@gmail.com',
      subject: `🔔 New Contact: ${formData.name} - ${formData.subject}`,
      html: adminHtml,
      replyTo: formData.email,
      headers: {
        'X-Mailer': 'Ratan Mia Portfolio Contact Form',
        'X-Priority': '1'
      }
    };
    
    console.log('📤 Attempting to send emails...');
    
    // Send both emails with individual error handling
    const emailResults = await Promise.allSettled([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    const clientResult = emailResults[0];
    const adminResult = emailResults[1];

    // Check results
    const success = {
      client: clientResult.status === 'fulfilled',
      admin: adminResult.status === 'fulfilled'
    };

    console.log('📧 Email send results:', success);

    if (success.client && success.admin) {
      console.log('✅ Both emails sent successfully');
      return NextResponse.json(
        { 
          message: 'Your message has been sent successfully! Check your email for confirmation.',
          timestamp: formData.timestamp,
          code: 'SUCCESS'
        },
        { status: 200, headers }
      );
    } else {
      // Partial failure
      const errors = [];
      if (!success.client) {
        console.error('❌ Client confirmation email failed:', clientResult.reason);
        errors.push(`Client email failed: ${clientResult.reason?.message || 'Unknown error'}`);
      }
      if (!success.admin) {
        console.error('❌ Admin notification email failed:', adminResult.reason);
        errors.push(`Admin email failed: ${adminResult.reason?.message || 'Unknown error'}`);
      }

      return NextResponse.json(
        { 
          error: 'Partial email failure',
          details: errors,
          success,
          code: 'PARTIAL_FAILURE'
        },
        { status: 207, headers } // 207 Multi-Status
      );
    }
    
  } catch (error) {
    console.error('❌ Unexpected error in contact API:', error);
    console.error('Stack trace:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
        code: 'INTERNAL_ERROR',
        timestamp: new Date().toISOString()
      },
      { status: 500, headers }
    );
  }
}

// GET handler for health check
export async function GET() {
  try {
    const envStatus = {
      GMAIL_USER: !!process.env.GMAIL_USER,
      GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD,
      GMAIL_PASS: !!process.env.GMAIL_PASS,
    };

    const isConfigured = envStatus.GMAIL_USER && (envStatus.GMAIL_APP_PASSWORD || envStatus.GMAIL_PASS);

    return NextResponse.json({
      status: 'Contact API is running',
      timestamp: new Date().toISOString(),
      emailConfigured: isConfigured,
      environment: envStatus,
      version: '1.1.0'
    });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Health check failed',
        details: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}