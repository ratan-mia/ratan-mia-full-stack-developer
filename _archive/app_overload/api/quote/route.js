import { quoteAdminEmailTemplate } from "@/lib/email-templates/quote-admin-template";
import { quoteClientEmailTemplate } from "@/lib/email-templates/quote-client-template";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create transporter with correct method name
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    secure: true,
    port: 465,
  });
};

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'projectType', 'budget', 'description'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing email configuration environment variables");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully for quote request");
    } catch (verifyError) {
      console.error("Transporter verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Generate reference ID
    const referenceId = Date.now().toString().slice(-6);

    // Prepare email content with fallback handling
    let clientEmailHtml;
    let adminEmailHtml;

    try {
      clientEmailHtml = quoteClientEmailTemplate({ ...formData, referenceId });
    } catch (templateError) {
      console.error("Client quote email template error:", templateError);
      clientEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af;">Thank you for your quote request!</h2>
          <p>Dear ${formData.name},</p>
          <p>Thank you for your interest in my services. I'll review your project requirements and get back to you with a detailed quote within 24 hours.</p>
          <p><strong>Project Type:</strong> ${formData.projectType}</p>
          <p><strong>Reference ID:</strong> #${referenceId}</p>
          <br>
          <p>Best regards,<br><strong>Ratan Mia</strong><br>Full Stack Developer</p>
        </div>
      `;
    }

    try {
      adminEmailHtml = quoteAdminEmailTemplate({ ...formData, referenceId });
    } catch (templateError) {
      console.error("Admin quote email template error:", templateError);
      adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #dc2626;">New Quote Request</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${formData.projectType}</p>
            <p><strong>Budget:</strong> ${formData.budget}</p>
            <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
            <p><strong>Priority:</strong> ${formData.priority || 'Normal'}</p>
            <p><strong>Reference ID:</strong> #${referenceId}</p>
          </div>
          <div style="background: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0;">Project Description:</h3>
            <p style="white-space: pre-wrap;">${formData.description}</p>
          </div>
          ${formData.features && formData.features.length > 0 ? `
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h3>Required Features:</h3>
            <ul>${formData.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
          </div>
          ` : ''}
        </div>
      `;
    }

    // Email to admin
    const adminMailOptions = {
      from: `"Portfolio Quote System" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'shorifull@gmail.com',
      subject: `🚀 New Quote Request - ${formData.name} (${formData.projectType}) - #${referenceId}`,
      html: adminEmailHtml,
      text: `New Quote Request\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nDescription: ${formData.description}\nReference ID: #${referenceId}`,
      replyTo: formData.email,
    };

    // Email to client
    const clientMailOptions = {
      from: `"Ratan Mia" <${process.env.GMAIL_USER}>`,
      to: formData.email,
      subject: `🎉 Quote Request Received - Reference #${referenceId}`,
      html: clientEmailHtml,
      text: `Dear ${formData.name},\n\nThank you for your quote request! I'll review your project requirements and get back to you with a detailed quote within 24 hours.\n\nProject Type: ${formData.projectType}\nReference ID: #${referenceId}\n\nBest regards,\nRatan Mia\nFull Stack Developer`,
    };

    // Send both emails with individual error handling
    const emailResults = await Promise.allSettled([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    // Check results
    const clientEmailResult = emailResults[0];
    const adminEmailResult = emailResults[1];

    if (clientEmailResult.status === 'rejected') {
      console.error("Failed to send client quote email:", clientEmailResult.reason);
    } else {
      console.log("Client quote email sent successfully:", clientEmailResult.value.messageId);
    }

    if (adminEmailResult.status === 'rejected') {
      console.error("Failed to send admin quote email:", adminEmailResult.reason);
    } else {
      console.log("Admin quote email sent successfully:", adminEmailResult.value.messageId);
    }

    // Return appropriate response
    if (clientEmailResult.status === 'fulfilled' || adminEmailResult.status === 'fulfilled') {
      return NextResponse.json(
        { 
          message: 'Quote request sent successfully',
          status: 'success',
          referenceId: referenceId,
          details: {
            clientEmailSent: clientEmailResult.status === 'fulfilled',
            adminEmailSent: adminEmailResult.status === 'fulfilled',
          }
        },
        { status: 200 }
      );
    } else {
      console.error("Both quote emails failed to send");
      return NextResponse.json(
        { error: 'Failed to send quote request. Please try again or contact directly.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing quote request:', error);
    
    let errorMessage = "Failed to process quote request";
    
    if (error.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Please check configuration.";
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = "Email service connection failed. Please try again.";
    } else if (error.message && error.message.includes('timeout')) {
      errorMessage = "Email service timeout. Please try again.";
    }
    
    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: 500 }
    );
  }
}