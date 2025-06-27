export const clientEmailTemplate = ({ name, subject }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Ratan Mia</title>
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
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #1e40af 100%);
          color: #ffffff;
          padding: 48px 32px;
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
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 500;
          margin-top: 16px;
          backdrop-filter: blur(8px);
        }
        
        .content {
          padding: 48px 32px;
        }
        
        .greeting {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 24px;
          color: #1e293b;
        }
        
        .main-message {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 32px;
        }
        
        .info-card {
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
          position: relative;
          overflow: hidden;
        }
        
        .info-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        }
        
        .info-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .info-card p {
          font-size: 15px;
          font-weight: 300;
          color: #64748b;
          margin-bottom: 0;
          line-height: 1.6;
        }
        
        .guarantee-card {
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .guarantee-card h3 {
          color: #15803d;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .guarantee-card p {
          color: #166534;
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 0;
          line-height: 1.6;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin: 32px 0;
        }
        
        .contact-item {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 8px;
          padding: 16px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .contact-label {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        
        .contact-value {
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .cta-section {
          text-align: center;
          margin: 40px 0;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: #ffffff;
          padding: 16px 32px;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          color: #ffffff;
          text-decoration: none;
        }
        
        .signature {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
        }
        
        .signature-name {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }
        
        .signature-title {
          font-size: 14px;
          font-weight: 500;
          color: #8b5cf6;
          font-style: italic;
        }
        
        .footer {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: #e2e8f0;
          padding: 40px 32px;
          text-align: center;
          position: relative;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #60a5fa;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: #93c5fd;
          text-decoration: none;
          transform: translateY(-1px);
        }
        
        .footer-text {
          font-size: 14px;
          font-weight: 300;
          opacity: 0.8;
          margin-bottom: 8px;
        }
        
        .footer-disclaimer {
          font-size: 12px;
          font-weight: 300;
          opacity: 0.6;
          margin-top: 16px;
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
            padding: 32px 24px;
          }
          
          .header h1 {
            font-size: 24px;
          }
          
          .header .subtitle {
            font-size: 16px;
          }
          
          .content {
            padding: 32px 24px;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .footer {
            padding: 32px 24px;
          }
          
          .social-links {
            flex-direction: column;
            gap: 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header Section -->
        <div class="header">
          <div class="header-content">
            <h1>Thank You for Reaching Out!</h1>
            <p class="subtitle">Your inquiry has been received successfully</p>
            <div class="status-badge">
              <span>✓</span>
              <span>Message Delivered</span>
            </div>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
          <div class="greeting">Hi ${name},</div>
          
          <p class="main-message">
            Thank you for contacting me regarding "<strong>${subject}</strong>". I appreciate you taking the time to reach out, and I'm excited about the possibility of working together on your project.
          </p>
          
          <!-- What Happens Next -->
          <div class="info-card">
            <h3>🚀 What happens next?</h3>
            <p>I will carefully review your project requirements and get back to you with a detailed response within 24 hours. For urgent inquiries, feel free to call me directly using the contact information below.</p>
          </div>
          
          <!-- Response Guarantee -->
          <div class="guarantee-card">
            <h3>⚡ Quick Response Guarantee</h3>
            <p>I typically respond within 24 hours. Your project is important to me, and I'll provide you with a thoughtful, detailed response about how we can bring your vision to life together.</p>
          </div>
          
          <!-- Contact Information -->
          <div class="info-card">
            <h3>📞 Direct Contact Information</h3>
            <div class="contact-grid">
              <div class="contact-item">
                <div class="contact-label">Email</div>
                <div class="contact-value">shorifull@gmail.com</div>
              </div>
              <div class="contact-item">
                <div class="contact-label">Phone</div>
                <div class="contact-value">+8801751010966</div>
              </div>
              <div class="contact-item">
                <div class="contact-label">WhatsApp</div>
                <div class="contact-value">+8801751010966</div>
              </div>
              <div class="contact-item">
                <div class="contact-label">Website</div>
                <div class="contact-value">shorifullislamratan.com</div>
              </div>
            </div>
          </div>
          
          <!-- Call to Action -->
          <div class="cta-section">
            <a href="https://shorifullislamratan.com" class="cta-button">
              <span>🌐</span>
              <span>Visit My Portfolio</span>
            </a>
          </div>
          
          <p class="main-message">Looking forward to discussing your project in detail and exploring how we can create something amazing together!</p>
          
          <!-- Signature -->
          <div class="signature">
            <div class="signature-name">Ratan Mia</div>
            <div class="signature-title">Full Stack Developer & UI/UX Specialist</div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="social-links">
            <a href="https://linkedin.com/in/shorifull" class="social-link">
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/shorifull" class="social-link">
              <span>⚡</span>
              <span>GitHub</span>
            </a>
            <a href="https://wa.me/8801751010966" class="social-link">
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
          
          <p class="footer-text">© 2025 Ratan Mia. Full Stack Developer specializing in React.js, Next.js & Modern Web Technologies</p>
          
          <p class="footer-disclaimer">
            This is an automated confirmation email. Please do not reply directly to this message.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};