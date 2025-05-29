// app/api/quote/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email templates
const getAdminEmailTemplate = (formData) => {
  const projectTypeNames = {
    'web-development': 'Full Stack Web Development',
    'ecommerce': 'E-commerce Solution',
    'wordpress': 'WordPress Development',
    'performance': 'Performance Optimization',
    'ai-integration': 'AI Integration',
    'devops': 'DevOps & Cloud Solutions',
    'mobile-app': 'Mobile App Development',
    'other': 'Other / Custom Solution'
  };

  const budgetLabels = {
    'under-5k': 'Under $5,000',
    '5k-15k': '$5,000 - $15,000',
    '15k-30k': '$15,000 - $30,000',
    '30k-50k': '$30,000 - $50,000',
    'over-50k': 'Over $50,000',
    'discuss': 'Let\'s Discuss'
  };

  const timelineLabels = {
    'asap': 'ASAP (Rush Job)',
    '1-2weeks': '1-2 Weeks',
    '1month': '1 Month',
    '2-3months': '2-3 Months',
    '3-6months': '3-6 Months',
    'flexible': 'Flexible Timeline'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Quote Request</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 30px; text-align: center; }
            .content { background: #f8fafc; padding: 30px; }
            .section { background: white; margin: 20px 0; padding: 20px; border-left: 4px solid #2563eb; }
            .section h3 { color: #1e293b; margin-top: 0; font-size: 18px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
            .info-item { background: #f1f5f9; padding: 15px; }
            .info-item strong { color: #475569; display: block; margin-bottom: 5px; }
            .features-list { background: #eff6ff; padding: 15px; margin: 15px 0; }
            .features-list ul { margin: 10px 0; padding-left: 20px; }
            .priority-badge { display: inline-block; padding: 5px 15px; color: white; font-weight: bold; text-transform: uppercase; }
            .priority-low { background: #10b981; }
            .priority-medium { background: #f59e0b; }
            .priority-high { background: #ef4444; }
            .priority-urgent { background: #dc2626; animation: pulse 2s infinite; }
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
            .footer { background: #1e293b; color: white; padding: 20px; text-align: center; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 New Quote Request Received!</h1>
                <p>A potential client is interested in your services</p>
            </div>
            
            <div class="content">
                <div class="section">
                    <h3>👤 Client Information</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Full Name:</strong>
                            ${formData.name}
                        </div>
                        <div class="info-item">
                            <strong>Email:</strong>
                            ${formData.email}
                        </div>
                        <div class="info-item">
                            <strong>Company:</strong>
                            ${formData.company || 'Not provided'}
                        </div>
                        <div class="info-item">
                            <strong>Phone:</strong>
                            ${formData.phone || 'Not provided'}
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h3>📋 Project Details</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Project Type:</strong>
                            ${projectTypeNames[formData.projectType] || formData.projectType}
                        </div>
                        <div class="info-item">
                            <strong>Budget Range:</strong>
                            ${budgetLabels[formData.budget] || formData.budget}
                        </div>
                        <div class="info-item">
                            <strong>Timeline:</strong>
                            ${timelineLabels[formData.timeline] || formData.timeline || 'Not specified'}
                        </div>
                        <div class="info-item">
                            <strong>Priority:</strong>
                            <span class="priority-badge priority-${formData.priority}">${formData.priority}</span>
                        </div>
                    </div>
                </div>

                ${formData.features.length > 0 ? `
                <div class="section">
                    <h3>✨ Required Features</h3>
                    <div class="features-list">
                        <ul>
                            ${formData.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                ` : ''}

                <div class="section">
                    <h3>📝 Project Description</h3>
                    <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
                        ${formData.description.replace(/\n/g, '<br>')}
                    </div>
                </div>

                <div class="section">
                    <h3>📊 Quick Stats</h3>
                    <div style="background: #fef3c7; padding: 15px; border: 1px solid #fbbf24;">
                        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                        <p><strong>Lead Score:</strong> ${formData.budget === 'over-50k' || formData.priority === 'urgent' ? 'High 🔥' : formData.budget === 'discuss' ? 'Medium 💼' : 'Standard 📋'}</p>
                        <p><strong>Response Time:</strong> ${formData.priority === 'urgent' ? 'Within 2 hours' : formData.priority === 'high' ? 'Within 6 hours' : 'Within 24 hours'}</p>
                    </div>
                </div>
            </div>

            <div class="footer">
                <p>💻 <strong>Action Required:</strong> Review the project details and prepare a customized quote</p>
                <p>📧 Reply directly to this email to respond to the client</p>
                <p>🕒 Expected response time: Based on priority level above</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const getClientEmailTemplate = (formData) => {
  const projectTypeNames = {
    'web-development': 'Full Stack Web Development',
    'ecommerce': 'E-commerce Solution',
    'wordpress': 'WordPress Development',
    'performance': 'Performance Optimization',
    'ai-integration': 'AI Integration',
    'devops': 'DevOps & Cloud Solutions',
    'mobile-app': 'Mobile App Development',
    'other': 'Other / Custom Solution'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Quote Request Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 700px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .header p { margin: 10px 0 0 0; opacity: 0.9; }
            .content { padding: 40px 30px; background: #ffffff; }
            .section { margin: 30px 0; }
            .section h3 { color: #1e293b; font-size: 20px; margin-bottom: 15px; }
            .highlight-box { background: #f0f9ff; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0; }
            .project-summary { background: #f8fafc; padding: 25px; margin: 25px 0; border: 1px solid #e2e8f0; }
            .project-summary h4 { color: #475569; margin-top: 0; }
            .next-steps { background: #ecfdf5; border: 1px solid #10b981; padding: 25px; margin: 25px 0; }
            .next-steps h4 { color: #065f46; margin-top: 0; }
            .next-steps ul { margin: 15px 0; padding-left: 20px; }
            .next-steps li { margin: 8px 0; }
            .contact-info { background: #fef3c7; border: 1px solid #fbbf24; padding: 20px; text-align: center; }
            .footer { background: #1e293b; color: white; padding: 30px; text-align: center; }
            .footer p { margin: 5px 0; }
            .btn { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; font-weight: bold; margin: 10px 0; }
            .social-links { margin: 20px 0; }
            .social-links a { color: #94a3b8; text-decoration: none; margin: 0 10px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Thank You for Your Interest!</h1>
                <p>Your quote request has been received and is being reviewed</p>
            </div>
            
            <div class="content">
                <div class="section">
                    <p>Hi <strong>${formData.name}</strong>,</p>
                    
                    <p>Thank you for reaching out! I'm excited about the possibility of working together on your <strong>${projectTypeNames[formData.projectType] || formData.projectType}</strong> project.</p>
                    
                    <div class="highlight-box">
                        <h4>📋 What happens next?</h4>
                        <p>I'll carefully review your project requirements and prepare a detailed, customized quote that includes:</p>
                        <ul>
                            <li>Project timeline and milestones</li>
                            <li>Detailed cost breakdown</li>
                            <li>Technical approach and recommendations</li>
                            <li>Next steps and project kickoff process</li>
                        </ul>
                    </div>
                </div>

                <div class="project-summary">
                    <h4>📄 Your Project Summary</h4>
                    <p><strong>Project Type:</strong> ${projectTypeNames[formData.projectType] || formData.projectType}</p>
                    ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
                    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                    <p><strong>Reference ID:</strong> #${Date.now().toString().slice(-6)}</p>
                </div>

                <div class="next-steps">
                    <h4>🚀 Next Steps</h4>
                    <ul>
                        <li><strong>Quote Preparation:</strong> I'll analyze your requirements and prepare a comprehensive quote</li>
                        <li><strong>Response Time:</strong> You'll receive my detailed response within ${formData.priority === 'urgent' ? '2 hours' : formData.priority === 'high' ? '6 hours' : '24 hours'}</li>
                        <li><strong>Free Consultation:</strong> A 30-minute strategy call is included to discuss your project in detail</li>
                        <li><strong>Project Planning:</strong> If you decide to move forward, we'll create a detailed project roadmap</li>
                    </ul>
                </div>

                <div class="section">
                    <h3>💡 While You Wait</h3>
                    <p>Feel free to:</p>
                    <ul>
                        <li>Check out my <a href="#portfolio" style="color: #2563eb;">recent projects</a> to see examples of similar work</li>
                        <li>Read <a href="#testimonials" style="color: #2563eb;">client testimonials</a> to learn about their experiences</li>
                        <li>Prepare any additional materials or questions you'd like to discuss</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h4>📞 Need to reach me immediately?</h4>
                    <p><strong>Email:</strong> shorifull@gmail.com</p>
                    <p><strong>Response Time:</strong> Usually within 2-4 hours during business hours</p>
                </div>

                <div class="section">
                    <p>I'm looking forward to discussing your project and showing you how we can bring your vision to life!</p>
                    
                    <p>Best regards,<br>
                    <strong>Ratan Mia</strong><br>
                    Full Stack Developer<br>
                    10+ Years Experience</p>
                </div>
            </div>

            <div class="footer">
                <p>🌟 <strong>Trusted by 100+ clients worldwide</strong></p>
                <p>📧 shorifull@gmail.com | 🌐 www.ratanmia.dev</p>
                
                <div class="social-links">
                    <a href="#linkedin">LinkedIn</a> •
                    <a href="#github">GitHub</a> •
                    <a href="#portfolio">Portfolio</a>
                </div>
                
                <p style="font-size: 12px; opacity: 0.7; margin-top: 20px;">
                    This is an automated confirmation. Please do not reply to this email directly.<br>
                    For urgent matters, contact me at shorifull@gmail.com
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
    },
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

    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: 'shorifull@gmail.com',
      subject: `🚀 New Quote Request - ${formData.name} (${formData.projectType})`,
      html: getAdminEmailTemplate(formData),
      replyTo: formData.email,
    };

    // Email to client
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: formData.email,
      subject: '🎉 Quote Request Received - Ratan Mia | Full Stack Developer',
      html: getClientEmailTemplate(formData),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json(
      { 
        message: 'Quote request sent successfully',
        status: 'success',
        referenceId: Date.now().toString().slice(-6)
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request', details: error.message },
      { status: 500 }
    );
  }
}