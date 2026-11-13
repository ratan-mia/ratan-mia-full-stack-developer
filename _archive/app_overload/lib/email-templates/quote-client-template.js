export const quoteClientEmailTemplate = (formData) => {
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

  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  // Calculate response time based on priority
  const getResponseTime = () => {
    switch (formData.priority) {
      case 'urgent': return '2 hours';
      case 'high': return '6 hours';
      case 'medium': return '12 hours';
      default: return '24 hours';
    }
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quote Request Confirmation</title>
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
          max-width: 700px;
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
        
        .confirmation-badge {
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
        
        .info-card ul {
          margin: 12px 0;
          padding-left: 20px;
        }
        
        .info-card li {
          font-size: 15px;
          font-weight: 300;
          color: #64748b;
          margin-bottom: 8px;
          line-height: 1.6;
        }
        
        .project-summary {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .project-summary h4 {
          color: #475569;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        
        .summary-item {
          background: rgba(255, 255, 255, 0.8);
          padding: 12px;
          border-radius: 8px;
          border-left: 3px solid #3b82f6;
        }
        
        .summary-label {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        
        .summary-value {
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .next-steps-card {
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .next-steps-card h3 {
          color: #15803d;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .next-steps-card ul {
          margin: 15px 0;
          padding-left: 20px;
        }
        
        .next-steps-card li {
          color: #166534;
          font-size: 15px;
          font-weight: 300;
          margin-bottom: 12px;
          line-height: 1.6;
        }
        
        .next-steps-card li strong {
          font-weight: 600;
        }
        
        .while-you-wait {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .while-you-wait h3 {
          color: #92400e;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .while-you-wait ul {
          margin: 15px 0;
          padding-left: 20px;
        }
        
        .while-you-wait li {
          color: #78350f;
          font-size: 15px;
          font-weight: 300;
          margin-bottom: 8px;
          line-height: 1.6;
        }
        
        .while-you-wait a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
        }
        
        .while-you-wait a:hover {
          text-decoration: underline;
        }
        
        .contact-info {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          margin: 24px 0;
        }
        
        .contact-info h4 {
          color: #1e40af;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        
        .contact-info p {
          color: #1e40af;
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 8px;
        }
        
        .contact-info strong {
          font-weight: 600;
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
          margin-bottom: 4px;
        }
        
        .signature-experience {
          font-size: 13px;
          font-weight: 300;
          color: #64748b;
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
          
          .summary-grid {
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
            <h1>🎉 Thank You for Your Quote Request!</h1>
            <p class="subtitle">Your project inquiry has been received and is being reviewed</p>
            <div class="confirmation-badge">
              <span>✓</span>
              <span>Quote Request Confirmed</span>
            </div>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
          <div class="greeting">Hi ${formData.name},</div>
          
          <p class="main-message">
            Thank you for reaching out! I'm excited about the possibility of working together on your 
            <strong>${projectTypeNames[formData.projectType] || formData.projectType}</strong> project. 
            Your request has been received and I'm already reviewing the details to prepare a comprehensive quote.
          </p>
          
          <!-- What Happens Next -->
          <div class="info-card">
            <h3>🚀 What happens next?</h3>
            <p>I'll carefully review your project requirements and prepare a detailed, customized quote that includes:</p>
            <ul>
              <li>Comprehensive project timeline with clear milestones</li>
              <li>Detailed cost breakdown and payment structure</li>
              <li>Technical approach and recommended solutions</li>
              <li>Project kickoff process and next steps</li>
              <li>Ongoing support and maintenance options</li>
            </ul>
          </div>

          <!-- Project Summary -->
          <div class="project-summary">
            <h4>📄 Your Project Summary</h4>
            <div class="summary-grid">
              <div class="summary-item">
                <div class="summary-label">Project Type</div>
                <div class="summary-value">${projectTypeNames[formData.projectType] || formData.projectType}</div>
              </div>
              ${formData.company ? `
              <div class="summary-item">
                <div class="summary-label">Company</div>
                <div class="summary-value">${formData.company}</div>
              </div>
              ` : ''}
              <div class="summary-item">
                <div class="summary-label">Submitted</div>
                <div class="summary-value">${currentDate}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Reference ID</div>
                <div class="summary-value">#${formData.referenceId || Date.now().toString().slice(-6)}</div>
              </div>
            </div>
          </div>

          <!-- Next Steps -->
          <div class="next-steps-card">
            <h3>📋 Next Steps in Our Process</h3>
            <ul>
              <li><strong>Quote Preparation:</strong> I'll analyze your requirements and create a comprehensive project proposal</li>
              <li><strong>Response Time:</strong> You'll receive my detailed response within ${getResponseTime()}</li>
              <li><strong>Free Consultation:</strong> A complimentary 30-minute strategy call to discuss your vision in detail</li>
              <li><strong>Project Planning:</strong> If you decide to move forward, we'll create a detailed roadmap and timeline</li>
              <li><strong>Development Kickoff:</strong> Begin working on your project with regular updates and milestone reviews</li>
            </ul>
          </div>

          <!-- While You Wait */}
          <div class="while-you-wait">
            <h3>💡 While You Wait</h3>
            <p>Feel free to:</p>
            <ul>
              <li>Check out my <a href="https://shorifullislamratan.com/portfolio">recent projects</a> to see examples of similar work</li>
              <li>Read <a href="https://shorifullislamratan.com/testimonials">client testimonials</a> to learn about their experiences</li>
              <li>Prepare any additional materials, wireframes, or questions you'd like to discuss</li>
              <li>Think about your target audience and key business objectives for the project</li>
            </ul>
          </div>

          <!-- Contact Information */}
          <div class="contact-info">
            <h4>📞 Need to reach me immediately?</h4>
            <p><strong>Email:</strong> shorifull@gmail.com</p>
            <p><strong>Phone:</strong> +8801751010966</p>
            <p><strong>Response Time:</strong> Usually within 2-4 hours during business hours</p>
          </div>

          <!-- Call to Action */}
          <div class="cta-section">
            <a href="https://shorifullislamratan.com/portfolio" class="cta-button">
              <span>🌐</span>
              <span>View My Portfolio</span>
            </a>
          </div>
          
          <p class="main-message">
            I'm looking forward to discussing your project in detail and showing you how we can bring your vision to life 
            with cutting-edge technology and exceptional user experience!
          </p>
          
          <!-- Signature */}
          <div class="signature">
            <div class="signature-name">Ratan Mia</div>
            <div class="signature-title">Full Stack Developer & Solution Architect</div>
            <div class="signature-experience">10+ Years Experience • 100+ Successful Projects</div>
          </div>
        </div>
        
        <!-- Footer */}
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
          
          <p class="footer-text">
            🌟 <strong>Trusted by 100+ clients worldwide</strong> • Expert in React.js, Next.js & Modern Web Technologies
          </p>
          <p class="footer-text">
            📧 shorifull@gmail.com | 🌐 shorifullislamratan.com
          </p>
          
          <p class="footer-disclaimer">
            This is an automated confirmation email. For immediate assistance, contact me directly at shorifull@gmail.com
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};