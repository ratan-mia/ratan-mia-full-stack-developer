export const adminEmailTemplate = ({
  name,
  email,
  subject,
  message,
  projectType,
  budget,
}) => {
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
          font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #334155;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          margin: 0;
          padding: 20px 0;
        }
        
        .email-container {
          max-width: 720px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .header {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
          color: #ffffff;
          padding: 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          z-index: 1;
        }
        
        .header-content {
          position: relative;
          z-index: 2;
        }
        
        .header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 12px;
          text-transform: capitalize;
          letter-spacing: -0.025em;
        }
        
        .timestamp-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 500;
          margin-top: 12px;
          backdrop-filter: blur(8px);
        }
        
        .content {
          padding: 40px 32px;
        }
        
        .urgent-alert {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #92400e;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 32px;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          position: relative;
          overflow: hidden;
        }
        
        .urgent-alert::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }
        
        .info-section {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 1px solid rgba(14, 165, 233, 0.2);
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }
        
        .info-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
        }
        
        .info-section h3 {
          font-size: 20px;
          font-weight: 600;
          color: #0c4a6e;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .info-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(14, 165, 233, 0.1);
          border-radius: 8px;
          padding: 16px;
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .info-label {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }
        
        .info-value {
          font-size: 15px;
          font-weight: 500;
          color: #1e293b;
          word-break: break-word;
        }
        
        .project-section {
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
          border: 1px solid rgba(107, 114, 128, 0.2);
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }
        
        .project-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
        }
        
        .project-section h3 {
          font-size: 20px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .message-content {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(229, 231, 235, 0.5);
          border-radius: 8px;
          padding: 20px;
          color: #374151;
          line-height: 1.7;
          white-space: pre-wrap;
          font-size: 15px;
          font-weight: 300;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .priority-section {
          background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
          border: 1px solid rgba(248, 113, 113, 0.3);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
        }
        
        .priority-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        }
        
        .priority-section h4 {
          font-size: 18px;
          font-weight: 600;
          color: #dc2626;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .checklist {
          list-style: none;
          padding: 0;
        }
        
        .checklist li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 400;
          color: #7f1d1d;
          line-height: 1.5;
        }
        
        .checklist li::before {
          content: '✓';
          background: #dc2626;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .action-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin: 32px 0;
          flex-wrap: wrap;
        }
        
        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          min-width: 180px;
          justify-content: center;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 64, 175, 0.4);
          color: white;
          text-decoration: none;
        }
        
        .btn-secondary {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
        }
        
        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(5, 150, 105, 0.4);
          color: white;
          text-decoration: none;
        }
        
        .stats-section {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border: 1px solid rgba(156, 163, 175, 0.3);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          margin-top: 32px;
        }
        
        .stats-title {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 12px;
        }
        
        .stats-text {
          font-size: 14px;
          font-weight: 300;
          color: #6b7280;
          line-height: 1.6;
        }
        
        .footer {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: #e2e8f0;
          padding: 32px;
          text-align: center;
        }
        
        .footer-text {
          font-size: 14px;
          font-weight: 300;
          opacity: 0.8;
          margin-bottom: 8px;
        }
        
        .footer-subtitle {
          font-size: 13px;
          font-weight: 300;
          opacity: 0.6;
        }
        
        /* Responsive Design */
        @media (max-width: 640px) {
          body {
            padding: 10px 0;
          }
          
          .email-container {
            margin: 0 10px;
            border-radius: 12px;
          }
          
          .header {
            padding: 24px;
          }
          
          .header h1 {
            font-size: 24px;
          }
          
          .content {
            padding: 24px;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .action-btn {
            width: 100%;
            max-width: 280px;
          }
          
          .info-section,
          .project-section,
          .priority-section {
            padding: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .checklist li {
            font-size: 13px;
          }
          
          .message-content {
            font-size: 14px;
            padding: 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header Section -->
        <div class="header">
          <div class="header-content">
            <h1>🚨 New Contact Form Submission</h1>
            <div class="timestamp-badge">
              <span>📅</span>
              <span>${currentDate}</span>
            </div>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
          <!-- Urgent Alert -->
          <div class="urgent-alert">
            ⚡ Action Required: New client inquiry received and needs immediate attention!
          </div>
          
          <!-- Client Information -->
          <div class="info-section">
            <h3>
              <span>👤</span>
              <span>Client Information</span>
            </h3>
            <div class="info-grid">
              <div class="info-card">
                <div class="info-label">Full Name</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Email Address</div>
                <div class="info-value">${email}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Subject</div>
                <div class="info-value">${subject}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Submission Time</div>
                <div class="info-value">${currentDate}</div>
              </div>
            </div>
            
            ${
              projectType || budget
                ? `
            <div class="info-grid">
              ${
                projectType
                  ? `
              <div class="info-card">
                <div class="info-label">Project Type</div>
                <div class="info-value">${projectType}</div>
              </div>
              `
                  : ""
              }
              ${
                budget
                  ? `
              <div class="info-card">
                <div class="info-label">Budget Range</div>
                <div class="info-value">${budget}</div>
              </div>
              `
                  : ""
              }
            </div>
            `
                : ""
            }
          </div>
          
          <!-- Project Details -->
          <div class="project-section">
            <h3>
              <span>📋</span>
              <span>Project Details & Requirements</span>
            </h3>
            <div class="message-content">${message}</div>
          </div>
          
          <!-- Priority Checklist -->
          <div class="priority-section">
            <h4>
              <span>⏰</span>
              <span>Response Action Plan</span>
            </h4>
            <ul class="checklist">
              <li>Respond within 24 hours (as promised to client in confirmation email)</li>
              <li>Review project requirements and technical feasibility thoroughly</li>
              <li>Prepare initial questions, timeline estimate, and pricing structure</li>
              <li>Check portfolio for relevant similar projects and case studies</li>
              <li>Assess project complexity and evaluate current workload capacity</li>
              <li>Research client's business/industry for better understanding</li>
              <li>Prepare project proposal template and next steps outline</li>
            </ul>
          </div>
          
          <!-- Action Buttons -->
          <div class="action-buttons">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Hi ${name},\n\nThank you for your inquiry about "${subject}". I've reviewed your project requirements and I'm excited to discuss this opportunity with you.\n\n[Add your personalized response here]\n\nI'd love to schedule a brief call to discuss your project in more detail. Are you available for a 15-20 minute conversation this week?\n\nBest regards,\nRatan Mia\nFull Stack Developer\n+8801751010966`
  )}" class="action-btn btn-primary">
              <span>📧</span>
              <span>Reply to Client</span>
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(
              `🚨 NEW CLIENT INQUIRY\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nProject Type: ${
                projectType || "Not specified"
              }\nBudget: ${
                budget || "Not specified"
              }\n\nRequires immediate attention! 💼`
            )}" class="action-btn btn-secondary">
              <span>📱</span>
              <span>Share via WhatsApp</span>
            </a>
          </div>
          
          <!-- Quick Stats -->
          <div class="stats-section">
            <div class="stats-title">📊 Submission Details</div>
            <div class="stats-text">
              This email was automatically generated from your portfolio contact form.<br>
              The client has received an automated confirmation email with 24-hour response guarantee.<br>
              <strong>Priority Level:</strong> High - New business opportunity requiring immediate attention.
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="footer-text">Portfolio Contact Management System</div>
          <div class="footer-subtitle">
            shorifullislamratan.com | Full Stack Developer & UI/UX Specialist
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
