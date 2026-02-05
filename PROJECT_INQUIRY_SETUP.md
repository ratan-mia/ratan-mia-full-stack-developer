# Project Inquiry Section - Setup Guide

## Overview

This component provides a beautiful, professional project inquiry form that sends emails to both the client and admin using Gmail SMTP.

## Features

- ✅ Beautiful, responsive design following design guidelines
- ✅ Form validation with real-time feedback
- ✅ Gmail SMTP integration
- ✅ Two separate email templates (client + admin)
- ✅ Success/error state handling
- ✅ Loading states with animations
- ✅ Framer Motion animations
- ✅ Mobile-first responsive design

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

### 2. Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select **Mail** and your device
5. Copy the 16-character password (remove spaces)
6. Paste it in your `.env.local` file

### 3. Install Dependencies

The required packages are already in `package.json`:

```bash
npm install
# or
yarn install
```

Required packages:
- `nodemailer` - For sending emails
- `framer-motion` - For animations
- `lucide-react` - For icons

### 4. Usage

Import and use the component in any page:

```jsx
import ProjectInquirySection from '@/components/ProjectInquirySection';

export default function YourPage() {
  return (
    <div>
      {/* Your other content */}
      <ProjectInquirySection />
    </div>
  );
}
```

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── project-inquiry/
│   │       └── route.js              # API endpoint
│   ├── components/
│   │   └── ProjectInquirySection.jsx # Main component
│   └── lib/
│       └── email-templates/
│           ├── project-client-template.js  # Client email
│           └── project-admin-template.js   # Admin email
```

## Email Templates

### Client Email
Beautiful, branded email sent to the person who submitted the inquiry:
- Thank you message
- Project summary
- Next steps (3-step process)
- Your contact information

### Admin Email
Comprehensive notification email sent to you:
- Client information
- Project details
- Budget and service required
- Quick action buttons (Reply, Schedule Call)
- Priority assessment

## Form Fields

- **Full Name*** (required)
- **Email*** (required)
- **Company Name** (optional)
- **Service Required*** (dropdown - required)
- **Project Budget*** (dropdown - required)
- **Project Details*** (textarea - required, min 20 chars)

## Service Options

- Web Application Development
- Mobile App Development
- E-commerce Platform
- Custom Software Solution
- API Development & Integration
- UI/UX Design
- MVP Development
- Technical Consultation
- Other

## Budget Ranges

- $5,000 - $10,000
- $10,000 - $25,000
- $25,000 - $50,000
- $50,000+
- To be discussed

## Design Guidelines Compliance

✅ Uses accent-lime (#ccff00) for CTAs and highlights
✅ Bold typography with proper hierarchy
✅ Clean, minimal design with ample white space
✅ Smooth Framer Motion animations
✅ Mobile-first responsive layout
✅ Proper spacing and padding
✅ High contrast for accessibility

## Customization

### Update Your Information

Edit `ProjectInquirySection.jsx`:

```jsx
// Update your name and title
<h3 className="text-xl font-extrabold text-black">Your Name</h3>
<p className="text-sm text-gray-600 font-medium">Your Title</p>
```

### Update Email Templates

Edit the templates in `src/app/lib/email-templates/`:
- `project-client-template.js` - Customize client email
- `project-admin-template.js` - Customize admin email

### Add/Remove Services

Edit the `services` array in `ProjectInquirySection.jsx`:

```jsx
const services = [
  'Your Service 1',
  'Your Service 2',
  // Add more...
];
```

### Add/Remove Budget Ranges

Edit the `budgetRanges` array:

```jsx
const budgetRanges = [
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  // Add more...
];
```

## Testing

1. Start the development server:
```bash
npm run dev
```

2. Navigate to the page with the component

3. Fill out the form and submit

4. Check:
   - Console for any errors
   - Your Gmail inbox for the admin email
   - The test email inbox for the client email

## Troubleshooting

### Emails Not Sending

1. **Check environment variables**
   ```bash
   echo $GMAIL_USER
   echo $GMAIL_APP_PASSWORD
   ```

2. **Verify App Password**
   - Make sure you're using an App Password, not your regular Gmail password
   - Remove any spaces from the password

3. **Check 2-Step Verification**
   - Must be enabled to create App Passwords

4. **Check Gmail "Less secure app access"**
   - Should be disabled (use App Passwords instead)

5. **Review server logs**
   ```bash
   npm run dev
   ```
   Check console for detailed error messages

### Form Validation Errors

- Full name: minimum 2 characters
- Email: must be valid format
- Project details: minimum 20 characters
- All required fields must be filled

## API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Thank you! We'll review your project and get back to you within 24 hours.",
  "details": {
    "clientEmailSent": true,
    "adminEmailSent": true
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message here",
  "errors": ["Validation error 1", "Validation error 2"]
}
```

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords, not regular Gmail passwords
- Validate all input on the server side
- Rate limiting recommended for production
- Consider adding CAPTCHA for public sites

## Support

For issues or questions, check:
1. Server console logs
2. Browser console logs
3. Gmail SMTP settings
4. Environment variables

## License

Part of your portfolio project - customize as needed!
