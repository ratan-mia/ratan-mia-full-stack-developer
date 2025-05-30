interface AdminEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  budget: string;
}

export const adminEmailTemplate = ({
  name,
  email,
  subject,
  message,
  projectType,
  budget,
}: AdminEmailProps): string => {
  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
        }
        .container {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          font-size: 24px;
          margin-bottom: 5px;
          font-weight: 700;
        }
        .header .timestamp {
          font-size: 14px;
          opacity: 0.9;
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          display: inline-block;
          margin-top: 10px;
        }
        .content {
          padding: 30px;
        }
        .alert {
          background: #fef3c7;
          border: 1px solid #f59e0b;
          color: #92400e;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 25px;
          font-weight: 600;
          text-align: center;
        }
        .client-info {
          background: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 25px;
        }
        .client-info h3 {
          color: #0c4a6e;
          margin-bottom: 15px;
          font-size: 18px;
          border-bottom: 2px solid #0ea5e9;
          padding-bottom: 5px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }
        .info-item {
          background: white;
          padding: 12px;
          border-radius: 6px;
          border-left: 4px solid #0ea5e9;
        }
        .info-item label {
          font-weight: 600;
          color: #374151;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 5px;
        }
        .info-item .value {
          color: #1f2937;
          font-size: 14px;
          font-weight: 500;
        }
        .project-details {
          background: #f9fafb;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 25px;
        }
        .project-details h3 {
          color: #374151;
          margin-bottom: 15px;
          font-size: 18px;
          border-bottom: 2px solid #6b7280;
          padding-bottom: 5px;
        }
        .message-content {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 15px;
          color: #374151;
          line-height: 1.6;
          white-space: pre-wrap;
          font-size: 14px;
        }
        .priority-info {
          background: #fef2f2;
          border: 1px solid #fca5a5;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 25px;
        }
        .priority-info h4 {
          color: #dc2626;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .priority-info ul {
          color: #7f1d1d;
          padding-left: 20px;
        }
        .priority-info li {
          margin-bottom: 5px;
          font-size: 14px;
        }
        .action-buttons {
          text-align: center;
          margin: 25px 0;
        }
        .btn {
          display: inline-block;
          padding: 12px 25px;
          margin: 0 10px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: #1e40af;
          color: white;
        }
        .btn-secondary {
          background: #059669;
          color: white;
        }
        .footer {
          background: #374151;
          color: white;
          padding: 20px;
          text-align: center;
          font-size: 12px;
        }
        .footer p {
          opacity: 0.8;
        }
        @media (max-width: 600px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          .btn {
            display: block;
            margin: 10px auto;
            width: 200px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 New Contact Form Submission</h1>
          <div class="timestamp">📅 ${currentDate}</div>
        </div>
        
        <div class="content">
          <div class="alert">
            ⚡ Action Required: New client inquiry received!
          </div>
          
          <div class="client-info">
            <h3>👤 Client Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Full Name</label>
                <div class="value">${name}</div>
              </div>
              <div class="info-item">
                <label>Email Address</label>
                <div class="value">${email}</div>
              </div>
              <div class="info-item">
                <label>Subject</label>
                <div class="value">${subject}</div>
              </div>
              <div class="info-item">
                <label>Submission Time</label>
                <div class="value">${currentDate}</div>
              </div>
            </div>
            
            ${
              projectType || budget
                ? `
            <div class="info-grid">
              ${
                projectType
                  ? `
              <div class="info-item">
                <label>Project Type</label>
                <div class="value">${projectType}</div>
              </div>
              `
                  : ""
              }
              ${
                budget
                  ? `
              <div class="info-item">
                <label>Budget Range</label>
                <div class="value">${budget}</div>
              </div>
              `
                  : ""
              }
            </div>
            `
                : ""
            }
          </div>
          
          <div class="project-details">
            <h3>📋 Project Details</h3>
            <div class="message-content">${message}</div>
          </div>
          
          <div class="priority-info">
            <h4>⏰ Response Checklist</h4>
            <ul>
              <li>Respond within 24 hours (as promised to client)</li>
              <li>Review project requirements thoroughly</li>
              <li>Prepare initial questions and timeline estimate</li>
              <li>Check portfolio for relevant similar projects</li>
              <li>Consider project complexity and current workload</li>
            </ul>
          </div>
          
          <div class="action-buttons">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Hi ${name},\n\nThank you for your inquiry about "${subject}". I've reviewed your project requirements and I'm excited to discuss this opportunity with you.\n\n[Add your personalized response here]\n\nBest regards,\nRatan Mia`
  )}" class="btn btn-primary">
              📧 Reply to Client
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(
              `New contact form submission from ${name} (${email}) regarding: ${subject}`
            )}" class="btn btn-secondary">
              📱 Share via WhatsApp
            </a>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f3f4f6; border-radius: 8px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 10px;">
              <strong>Quick Stats:</strong>
            </p>
            <p style="color: #374151; font-size: 13px;">
              This email was generated automatically from your portfolio contact form.<br>
              Client has received an automated confirmation email.
            </p>
          </div>
        </div>
        
        <div class="footer">
          <p>Portfolio Contact Management System</p>
          <p>shorifullislamratan.com | Full Stack Developer</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
