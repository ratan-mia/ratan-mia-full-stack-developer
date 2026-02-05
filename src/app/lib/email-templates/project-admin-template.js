export const projectAdminTemplate = (formData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1f2937 100%); padding: 32px 30px; text-align: center;">
              <div style="display: inline-block; background-color: #ccff00; padding: 8px 16px; border-radius: 20px; margin-bottom: 16px;">
                <span style="font-size: 14px; font-weight: 700; color: #000000; text-transform: uppercase; letter-spacing: 0.5px;">🚨 New Lead</span>
              </div>
              <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
                New Project Inquiry
              </h1>
            </td>
          </tr>
          
          <!-- Client Information -->
          <tr>
            <td style="padding: 32px 30px; background-color: #f9fafb;">
              <h2 style="margin: 0 0 20px; font-size: 18px; font-weight: 700; color: #000000; text-transform: uppercase; letter-spacing: 0.5px;">
                👤 Client Information
              </h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 12px; padding: 20px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="width: 140px; font-weight: 600; color: #6b7280; font-size: 14px;">Full Name:</td>
                        <td style="font-size: 16px; font-weight: 700; color: #000000;">${formData.fullName}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="width: 140px; font-weight: 600; color: #6b7280; font-size: 14px;">Email:</td>
                        <td style="font-size: 16px; color: #000000;">
                          <a href="mailto:${formData.email}" style="color: #000000; text-decoration: none; border-bottom: 2px solid #ccff00;">${formData.email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${formData.companyName ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="width: 140px; font-weight: 600; color: #6b7280; font-size: 14px;">Company:</td>
                        <td style="font-size: 16px; color: #000000;">${formData.companyName}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="width: 140px; font-weight: 600; color: #6b7280; font-size: 14px;">Submission Time:</td>
                        <td style="font-size: 14px; color: #6b7280;">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Project Details -->
          <tr>
            <td style="padding: 0 30px 32px;">
              <h2 style="margin: 0 0 20px; font-size: 18px; font-weight: 700; color: #000000; text-transform: uppercase; letter-spacing: 0.5px;">
                💼 Project Details
              </h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 20px;">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="display: inline-block; background-color: #ccff00; padding: 12px 20px; border-radius: 8px; margin-bottom: 16px;">
                      <span style="font-size: 14px; font-weight: 700; color: #000000;">Service Required</span>
                      <div style="font-size: 20px; font-weight: 800; color: #000000; margin-top: 4px;">${formData.serviceRequired}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="display: inline-block; background-color: #ffffff; padding: 12px 20px; border-radius: 8px; border: 2px solid #e5e7eb;">
                      <span style="font-size: 14px; font-weight: 700; color: #6b7280;">Budget Range</span>
                      <div style="font-size: 18px; font-weight: 700; color: #000000; margin-top: 4px;">${formData.projectBudget}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 16px; border-top: 2px solid #e5e7eb;">
                    <p style="margin: 0 0 8px; font-size: 14px; font-weight: 700; color: #6b7280; text-transform: uppercase;">Project Description:</p>
                    <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border-left: 4px solid #ccff00;">
                      <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${formData.projectDetails}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 30px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 0 8px 0 0;" width="50%">
                    <a href="mailto:${formData.email}?subject=Re: Your Project Inquiry - ${formData.serviceRequired}" style="display: block; background-color: #ccff00; color: #000000; text-align: center; padding: 16px 24px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 16px;">
                      📧 Reply to Client
                    </a>
                  </td>
                  <td style="padding: 0 0 0 8px;" width="50%">
                    <a href="https://calendar.google.com/calendar/u/0/r/eventedit" style="display: block; background-color: #000000; color: #ffffff; text-align: center; padding: 16px 24px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 16px;">
                      📅 Schedule Call
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Priority Assessment -->
          <tr>
            <td style="padding: 0 30px 32px;">
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0; font-size: 14px; font-weight: 700; color: #92400e; text-transform: uppercase; margin-bottom: 8px;">⚡ Quick Assessment</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 4px 0;">
                      <span style="font-size: 14px; color: #78350f;">
                        ${formData.projectBudget.includes('10k+') || formData.projectBudget.includes('$10,000+') ? '🔥 High-value lead' : '💡 Standard inquiry'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0;">
                      <span style="font-size: 14px; color: #78350f;">
                        ${formData.companyName ? '🏢 Business client' : '👤 Individual client'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0;">
                      <span style="font-size: 14px; color: #78350f;">
                        📊 Service: ${formData.serviceRequired}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; font-size: 13px; color: #6b7280;">
                This email was automatically generated from your portfolio website.<br>
                Reply directly to start the conversation with ${formData.fullName}.
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
