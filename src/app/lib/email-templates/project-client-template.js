export const projectClientTemplate = (formData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Lime Background -->
          <tr>
            <td style="background-color: #ccff00; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 800; color: #000000; letter-spacing: -0.02em;">
                Thank You, ${formData.fullName}!
              </h1>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 24px; font-size: 18px; line-height: 1.6; color: #1f2937;">
                We've received your project inquiry and are excited to learn more about your vision!
              </p>
              
              <!-- Project Summary Box -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px; margin: 24px 0;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 700; color: #000000;">
                      Your Project Summary
                    </h2>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-weight: 600; color: #4b5563;">Service:</span>
                          <span style="color: #1f2937; margin-left: 8px;">${formData.serviceRequired}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-weight: 600; color: #4b5563;">Budget Range:</span>
                          <span style="color: #1f2937; margin-left: 8px;">${formData.projectBudget}</span>
                        </td>
                      </tr>
                      ${formData.companyName ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-weight: 600; color: #4b5563;">Company:</span>
                          <span style="color: #1f2937; margin-left: 8px;">${formData.companyName}</span>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- What's Next Section -->
              <div style="margin: 32px 0;">
                <h3 style="margin: 0 0 16px; font-size: 20px; font-weight: 700; color: #000000;">
                  What happens next?
                </h3>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 12px 0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="vertical-align: top; padding-right: 12px;">
                            <div style="width: 32px; height: 32px; background-color: #ccff00; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #000000;">1</div>
                          </td>
                          <td style="vertical-align: top;">
                            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1f2937;">
                              <strong style="color: #000000;">Review (Within 24 hours)</strong><br>
                              I'll carefully review your project requirements and budget.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="vertical-align: top; padding-right: 12px;">
                            <div style="width: 32px; height: 32px; background-color: #ccff00; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #000000;">2</div>
                          </td>
                          <td style="vertical-align: top;">
                            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1f2937;">
                              <strong style="color: #000000;">Discovery Call</strong><br>
                              We'll schedule a call to discuss your vision in detail.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="vertical-align: top; padding-right: 12px;">
                            <div style="width: 32px; height: 32px; background-color: #ccff00; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #000000;">3</div>
                          </td>
                          <td style="vertical-align: top;">
                            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1f2937;">
                              <strong style="color: #000000;">Proposal</strong><br>
                              I'll send you a detailed proposal with timeline and pricing.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6; color: #4b5563;">
                In the meantime, feel free to check out my <a href="https://yourportfolio.com/portfolio" style="color: #000000; font-weight: 600; text-decoration: none; border-bottom: 2px solid #ccff00;">portfolio</a> or <a href="https://yourportfolio.com/case-studies" style="color: #000000; font-weight: 600; text-decoration: none; border-bottom: 2px solid #ccff00;">case studies</a> to see examples of my work.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 16px; font-size: 16px; font-weight: 600; color: #000000;">
                Best regards,<br>
                Ratan Mia
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #6b7280;">
                Full Stack Developer<br>
                📧 ${process.env.GMAIL_USER || 'contact@ratanmia.com'}<br>
                🌐 <a href="https://yourportfolio.com" style="color: #000000; text-decoration: none;">yourportfolio.com</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
