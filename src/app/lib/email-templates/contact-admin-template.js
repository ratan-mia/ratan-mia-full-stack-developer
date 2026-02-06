/**
 * Contact Form - Admin Notification Email Template
 * Internal notification email with complete submission details
 */

export const contactAdminTemplate = (formData) => {
  const { name, email, phone, subject, message, website, company, projectTimeline, preferredContact } = formData;
  const timestamp = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Dhaka'
  });

  // Calculate engagement score
  const messageLength = message?.length || 0;
  const hasPhone = !!phone;
  const hasWebsite = !!website;
  const engagementScore = Math.min(100, 
    (messageLength > 100 ? 40 : messageLength * 0.4) + 
    (hasPhone ? 30 : 0) + 
    (hasWebsite ? 30 : 0)
  );

  const getEngagementLevel = (score) => {
    if (score >= 80) return { level: '🔥 HOT LEAD', color: '#ff4444', bg: '#ffebee' };
    if (score >= 60) return { level: '⭐ WARM LEAD', color: '#ff9800', bg: '#fff3e0' };
    if (score >= 40) return { level: '💡 INTERESTED', color: '#2196f3', bg: '#e3f2fd' };
    return { level: '📝 NEW INQUIRY', color: '#9e9e9e', bg: '#f5f5f5' };
  };

  const engagement = getEngagementLevel(engagementScore);

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
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      background-color: #f0f2f5;
      padding: 20px;
    }
    .email-container {
      max-width: 700px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    .header {
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      padding: 30px;
      border-bottom: 4px solid #ccff00;
    }
    .header-title {
      color: #ffffff;
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
    }
    .header-subtitle {
      color: #ccff00;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .alert-banner {
      background: ${engagement.bg};
      border-left: 6px solid ${engagement.color};
      padding: 20px 30px;
      margin: 0;
    }
    .alert-banner-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
    }
    .alert-label {
      font-size: 18px;
      font-weight: 800;
      color: ${engagement.color};
    }
    .engagement-score {
      background: ${engagement.color};
      color: #ffffff;
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: 800;
      font-size: 14px;
    }
    .content {
      padding: 40px 30px;
    }
    .section {
      margin-bottom: 35px;
    }
    .section-title {
      color: #000000;
      font-size: 16px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #ccff00;
    }
    .info-card {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 20px;
      border: 1px solid #e9ecef;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 20px;
    }
    .info-label {
      font-weight: 700;
      color: #495057;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .info-value {
      color: #000000;
      font-weight: 500;
      font-size: 15px;
      word-break: break-word;
    }
    .message-card {
      background: #ffffff;
      border: 2px solid #e9ecef;
      border-radius: 12px;
      padding: 25px;
      margin-top: 15px;
    }
    .message-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e9ecef;
    }
    .message-icon {
      width: 40px;
      height: 40px;
      background: #ccff00;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .message-title {
      font-size: 14px;
      font-weight: 700;
      color: #495057;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .message-content {
      color: #212529;
      font-size: 15px;
      line-height: 1.8;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 25px;
    }
    .stat-box {
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      border: 1px solid #333333;
    }
    .stat-value {
      font-size: 24px;
      font-weight: 800;
      color: #ccff00;
      margin-bottom: 5px;
    }
    .stat-label {
      font-size: 12px;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .action-buttons {
      display: flex;
      gap: 15px;
      margin-top: 30px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-block;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
    }
    .btn-primary {
      background: #ccff00;
      color: #000000;
    }
    .btn-secondary {
      background: #000000;
      color: #ffffff;
      border: 2px solid #ccff00;
    }
    .metadata {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      margin-top: 30px;
      border-left: 4px solid #6c757d;
    }
    .metadata-title {
      font-size: 12px;
      font-weight: 700;
      color: #6c757d;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }
    .metadata-info {
      font-size: 13px;
      color: #495057;
      line-height: 1.8;
    }
    .footer {
      background: #f8f9fa;
      padding: 25px 30px;
      text-align: center;
      border-top: 1px solid #e9ecef;
    }
    .footer-text {
      font-size: 13px;
      color: #6c757d;
      line-height: 1.6;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 25px 20px;
      }
      .info-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .info-label {
        margin-bottom: 5px;
      }
      .stats-grid {
        grid-template-columns: 1fr;
      }
      .action-buttons {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <div class="header-title">🔔 New Contact Form Submission</div>
      <div class="header-subtitle">Website Contact Form</div>
    </div>

    <!-- Alert Banner -->
    <div class="alert-banner">
      <div class="alert-banner-content">
        <div class="alert-label">${engagement.level}</div>
        <div class="engagement-score">Score: ${engagementScore}/100</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="content">
      <!-- Contact Information -->
      <div class="section">
        <h2 class="section-title">👤 Contact Information</h2>
        <div class="info-card">
          <div class="info-grid">
            <div class="info-label">Full Name:</div>
            <div class="info-value">${name}</div>
            
            <div class="info-label">Email Address:</div>
            <div class="info-value"><a href="mailto:${email}" style="color: #000000; text-decoration: none; font-weight: 600;">${email}</a></div>
            
            <div class="info-label">Subject:</div>
            <div class="info-value" style="font-weight: 600; color: #000000;">${subject}</div>
            
            ${phone ? `
            <div class="info-label">Phone Number:</div>
            <div class="info-value"><a href="tel:${phone}" style="color: #000000; text-decoration: none; font-weight: 600;">${phone}</a></div>
            ` : ''}
            
            ${company ? `
            <div class="info-label">Company:</div>
            <div class="info-value" style="font-weight: 600;">${company}</div>
            ` : ''}
            
            ${website ? `
            <div class="info-label">Website:</div>
            <div class="info-value"><a href="${website}" target="_blank" style="color: #0066cc; text-decoration: none;">${website}</a></div>
            ` : ''}
            
            ${projectTimeline ? `
            <div class="info-label">Project Timeline:</div>
            <div class="info-value" style="font-weight: 600; color: #ff8c42;">${projectTimeline}</div>
            ` : ''}
            
            ${preferredContact ? `
            <div class="info-label">Preferred Contact:</div>
            <div class="info-value" style="font-weight: 600;">${preferredContact === 'phone' ? '📱 Phone' : '📧 Email'}</div>
            ` : ''}
            
            <div class="info-label">Received:</div>
            <div class="info-value">${timestamp}</div>
          </div>
        </div>
      </div>

      <!-- Message Content -->
      <div class="section">
        <h2 class="section-title">💬 Message</h2>
        <div class="message-card">
          <div class="message-header">
            <div class="message-icon">📝</div>
            <div class="message-title">Full Message Content</div>
          </div>
          <div class="message-content">${message}</div>
        </div>
      </div>

      <!-- Engagement Stats -->
      <div class="section">
        <h2 class="section-title">📊 Engagement Metrics</h2>
        <div class="stats-grid">
          <div class="stat-box">
            <div class="stat-value">${messageLength}</div>
            <div class="stat-label">Characters</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${hasPhone ? 'Yes' : 'No'}</div>
            <div class="stat-label">Phone Provided</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${hasWebsite ? 'Yes' : 'No'}</div>
            <div class="stat-label">Website Provided</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${engagementScore}</div>
            <div class="stat-label">Lead Score</div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="section">
        <h2 class="section-title">⚡ Quick Actions</h2>
        <div class="action-buttons">
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" class="btn btn-primary">
            📧 Reply to ${name.split(' ')[0]}
          </a>
          ${phone ? `
          <a href="tel:${phone}" class="btn btn-secondary">
            📞 Call ${name.split(' ')[0]}
          </a>
          ` : ''}
        </div>
      </div>

      <!-- Metadata -->
      <div class="metadata">
        <div class="metadata-title">📌 Submission Details</div>
        <div class="metadata-info">
          <strong>Form Type:</strong> Website Contact Form<br>
          <strong>Source:</strong> ratanmia.com/contact<br>
          <strong>IP Address:</strong> [Not tracked for privacy]<br>
          <strong>User Agent:</strong> [Web Browser]<br>
          <strong>Submission ID:</strong> #CONTACT-${Date.now()}<br>
          <strong>Auto-Response:</strong> ✅ Sent to ${email}
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-text">
        <strong>📬 Email Notification System</strong><br>
        This is an automated notification from your website contact form.<br>
        Respond promptly to maintain high client satisfaction!<br><br>
        <span style="color: #999999; font-size: 12px;">
          © ${new Date().getFullYear()} Ratan Mia Portfolio • ratanmia.com
        </span>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
};
