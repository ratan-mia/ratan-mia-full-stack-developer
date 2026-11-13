export const quoteAdminEmailTemplate = (formData) => {
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

  const priorityLabels = {
    'low': 'Low Priority',
    'medium': 'Medium Priority',
    'high': 'High Priority',
    'urgent': 'Urgent Priority'
  };

  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  // Calculate lead score
  const calculateLeadScore = () => {
    let score = 'Standard 📋';
    if (formData.budget === 'over-50k' || formData.priority === 'urgent') {
      score = 'High 🔥';
    } else if (formData.budget === 'discuss' || formData.priority === 'high') {
      score = 'Medium 💼';
    }
    return score;
  };

  // Calculate response time
  const getResponseTime = () => {
    switch (formData.priority) {
      case 'urgent': return 'Within 2 hours';
      case 'high': return 'Within 6 hours';
      case 'medium': return 'Within 12 hours';
      default: return 'Within 24 hours';
    }
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Quote Request</title>
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
          max-width: 800px;
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
          padding: 40px 32px;
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
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          text-transform: capitalize;
          letter-spacing: -0.025em;
        }
        
        .header .subtitle {
          font-size: 18px;
          font-weight: 300;
          opacity: 0.9;
          margin-bottom: 0;
        }
        
        .reference-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          margin-top: 16px;
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
        
        .description-content {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(229, 231, 235, 0.5);
          border-radius: 8px;
          padding: 20px;
          color: #374151;
          line-height: 1.7;
          white-space: pre-wrap;
          font-size: 15px;
          font-weight: 300;
          max-height: 300px;
          overflow-y: auto;
        }
        
        .features-section {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }
        
        .features-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .features-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 400;
          color: #1e40af;
          line-height: 1.5;
        }
        
        .features-list li::before {
          content: '✓';
          background: #3b82f6;
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
        
        .priority-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .priority-low {
          background: rgba(34, 197, 94, 0.2);
          color: #15803d;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .priority-medium {
          background: rgba(245, 158, 11, 0.2);
          color: #d97706;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        
        .priority-high {
          background: rgba(239, 68, 68, 0.2);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .priority-urgent {
          background: rgba(220, 38, 38, 0.3);
          color: #991b1b;
          border: 1px solid rgba(220, 38, 38, 0.4);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .stats-section {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border: 1px solid rgba(156, 163, 175, 0.3);
          border-radius: 12px;
          padding: 24px;
          margin-top: 32px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        
        .stat-item {
          background: rgba(255, 255, 255, 0.7);
          padding: 16px;
          border-radius: 8px;
          text-align: center;
        }
        
        .stat-label {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }
        
        .stat-value {
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
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
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header Section -->
        <div class="header">
          <div class="header-content">
            <h1>🚀 New Quote Request Received!</h1>
            <p class="subtitle">High-value lead requires immediate attention</p>
            <div class="reference-badge">
              <span>📋</span>
              <span>Reference #${formData.referenceId || 'UNKNOWN'}</span>
            </div>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
          <!-- Urgent Alert -->
          <div class="urgent-alert">
            ⚡ Action Required: New client quote request received - Response time: ${getResponseTime()}
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
                <div class="info-value">${formData.name}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Email Address</div>
                <div class="info-value">${formData.email}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Company</div>
                <div class="info-value">${formData.company || 'Not provided'}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${formData.phone || 'Not provided'}</div>
              </div>
            </div>
          </div>
          
          <!-- Project Details -->
          <div class="info-section">
            <h3>
              <span>📋</span>
              <span>Project Details</span>
            </h3>
            <div class="info-grid">
              <div class="info-card">
                <div class="info-label">Project Type</div>
                <div class="info-value">${projectTypeNames[formData.projectType] || formData.projectType}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Budget Range</div>
                <div class="info-value">${budgetLabels[formData.budget] || formData.budget}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Timeline</div>
                <div class="info-value">${timelineLabels[formData.timeline] || formData.timeline || 'Not specified'}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Priority Level</div>
                <div class="info-value">
                  <span class="priority-badge priority-${formData.priority || 'medium'}">
                    ${priorityLabels[formData.priority] || 'Medium Priority'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project Description -->
          <div class="project-section">
            <h3>
              <span>📝</span>
              <span>Project Description & Requirements</span>
            </h3>
            <div class="description-content">${formData.description}</div>
          </div>
          
          ${formData.features && formData.features.length > 0 ? `
          <!-- Required Features -->
          <div class="features-section">
            <h3>
              <span>✨</span>
              <span>Required Features & Functionality</span>
            </h3>
            <ul class="features-list">
              ${formData.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <!-- Priority & Response Section -->
          <div class="priority-section">
            <h4>
              <span>⏰</span>
              <span>Response Action Plan</span>
            </h4>
            <div class="info-grid">
              <div class="info-card">
                <div class="info-label">Required Response Time</div>
                <div class="info-value">${getResponseTime()}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Lead Score</div>
                <div class="info-value">${calculateLeadScore()}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Submission Time</div>
                <div class="info-value">${currentDate}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Client Location</div>
                <div class="info-value">${formData.location || 'Not specified'}</div>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="action-buttons">
            <a href="mailto:${formData.email}?subject=Re: Quote Request - ${encodeURIComponent(projectTypeNames[formData.projectType] || formData.projectType)} (Ref: ${formData.referenceId})&body=${encodeURIComponent(
              `Hi ${formData.name},\n\nThank you for your quote request for ${projectTypeNames[formData.projectType] || formData.projectType}. I've reviewed your requirements and I'm excited to work on this project.\n\nI'll prepare a detailed quote and project proposal for you. Would you be available for a brief 15-20 minute call to discuss your requirements in more detail?\n\nBest regards,\nRatan Mia\nFull Stack Developer\n+8801751010966`
            )}" class="action-btn btn-primary">
              <span>📧</span>
              <span>Reply to Client</span>
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(
              `🚀 NEW QUOTE REQUEST ALERT\n\nClient: ${formData.name}\nEmail: ${formData.email}\nProject: ${projectTypeNames[formData.projectType] || formData.projectType}\nBudget: ${budgetLabels[formData.budget] || formData.budget}\nPriority: ${priorityLabels[formData.priority] || 'Medium'}\nRef: #${formData.referenceId}\n\nRequires ${getResponseTime().toLowerCase()} response! 💼`
            )}" class="action-btn btn-secondary">
              <span>📱</span>
              <span>Share via WhatsApp</span>
            </a>
          </div>
          
          <!-- Quick Stats -->
          <div class="stats-section">
            <h4 style="text-align: center; margin-bottom: 20px; color: #374151;">📊 Quote Request Summary</h4>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-label">Lead Quality</div>
                <div class="stat-value">${calculateLeadScore()}</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">Response Deadline</div>
                <div class="stat-value">${getResponseTime()}</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">Project Value</div>
                <div class="stat-value">${budgetLabels[formData.budget] || formData.budget}</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">Urgency Level</div>
                <div class="stat-value">${priorityLabels[formData.priority] || 'Medium'}</div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px; padding: 16px; background: rgba(59, 130, 246, 0.1); border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #1e40af; font-weight: 500;">
                🎯 <strong>Next Steps:</strong> Review requirements → Prepare quote → Schedule consultation → Send proposal
              </p>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="footer-text">Quote Request Management System</div>
          <div class="footer-subtitle">
            shorifullislamratan.com | Full Stack Developer & Business Solutions Expert
          </div>
          <div style="margin-top: 16px; font-size: 12px; opacity: 0.6;">
            This is an automated notification. Reply directly to respond to the client.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};