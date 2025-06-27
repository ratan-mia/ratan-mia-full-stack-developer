export const customerEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Your Message - Ratan Mia</title>
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
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          margin: 0;
          padding: 20px;
          width: 100%;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }
        
        .header {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #1d4ed8 100%);
          color: white;
          padding: 40px 30px;
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
          background: 
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%);
          background-size: 100px 100px, 150px 150px;
        }
        
        .header-content {
          position: relative;
          z-index: 2;
        }
        
        .header-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.95);
          padding: 8px 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .header-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 12px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header-subtitle {
          font-size: 16px;
          opacity: 0.9;
          font-weight: 400;
        }
        
        .content {
          padding: 40px 30px;
          background: #ffffff;
        }
        
        .greeting {
          font-size: 18px;
          color: #1e293b;
          margin-bottom: 25px;
          font-weight: 500;
        }
        
        .main-text {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        
        .summary-card {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-left: 4px solid;
          border-image: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%) 1;
          padding: 25px;
          margin: 30px 0;
        }
        
        .summary-title {
          color: #1e40af;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }
        
        .info-item {
          background: #ffffff;
          padding: 18px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        .info-label {
          color: #2563eb;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
          display: block;
        }
        
        .info-value {
          color: #1f2937;
          font-size: 15px;
          font-weight: 500;
          word-break: break-word;
        }
        
        .next-steps {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          color: white;
          padding: 35px 30px;
          margin: 30px 0;
          text-align: center;
        }
        
        .next-steps-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .next-steps-text {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 25px;
          font-weight: 400;
        }
        
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }
        
        .step-item {
          background: rgba(255, 255, 255, 0.15);
          padding: 20px;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .step-icon {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
        }
        
        .step-title {
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 8px;
          color: #ffffff;
        }
        
        .step-description {
          font-size: 13px;
          opacity: 0.9;
          line-height: 1.5;
        }
        
        .contact-info {
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          padding: 30px;
          margin: 30px 0;
          text-align: center;
        }
        
        .contact-title {
          color: #1e293b;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        
        .contact-item {
          background: #ffffff;
          padding: 20px;
          border: 1px solid #e2e8f0;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .contact-icon {
          font-size: 20px;
          margin-bottom: 10px;
          display: block;
        }
        
        .contact-label {
          font-weight: 700;
          color: #1e293b;
          font-size: 14px;
          margin-bottom: 5px;
        }
        
        .contact-value {
          color: #2563eb;
          font-size: 14px;
          text-decoration: none;
          font-weight: 500;
        }
        
        .contact-value:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }
        
        .footer {
          background: #1e293b;
          color: #94a3b8;
          padding: 30px;
          text-align: center;
          border-top: 3px solid;
          border-image: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%) 1;
        }
        
        .footer-brand {
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .footer-text {
          margin-bottom: 20px;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .social-links {
          margin: 25px 0;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .social-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          padding: 8px 16px;
          border: 1px solid #475569;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: #2563eb;
          border-color: #2563eb;
          background: rgba(37, 99, 235, 0.1);
        }
        
        .disclaimer {
          font-size: 12px;
          opacity: 0.7;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #334155;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 10px;
            width: calc(100% - 20px);
          }
          
          .header, .content, .next-steps, .contact-info, .footer {
            padding: 25px 20px;
          }
          
          .header-title {
            font-size: 24px;
          }
          
          .info-grid, .steps-grid, .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .social-links {
            flex-direction: column;
            align-items: center;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="header-content">
            <div class="header-badge">✉️ Message Received</div>
            <h1 class="header-title">Thank You!</h1>
            <p class="header-subtitle">Your message has been received successfully</p>
          </div>
        </div>
        
        <!-- Content -->
        <div class="content">
          <p class="greeting">Dear <strong>${formData.name}</strong>,</p>
          
          <p class="main-text">
            Thank you for reaching out to me through my portfolio website! I'm genuinely excited to learn more about your project and explore how we can work together to bring your vision to life.
          </p>
          
          <p class="main-text">
            Your message has been received and I appreciate the time you've taken to provide details about your requirements. This helps me understand your needs better and prepare a more tailored response.
          </p>
          
          <!-- Message Summary -->
          <div class="summary-card">
            <h3 class="summary-title">💼 Your Message Summary</h3>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Subject</span>
                <span class="info-value">${formData.subject}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email Address</span>
                <span class="info-value">${formData.email}</span>
              </div>
              ${formData.projectType ? `
              <div class="info-item">
                <span class="info-label">Project Type</span>
                <span class="info-value">${formData.projectType}</span>
              </div>
              ` : ''}
              ${formData.budget ? `
              <div class="info-item">
                <span class="info-label">Budget Range</span>
                <span class="info-value">${formData.budget}</span>
              </div>
              ` : ''}
              <div class="info-item">
                <span class="info-label">Submitted</span>
                <span class="info-value">${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
              </div>
            </div>
          </div>
          
          <!-- What Happens Next -->
          <div class="next-steps">
            <h3 class="next-steps-title">⚡ What Happens Next?</h3>
            <p class="next-steps-text">
              I'll review your message carefully and respond within 24 hours with detailed information about how we can move forward.
            </p>
            
            <div class="steps-grid">
              <div class="step-item">
                <span class="step-icon">🔍</span>
                <div class="step-title">Project Analysis</div>
                <div class="step-description">
                  I'll carefully review your requirements and assess the technical scope of your project.
                </div>
              </div>
              
              <div class="step-item">
                <span class="step-icon">💡</span>
                <div class="step-title">Solution Design</div>
                <div class="step-description">
                  I'll design a tailored approach and technology stack that best fits your needs and goals.
                </div>
              </div>
              
              <div class="step-item">
                <span class="step-icon">📋</span>
                <div class="step-title">Detailed Proposal</div>
                <div class="step-description">
                  You'll receive a comprehensive proposal with timeline, milestones, and project structure.
                </div>
              </div>
              
              <div class="step-item">
                <span class="step-icon">🚀</span>
                <div class="step-title">Project Kickoff</div>
                <div class="step-description">
                  Once approved, we'll schedule a detailed discussion to finalize requirements and begin development.
                </div>
              </div>
            </div>
          </div>
          
          <p class="main-text">
            In the meantime, feel free to explore my portfolio to see examples of my recent work and the technologies I specialize in. If you have any urgent questions, don't hesitate to call me directly.
          </p>
          
          <p class="main-text">
            Looking forward to working with you!
          </p>
          
          <p class="main-text">
            Best regards,<br>
            <strong>Ratan Mia</strong><br>
            <em>Full Stack Developer</em>
          </p>
        </div>
        
        <!-- Contact Information -->
        <div class="contact-info">
          <h3 class="contact-title">📞 How to Reach Me</h3>
          <div class="contact-grid">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <div class="contact-label">Email</div>
              <a href="mailto:shorifull@gmail.com" class="contact-value">shorifull@gmail.com</a>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <div class="contact-label">Phone</div>
              <a href="tel:+8801751010966" class="contact-value">+880 175 101 0966</a>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon">🌐</span>
              <div class="contact-label">Website</div>
              <a href="https://shorifullislamratan.com" class="contact-value">shorifullislamratan.com</a>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <div class="contact-label">Location</div>
              <span class="contact-value">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="footer-brand">Ratan Mia - Full Stack Developer</div>
          
          <div class="footer-text">
            Specializing in React, Next.js, Node.js, and Modern Web Technologies<br>
            Available for remote collaboration worldwide
          </div>
          
          <div class="social-links">
            <a href="https://linkedin.com/in/shorifull" class="social-link">LinkedIn</a>
            <a href="https://github.com/shorifull" class="social-link">GitHub</a>
            <a href="https://wa.me/8801751010966" class="social-link">WhatsApp</a>
          </div>
          
          <div class="disclaimer">
            This is an automated confirmation email. Please do not reply directly to this message.<br>
            For any questions, please use the contact information provided above.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};