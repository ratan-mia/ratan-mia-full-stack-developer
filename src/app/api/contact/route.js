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

    // Create transporter with correct method name
    const transporter = nodemailer.createTransport({
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
      console.log("SMTP connection verified successfully");
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af;">Thank you for your inquiry!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out regarding: <strong>${subject}</strong></p>
          <p>I'll get back to you within 24 hours with a detailed response.</p>
          <br>
          <p>Best regards,<br><strong>Ratan Mia</strong><br>Full Stack Developer</p>
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          </div>
          <div style="background: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
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
      text: `Dear ${name},\n\nThank you for reaching out regarding: ${subject}\n\nI'll get back to you within 24 hours.\n\nBest regards,\nRatan Mia\nFull Stack Developer`,
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
    } else {
      console.log("Client email sent successfully:", clientEmailResult.value.messageId);
    }

    if (adminEmailResult.status === 'rejected') {
      console.error("Failed to send admin email:", adminEmailResult.reason);
    } else {
      console.log("Admin email sent successfully:", adminEmailResult.value.messageId);
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
      console.error("Both emails failed to send");
      return NextResponse.json(
        { error: "Failed to send emails. Please try again or contact directly." },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Email sending error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to send email";
    
    if (error.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Please check your credentials.";
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = "Email service connection failed. Please try again.";
    } else if (error.message && error.message.includes('timeout')) {
      errorMessage = "Email service timeout. Please try again.";
    } else if (error.message && error.message.includes('Invalid login')) {
      errorMessage = "Email authentication error. Please check configuration.";
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}