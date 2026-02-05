import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Import project inquiry email templates
let projectClientTemplate, projectAdminTemplate;

try {
  const clientModule = await import('@/lib/email-templates/project-client-template');
  const adminModule = await import('@/lib/email-templates/project-admin-template');
  projectClientTemplate = clientModule.projectClientTemplate;
  projectAdminTemplate = adminModule.projectAdminTemplate;
} catch (error) {
  console.error('Failed to import project inquiry email templates:', error);
  // Fallback templates
  projectClientTemplate = (formData) => `
    <h1>Thank you for your project inquiry, ${formData.fullName}!</h1>
    <p>We received your project details for ${formData.serviceRequired}.</p>
    <p>We'll review your requirements and get back to you at ${formData.email} within 24 hours.</p>
    <p>Best regards,<br>Ratan Mia - Full Stack Developer</p>
  `;
  projectAdminTemplate = (formData) => `
    <h1>New Project Inquiry</h1>
    <p><strong>Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Company:</strong> ${formData.companyName || 'N/A'}</p>
    <p><strong>Service Required:</strong> ${formData.serviceRequired}</p>
    <p><strong>Budget Range:</strong> ${formData.projectBudget}</p>
    <p><strong>Project Details:</strong><br>${formData.projectDetails}</p>
  `;
}

// Create Gmail transporter
const createTransporter = () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    return transporter;
  } catch (error) {
    console.error('Failed to create email transporter:', error);
    return null;
  }
};

// Validate form data
const validateFormData = (data) => {
  const errors = [];
  
  if (!data) {
    errors.push('No form data received');
    return errors;
  }
  
  // Validate full name
  if (!data.fullName || typeof data.fullName !== 'string') {
    errors.push('Full name is required');
  } else if (data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long');
  }
  
  // Validate email
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push('Please provide a valid email address');
  }
  
  // Validate service required
  if (!data.serviceRequired || typeof data.serviceRequired !== 'string') {
    errors.push('Service selection is required');
  }
  
  // Validate project budget
  if (!data.projectBudget || typeof data.projectBudget !== 'string') {
    errors.push('Budget range is required');
  }
  
  // Validate project details
  if (!data.projectDetails || typeof data.projectDetails !== 'string') {
    errors.push('Project details are required');
  } else if (data.projectDetails.trim().length < 20) {
    errors.push('Project details must be at least 20 characters long');
  }
  
  return errors;
};

export async function POST(request) {
  console.log('=== Project Inquiry API Called ===');
  
  try {
    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail credentials');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service is not properly configured. Please contact support.' 
        },
        { status: 500 }
      );
    }

    // Parse request body
    let formData;
    try {
      formData = await request.json();
      console.log('Received form data:', { ...formData, projectDetails: formData.projectDetails?.substring(0, 50) + '...' });
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { success: false, error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate form data
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      console.log('Validation errors:', validationErrors);
      return NextResponse.json(
        { success: false, errors: validationErrors },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();
    if (!transporter) {
      return NextResponse.json(
        { success: false, error: 'Failed to initialize email service' },
        { status: 500 }
      );
    }

    // Email to client (user who submitted the form)
    const clientMailOptions = {
      from: {
        name: 'Ratan Mia - Full Stack Developer',
        address: process.env.GMAIL_USER
      },
      to: formData.email,
      subject: `Thank you for your project inquiry - ${formData.serviceRequired}`,
      html: projectClientTemplate(formData),
    };

    // Email to admin (you)
    const adminMailOptions = {
      from: {
        name: 'Portfolio Website',
        address: process.env.GMAIL_USER
      },
      to: process.env.GMAIL_USER,
      subject: `New Project Inquiry from ${formData.fullName} - ${formData.serviceRequired}`,
      html: projectAdminTemplate(formData),
      replyTo: formData.email,
    };

    // Send both emails
    console.log('Sending emails...');
    const [clientResult, adminResult] = await Promise.allSettled([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    // Check results
    const clientSent = clientResult.status === 'fulfilled';
    const adminSent = adminResult.status === 'fulfilled';

    if (clientResult.status === 'rejected') {
      console.error('Failed to send client email:', clientResult.reason);
    }
    if (adminResult.status === 'rejected') {
      console.error('Failed to send admin email:', adminResult.reason);
    }

    if (!clientSent && !adminSent) {
      return NextResponse.json(
        { success: false, error: 'Failed to send emails. Please try again later.' },
        { status: 500 }
      );
    }

    console.log('Emails sent successfully');
    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ll review your project and get back to you within 24 hours.',
      details: {
        clientEmailSent: clientSent,
        adminEmailSent: adminSent
      }
    });

  } catch (error) {
    console.error('Unexpected error in project inquiry API:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
