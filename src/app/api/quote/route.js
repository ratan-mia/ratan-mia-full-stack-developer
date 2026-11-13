import { quoteAdminEmailTemplate } from '@/lib/email-templates/quote-admin-template';
import { quoteClientEmailTemplate } from '@/lib/email-templates/quote-client-template';
import { NextResponse } from 'next/server';
import {
  createTransporter,
  fromHeader,
  getEmailConfig,
  isEmailConfigured,
} from '@/lib/email';

export async function POST(request) {
  try {
    const formData = await request.json();

    const requiredFields = [
      'name',
      'email',
      'projectType',
      'budget',
      'description',
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!isEmailConfigured()) {
      console.error('Missing Titan SMTP credentials');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    const transporter = createTransporter();
    const { adminEmail } = getEmailConfig();

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    const referenceId = Date.now().toString().slice(-6);

    let clientEmailHtml;
    let adminEmailHtml;

    try {
      clientEmailHtml = quoteClientEmailTemplate({ ...formData, referenceId });
    } catch (templateError) {
      console.error('Client quote email template error:', templateError);
      clientEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>Thank you for your quote request!</h2>
          <p>Dear ${formData.name},</p>
          <p>Thank you for your interest. I'll review your project and get back to you within 24 hours.</p>
          <p><strong>Reference ID:</strong> #${referenceId}</p>
          <p>Best regards,<br><strong>Ratan Mia</strong></p>
        </div>
      `;
    }

    try {
      adminEmailHtml = quoteAdminEmailTemplate({ ...formData, referenceId });
    } catch (templateError) {
      console.error('Admin quote email template error:', templateError);
      adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Project Type:</strong> ${formData.projectType}</p>
          <p><strong>Budget:</strong> ${formData.budget}</p>
          <p><strong>Reference ID:</strong> #${referenceId}</p>
          <p>${formData.description}</p>
        </div>
      `;
    }

    const adminMailOptions = {
      from: fromHeader('Portfolio Quote System'),
      to: adminEmail,
      subject: `🚀 New Quote Request - ${formData.name} (${formData.projectType}) - #${referenceId}`,
      html: adminEmailHtml,
      text: `New Quote Request\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nDescription: ${formData.description}\nReference ID: #${referenceId}`,
      replyTo: formData.email,
    };

    const clientMailOptions = {
      from: fromHeader('Ratan Mia'),
      to: formData.email,
      subject: `🎉 Quote Request Received - Reference #${referenceId}`,
      html: clientEmailHtml,
      text: `Dear ${formData.name},\n\nThank you for your quote request! I'll get back to you within 24 hours.\n\nReference ID: #${referenceId}\n\nBest regards,\nRatan Mia`,
    };

    const emailResults = await Promise.allSettled([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    const clientEmailResult = emailResults[0];
    const adminEmailResult = emailResults[1];

    if (clientEmailResult.status === 'rejected') {
      console.error('Failed to send client quote email:', clientEmailResult.reason);
    }
    if (adminEmailResult.status === 'rejected') {
      console.error('Failed to send admin quote email:', adminEmailResult.reason);
    }

    if (
      clientEmailResult.status === 'fulfilled' ||
      adminEmailResult.status === 'fulfilled'
    ) {
      return NextResponse.json(
        {
          message: 'Quote request sent successfully',
          status: 'success',
          referenceId,
          details: {
            clientEmailSent: clientEmailResult.status === 'fulfilled',
            adminEmailSent: adminEmailResult.status === 'fulfilled',
          },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        error:
          'Failed to send quote request. Please try again or contact directly.',
      },
      { status: 500 }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);

    let errorMessage = 'Failed to process quote request';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check configuration.';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Email service connection failed. Please try again.';
    } else if (error.message && error.message.includes('timeout')) {
      errorMessage = 'Email service timeout. Please try again.';
    }

    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: 500 }
    );
  }
}
