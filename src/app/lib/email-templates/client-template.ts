interface ClientEmailProps {
  name: string;
  subject: string;
}

export const clientEmailTemplate = ({
  name,
  subject,
}: ClientEmailProps): string => {
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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .header p {
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 18px;
          margin-bottom: 20px;
          color: #4a5568;
        }
        .message-box {
          background: #f7fafc;
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 20px 0;
          border-radius: 5px;
        }
        .response-time {
          background: #e6fffa;
          border: 1px solid #81e6d9;
          padding: 15px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .response-time h3 {
          color: #234e52;
          margin-bottom: 5px;
          font-size: 16px;
        }
        .response-time p {
          color: #2d3748;
          font-size: 14px;
        }
        .contact-info {
          background: #f7fafc;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .contact-info h3 {
          color: #2d3748;
          margin-bottom: 15px;
          font-size: 16px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .contact-item strong {
          width: 80px;
          color: #4a5568;
        }
        .footer {
          background: #2d3748;
          color: white;
          padding: 30px;
          text-align: center;
        }
        .footer p {
          font-size: 14px;
          opacity: 0.8;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #81e6d9;
          text-decoration: none;
          font-size: 14px;
        }
        .btn {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          margin: 20px 0;
          transition: transform 0.2s;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Reaching Out!</h1>
          <p>Your inquiry has been received successfully</p>
        </div>
        
        <div class="content">
          <div class="greeting">
            Hi <strong>${name}</strong>,
          </div>
          
          <p>Thank you for contacting me regarding "<strong>${subject}</strong>". I appreciate you taking the time to reach out, and I'm excited about the possibility of working together.</p>
          
          <div class="message-box">
            <p><strong>What happens next?</strong></p>
            <p>I will carefully review your project requirements and get back to you with a detailed response within 24 hours. For urgent inquiries, feel free to call me directly.</p>
          </div>
          
          <div class="response-time">
            <h3>🚀 Quick Response Guarantee</h3>
            <p>I typically respond within 24 hours. Your project is important to me, and I'll provide you with a thoughtful, detailed response about how we can bring your vision to life.</p>
          </div>
          
          <div class="contact-info">
            <h3>📞 Direct Contact Information</h3>
            <div class="contact-item">
              <strong>Email:</strong> shorifull@gmail.com
            </div>
            <div class="contact-item">
              <strong>Phone:</strong> +8801751010966
            </div>
            <div class="contact-item">
              <strong>WhatsApp:</strong> +8801751010966
            </div>
            <div class="contact-item">
              <strong>Website:</strong> shorifullislamratan.com
            </div>
          </div>
          
          <center>
            <a href="https://shorifullislamratan.com" class="btn">Visit My Portfolio</a>
          </center>
          
          <p style="margin-top: 30px;">Looking forward to discussing your project in detail!</p>
          
          <p style="margin-top: 20px;">
            Best regards,<br>
            <strong>Ratan Mia</strong><br>
            <em>Full Stack Developer</em>
          </p>
        </div>
        
        <div class="footer">
          <div class="social-links">
            <a href="https://linkedin.com/in/shorifull">LinkedIn</a>
            <a href="https://github.com/shorifull">GitHub</a>
            <a href="https://wa.me/8801751010966">WhatsApp</a>
          </div>
          <p>© 2025 Ratan Mia. Full Stack Developer specializing in React.js & Next.js</p>
          <p style="margin-top: 10px; font-size: 12px;">This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
