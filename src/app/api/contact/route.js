import { adminEmailTemplate } from "@/lib/email-templates/admin-template";
import { clientEmailTemplate } from "@/lib/email-templates/client-template";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, projectType, budget } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
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

    // Create transporter with better error handling
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Add additional security options
      secure: true,
      port: 465,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Transporter verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Prepare email content with fallback handling
    let clientEmailHtml;
    let adminEmailHtml;

    try {
      clientEmailHtml = clientEmailTemplate({ name, subject });
    } catch (templateError) {
      console.error("Client email template error:", templateError);
      clientEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for your inquiry!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out regarding: ${subject}</p>
          <p>I'll get back to you within 24 hours.</p>
          <p>Best regards,<br>Ratan Mia</p>
        </div>
      `;
    }

    try {
      adminEmailHtml = adminEmailTemplate({
        name,
        email,
        subject,
        message,
        projectType,
        budget,
      });
    } catch (templateError) {
      console.error("Admin email template error:", templateError);
      adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    }

    // Send email to client (confirmation)
    const clientMailOptions = {
      from: `"Ratan Mia" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thank you for your inquiry - ${subject}`,
      html: clientEmailHtml,
      // Add text fallback
      text: `Dear ${name},\n\nThank you for reaching out regarding: ${subject}\n\nI'll get back to you within 24 hours.\n\nBest regards,\nRatan Mia`,
    };

    // Send email to admin (notification)
    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "shorifull@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: adminEmailHtml,
      // Add text fallback
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nProject Type: ${projectType || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nMessage:\n${message}`,
      // Add reply-to for easy response
      replyTo: email,
    };

    // Send both emails with individual error handling
    const emailResults = await Promise.allSettled([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    // Check if both emails were sent successfully
    const clientEmailResult = emailResults[0];
    const adminEmailResult = emailResults[1];

    if (clientEmailResult.status === 'rejected') {
      console.error("Failed to send client email:", clientEmailResult.reason);
    }

    if (adminEmailResult.status === 'rejected') {
      console.error("Failed to send admin email:", adminEmailResult.reason);
    }

    // Return appropriate response based on results
    if (clientEmailResult.status === 'fulfilled' || adminEmailResult.status === 'fulfilled') {
      return NextResponse.json(
        { 
          message: "Email sent successfully",
          details: {
            clientEmailSent: clientEmailResult.status === 'fulfilled',
            adminEmailSent: adminEmailResult.status === 'fulfilled',
          }
        },
        { status: 200 }
      );
    } else {
      // Both emails failed
      return NextResponse.json(
        { error: "Failed to send emails" },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Email sending error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to send email";
    
    if (error.code === 'EAUTH') {
      errorMessage = "Email authentication failed";
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = "Email service connection failed";
    } else if (error.message && error.message.includes('timeout')) {
      errorMessage = "Email service timeout";
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}