export const adminEmailTemplate = (formData) => {
  const urgencyLevel = formData.budget && formData.budget.includes('$25,000+') ? 'HIGH' : 'NORMAL';
  const priorityColor = urgencyLevel === 'HIGH' ? '#dc2626' : '#ea580c';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🚨 New Contact Form Submission - ${formData.name}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1e293b;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
          margin: 0;
          padding: 20px;
          width: 100%;
        }
        
        .email-container {
          max-width: 700px;
          margin: 0 auto;
          background: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }
        
        .alert-header {
          background: linear-gradient(135deg, ${priorityColor} 0%, #f97316 50%, #ea580c 100%);
          color: white;
          padding: 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .alert-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            );
        }
        
        .alert-content {
          position: relative;
          z-index: 2;
        }
        
        .alert-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 8px 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .alert-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .alert-subtitle {
          font-size: 14px;
          opacity: 0.9;
          font-weight: 400;
        }
        
        .urgency-indicator {
          position: absolute;
          top: 20px;
          right: 20px;
          background: ${urgencyLevel === 'HIGH' ? '#ffffff' : 'rgba(255,255,255,0.2)'};
          color: ${urgencyLevel === 'HIGH' ? '#dc2626' : '#ffffff'};
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 2px solid ${urgencyLevel === 'HIGH' ? '#dc2626' : 'rgba(255,255,255,0.3)'};
        }
        
        .client-info {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-left: 4px solid #2563eb;
          padding: 30px;
          margin: 0;
        }
        
        .section-title {
          color: #1e40af;
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .client-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .client-item {
          background: #ffffff;
          padding: 18px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .client-label {
          color: #374151;
          font-weight: 800;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
          display: block;
        }
        
        .client-value {
          color: #1f2937;
          font-size: 14px;
          font-weight: 600;
          word-break: break-word;
        }
        
        .client-email {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }
        
        .client-email:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }
        
        .message-section {
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
          border-left: 4px solid #10b981;
          padding: 30px;
          margin: 0;
        }
        
        .message-title {
          color: #065f46;
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .message-content {
          background: #ffffff;
          padding: 25px;
          border: 1px solid #d1d5db;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          white-space: pre-wrap;
          word-wrap: break-word;
          color: #374151;
          line-height: 1.7;
          font-size: 14px;
          max-height: 300px;
          overflow-y: auto;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .actions-section {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-left: 4px solid #f59e0b;
          padding: 30px;
          text-align: center;
        }
        
        .actions-title {
          color: #92400e;
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .actions-subtitle {
          color: #a16207;
          font-size: 14px;
          margin-bottom: 25px;
          font-weight: 600;
        }
        
        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        
        .action-button {
          background: #ffffff;
          color: #92400e;
          padding: 15px 20px;
          text-decoration: none;
          font-weight: 700;
          border: 2px solid #f59e0b;
          text-align: center;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .action-button:hover {
          background: #f59e0b;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .stats-section {
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          padding: 25px 30px;
          border-left: 4px solid #10b981;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          text-align: center;
        }
        
        .stat-item {
          background: #ffffff;
          padding: 15px;
          border: 1px solid #d1fae5;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .stat-number {
          font-size: 18px;
          font-weight: 800;
          color: #065f46;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 12px;
          color: #047857;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        .metadata-section {
          background: #f8fafc;
          padding: 20px 30px;
          border-top: 2px solid #e2e8f0;
        }
        
        .metadata-title {
          color: #475569;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .metadata-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          font-size: 12px;
        }
        
        .metadata-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .metadata-label {
          color: #64748b;
          font-weight: 600;
        }
        
        .metadata-value {
          color: #374151;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 11px;
        }
        
        .footer {
          background: #374151;
          color: #9ca3af;
          padding: 20px 30px;
          text-align: center;
          font-size: 12px;
        }
        
        .footer-timestamp {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 10px;
            width: calc(100% - 20px);
          }
          
          .alert-header,
          .client-info,
          .message-section,
          .actions-section,
          .stats-section,
          .metadata-section,
          .footer {
            padding: 20px 15px;
          }
          
          .alert-title {
            font-size: 20px;
          }
          
          .client-grid,
          .actions-grid,
          .stats-grid,
          .metadata-grid {
            grid-template-columns: 1fr;
          }
          
          .urgency-indicator {
            position: static;
            margin-top: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Alert Header -->
        <div class="alert-header">
          <div class="urgency-indicator">${urgencyLevel} PRIORITY</div>
          <div class="alert-content">
            <div class="alert-badge">🚨 NEW INQUIRY</div>
            <h1 class="alert-title">Contact Form Submission</h1>
            <p class="alert-subtitle">A potential client has reached out through your portfolio</p>
          </div>
        </div>
        
        <!-- Client Information -->
        <div class="client-info">
          <h2 class="section-title">👤 Client Information</h2>
          <div class="client-grid">
            <div class="client-item">
              <span class="client-label">Full Name</span>
              <span class="client-value">${formData.name}</span>
            </div>
            <div class="client-item">
              <span class="client-label">Email Address</span>
              <a href="mailto:${formData.email}" class="client-value client-email">${formData.email}</a>
            </div>
            <div class="client-item">
              <span class="client-label">Subject</span>
              <span class="client-value">${formData.subject}</span>
            </div>
            <div class="client-item">
              <span class="client-label">Submission Time</span>
              <span class="client-value">${new Date().toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</span>
            </div>
            ${formData.projectType ? `
            <div class="client-item">
              <span class="client-label">Project Type</span>
              <span class="client-value">${formData.projectType}</span>
            </div>
            ` : ''}
            ${formData.budget ? `
            <div class="client-item">
              <span class="client-label">Budget Range</span>
              <span class="client-value" style="color: ${formData.budget.includes('$25,000+') ? '#dc2626' : '#059669'}; font-weight: 800;">${formData.budget}</span>
            </div>
            ` : ''}
          </div>
        </div>
        
        <!-- Message Content -->
        <div class="message-section">
          <h3 class="message-title">💬 Client Message</h3>
          <div class="message-content">${formData.message}</div>
        </div>
        
        <!-- Quick Actions -->
        <div class="actions-section">
          <h3 class="actions-title">⚡ Quick Actions</h3>
          <p class="actions-subtitle">
            Respond within 24 hours to maintain your professional response commitment
          </p>
          <div class="actions-grid">
            <a href="mailto:${formData.email}?subject=Re: ${encodeURIComponent(formData.subject)}&body=Dear ${encodeURIComponent(formData.name)},%0D%0A%0D%0AThank you for reaching out about your ${formData.projectType || 'project'}. I've reviewed your message and would love to discuss this further.%0D%0A%0D%0ABest regards,%0D%0ARatan Mia" class="action-button">
              <span>📧</span> Reply via Email
            </a>
            <a href="tel:+8801751010966" class="action-button">
              <span>📱</span> Call Client
            </a>
            <a href="https://wa.me/8801751010966?text=Hi! I received your message about ${encodeURIComponent(formData.subject)}. I'd love to discuss your project further." class="action-button">
              <span>💬</span> WhatsApp
            </a>
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Client Meeting: ${encodeURIComponent(formData.name)}&details=Discuss ${encodeURIComponent(formData.subject)} project" class="action-button">
              <span>📅</span> Schedule Meeting
            </a>
          </div>
        </div>
        
        <!-- Quick Stats -->
        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">${new Date().getHours() < 18 && new Date().getHours() > 8 ? '⚡' : '🌙'}</div>
              <div class="stat-label">${new Date().getHours() < 18 && new Date().getHours() > 8 ? 'Business Hours' : 'After Hours'}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">${urgencyLevel}</div>
              <div class="stat-label">Priority Level</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">${formData.message.length}</div>
              <div class="stat-label">Message Length</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">${formData.budget ? '💰' : '❓'}</div>
              <div class="stat-label">${formData.budget ? 'Budget Provided' : 'Budget TBD'}</div>
            </div>
          </div>
        </div>
        
        <!-- Technical Metadata -->
        <div class="metadata-section">
          <h4 class="metadata-title">🔍 Technical Details</h4>
          <div class="metadata-grid">
            <div class="metadata-item">
              <span class="metadata-label">Timestamp:</span>
              <span class="metadata-value">${new Date().toISOString()}</span>
            </div>
            <div class="metadata-item">
              <span class="metadata-label">Message ID:</span>
              <span class="metadata-value">${Date.now()}-${Math.random().toString(36).substr(2, 9)}</span>
            </div>
            <div class="metadata-item">
              <span class="metadata-label">Form Source:</span>
              <span class="metadata-value">Portfolio Contact Form</span>
            </div>
            <div class="metadata-item">
              <span class="metadata-label">Response Due:</span>
              <span class="metadata-value">${new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="footer-timestamp">
            📅 Received: ${new Date().toLocaleString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit',
              timeZoneName: 'short'
            })}
          </div>
          <p>This is an automated notification from your portfolio contact form system.</p>
          <p>© 2025 Ratan Mia Portfolio - Contact Management System</p>
        </div>
      </div>
    </body>
    </html>
  `;
};