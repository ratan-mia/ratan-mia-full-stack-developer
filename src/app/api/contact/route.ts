import { adminEmailTemplate } from "@/lib/email-templates/admin-template";
import { clientEmailTemplate } from "@/lib/email-templates/client-template";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  budget: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
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

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Send email to client (confirmation)
    const clientMailOptions = {
      from: `"Ratan Mia" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thank you for your inquiry - ${subject}`,
      html: clientEmailTemplate({ name, subject }),
    };

    // Send email to admin (notification)
    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: "shorifull@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: adminEmailTemplate({
        name,
        email,
        subject,
        message,
        projectType,
        budget,
      }),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
