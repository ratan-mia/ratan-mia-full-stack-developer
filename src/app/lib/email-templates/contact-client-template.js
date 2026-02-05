/**
 * Contact Form - Client Confirmation Email Template
 * Professional HTML email sent to users who submit the contact form
 */

export const contactClientTemplate = (formData) => {
  const { name, email, phone, subject, message, website } = formData;
  const timestamp = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Dhaka'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Me</title>
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
      background-color: #f5f5f5;
      padding: 20px;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(204, 255, 0, 0.1) 0%, transparent 70%);
      animation: pulse 4s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    .logo {
      background: #ccff00;
      color: #000000;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-weight: 900;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
      box-shadow: 0 8px 16px rgba(204, 255, 0, 0.3);
    }
    .header h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
    }
    .header p {
      color: #ccff00;
      font-size: 16px;
      font-weight: 600;
      position: relative;
      z-index: 1;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 20px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 20px;
    }
    .message-box {
      background: #f8f8f8;
      border-left: 4px solid #ccff00;
      padding: 20px;
      border-radius: 8px;
      margin: 30px 0;
    }
    .message-box h3 {
      color: #000000;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }
    .info-grid {
      display: table;
      width: 100%;
      margin: 20px 0;
    }
    .info-row {
      display: table-row;
    }
    .info-label {
      display: table-cell;
      padding: 12px 20px 12px 0;
      font-weight: 600;
      color: #666666;
      width: 120px;
      vertical-align: top;
    }
    .info-value {
      display: table-cell;
      padding: 12px 0;
      color: #000000;
      font-weight: 500;
      vertical-align: top;
    }
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #e0e0e0, transparent);
      margin: 30px 0;
    }
    .next-steps {
      background: #000000;
      color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
    }
    .next-steps h3 {
      color: #ccff00;
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 16px;
    }
    .next-steps ul {
      list-style: none;
      padding: 0;
    }
    .next-steps li {
      padding: 12px 0;
      padding-left: 30px;
      position: relative;
      color: #ffffff;
      font-size: 15px;
    }
    .next-steps li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #ccff00;
      font-weight: 900;
      font-size: 18px;
    }
    .cta-button {
      display: inline-block;
      background: #ccff00;
      color: #000000;
      padding: 16px 32px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 800;
      font-size: 16px;
      margin: 20px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 4px 12px rgba(204, 255, 0, 0.3);
    }
    .footer {
      background: #f8f8f8;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: #000000;
      color: #ccff00;
      border-radius: 50%;
      text-decoration: none;
      margin: 0 8px;
      line-height: 40px;
      font-weight: 700;
    }
    .contact-info {
      margin: 20px 0;
      color: #666666;
      font-size: 14px;
    }
    .contact-info a {
      color: #000000;
      text-decoration: none;
      font-weight: 600;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 30px 20px;
      }
      .header h1 {
        font-size: 24px;
      }
      .info-grid {
        display: block;
      }
      .info-row {
        display: block;
        margin-bottom: 15px;
      }
      .info-label, .info-value {
        display: block;
        padding: 4px 0;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <div class="logo">RM</div>
      <h1>Thank You for Reaching Out!</h1>
      <p>Message Received Successfully</p>
    </div>

    <!-- Main Content -->
    <div class="content">
      <div class="greeting">
        Hi ${name.split(' ')[0]},
      </div>

      <p style="color: #333333; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        Thank you for contacting me! I've received your message and I'm excited to learn more about your project or inquiry.
      </p>

      <p style="color: #333333; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        Your message has been successfully delivered and I'll personally review it. You can expect a response within <strong>24 hours</strong> (typically much sooner during business hours).
      </p>

      <!-- Message Summary -->
      <div class="message-box">
        <h3>📋 Your Message Summary</h3>
        <div class="info-grid">
          <div class="info-row">
            <div class="info-label">Subject:</div>
            <div class="info-value">${subject}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Email:</div>
            <div class="info-value">${email}</div>
          </div>
          ${phone ? `
          <div class="info-row">
            <div class="info-label">Phone:</div>
            <div class="info-value">${phone}</div>
          </div>
          ` : ''}
          ${website ? `
          <div class="info-row">
            <div class="info-label">Website:</div>
            <div class="info-value">${website}</div>
          </div>
          ` : ''}
          <div class="info-row">
            <div class="info-label">Message:</div>
            <div class="info-value">${message}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Received:</div>
            <div class="info-value">${timestamp}</div>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Next Steps -->
      <div class="next-steps">
        <h3>What Happens Next?</h3>
        <ul>
          <li>I'll review your message and project requirements in detail</li>
          <li>If needed, I'll gather additional information before our conversation</li>
          <li>You'll receive a personalized response addressing your specific needs</li>
          <li>We can schedule a call or video meeting to discuss your project further</li>
        </ul>
      </div>

      <p style="color: #333333; font-size: 16px; line-height: 1.8; margin: 30px 0;">
        In the meantime, feel free to explore my portfolio and case studies to see examples of my recent work:
      </p>

      <center>
        <a href="https://ratanmia.com/portfolio" class="cta-button">View My Portfolio</a>
      </center>

      <div class="divider"></div>

      <p style="color: #666666; font-size: 14px; line-height: 1.6; margin-top: 30px;">
        <strong>Need urgent assistance?</strong><br>
        For time-sensitive matters, feel free to reach me directly at 
        <a href="mailto:shorifull@gmail.com" style="color: #000000; font-weight: 600;">shorifull@gmail.com</a> 
        or call <a href="tel:+8801751010966" style="color: #000000; font-weight: 600;">+880 1751 010966</a>
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p style="font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 10px;">
        Ratan Mia
      </p>
      <p style="font-size: 14px; color: #666666; margin-bottom: 20px;">
        Full-Stack Mobile & Web Developer<br>
        React Native • Next.js • Node.js Expert
      </p>

      <div class="social-links">
        <a href="https://linkedin.com/in/ratanmia" title="LinkedIn">in</a>
        <a href="https://github.com/ratanmia" title="GitHub">G</a>
        <a href="https://twitter.com/ratanmia" title="Twitter">X</a>
      </div>

      <div class="contact-info">
        <p>
          📧 <a href="mailto:shorifull@gmail.com">shorifull@gmail.com</a><br>
          📱 <a href="tel:+8801751010966">+880 1751 010966</a><br>
          🌐 <a href="https://ratanmia.com">ratanmia.com</a>
        </p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
        <p style="font-size: 12px; color: #999999; line-height: 1.6;">
          This is an automated confirmation email. Please do not reply to this message.<br>
          For any questions, contact me at <a href="mailto:shorifull@gmail.com" style="color: #666666;">shorifull@gmail.com</a>
        </p>
        <p style="font-size: 12px; color: #cccccc; margin-top: 10px;">
          © ${new Date().getFullYear()} Ratan Mia. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
};
