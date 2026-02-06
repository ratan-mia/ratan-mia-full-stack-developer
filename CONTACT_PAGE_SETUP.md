# Contact Page Setup Guide

## Overview

The dedicated Contact page provides a comprehensive form for visitors to get in touch, with automatic email notifications using Gmail SMTP.

## Features

### Contact Page (`/contact`)

- ✅ **Full-screen hero section** with accent-lime background
- ✅ **Contact info cards** with email, phone, and location
- ✅ **Comprehensive form** with multiple fields
- ✅ **Real-time validation** and error handling
- ✅ **Success/error messages** with animations
- ✅ **Responsive design** following design guidelines
- ✅ **Call-to-action sections** linking to portfolio and quote pages

### Form Fields

1. **Required Fields:**

   - Full Name
   - Email Address
   - Subject
   - Message

2. **Optional Fields:**
   - Phone Number
   - Company
   - Website
   - Project Timeline (dropdown)
   - Preferred Contact Method (radio)

### Email System

#### Two Email Templates

1. **Client Confirmation Email** (`contact-client-template.js`)

   - Professional thank you message
   - Summary of submitted information
   - What happens next section
   - Call-to-action to view portfolio
   - Estimated response time

2. **Admin Notification Email** (`contact-admin-template.js`)
   - Complete submission details
   - Engagement score calculation
   - Lead quality indicator (Hot/Warm/Interested/New)
   - All form fields including optional ones
   - Direct reply-to functionality

## Gmail SMTP Configuration

### Step 1: Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification"

### Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and your device
3. Click "Generate"
4. Copy the 16-character password

### Step 3: Configure Environment Variables

Create or update `.env.local` file:

```bash
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
```

**Important Notes:**

- Use Gmail App Password, NOT your regular password
- Never commit `.env.local` to version control
- App password format: 16 characters with hyphens

## API Endpoint

### POST `/api/contact`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+880 1751-010966",
  "company": "Tech Company",
  "website": "https://example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project...",
  "projectTimeline": "soon",
  "preferredContact": "email"
}
```

**Success Response (200):**

```json
{
  "message": "Your message has been sent successfully! Check your email for confirmation.",
  "timestamp": "2026-02-06T10:30:00.000Z",
  "code": "SUCCESS"
}
```

**Error Response (400):**

```json
{
  "error": "Validation failed",
  "details": ["Name is required", "Email is invalid"],
  "code": "VALIDATION_ERROR"
}
```

## Design Guidelines Compliance

### Color Scheme

- **Primary**: `#ccff00` (accent-lime) - Hero background, buttons, highlights
- **Black**: `#000000` - Text, CTA buttons on lime background
- **White**: `#ffffff` - Form background, section backgrounds
- **Gray-50**: `#f9fafb` - Alternating section backgrounds

### Typography

- **Hero Title**: 5xl-7xl (extrabold)
- **Section Titles**: 4xl-5xl (extrabold)
- **Body Text**: lg-xl (medium/semibold)
- **Labels**: sm (bold)

### Components

- **Hero Section**: Full viewport with decorative animations
- **Info Cards**: 3-column grid with hover effects
- **Form**: Rounded-3xl with border-2
- **Buttons**: Accent-lime with black text, hover scale
- **Input Fields**: Border-2 with focus:border-accent-lime

### Animations

- Framer Motion for all transitions
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- Staggered animations with delay

## File Structure

```
src/app/
├── contact/
│   └── page.jsx                    # Main contact page
├── api/
│   └── contact/
│       └── route.js                # API endpoint with Gmail SMTP
└── lib/
    └── email-templates/
        ├── contact-client-template.js    # Client confirmation
        └── contact-admin-template.js     # Admin notification
```

## Testing

### Local Testing

1. Install dependencies: `npm install nodemailer`
2. Configure `.env.local` with Gmail credentials
3. Start dev server: `npm run dev`
4. Visit: `http://localhost:3000/contact`
5. Fill and submit form
6. Check both email inboxes

### Health Check

Visit: `http://localhost:3000/api/contact` (GET request)

Response shows configuration status:

```json
{
  "status": "Contact API is running",
  "timestamp": "2026-02-06T10:30:00.000Z",
  "emailConfigured": true,
  "environment": {
    "GMAIL_USER": true,
    "GMAIL_APP_PASSWORD": true
  },
  "version": "1.1.0"
}
```

## Troubleshooting

### Common Issues

**1. "Email service not configured"**

- Check `.env.local` exists in project root
- Verify `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set
- Restart dev server after adding env variables

**2. "Authentication failed"**

- Verify App Password is correct (16 characters)
- Ensure 2-Step Verification is enabled
- Try generating a new App Password

**3. "Emails not sending"**

- Check Gmail account hasn't hit sending limits
- Verify "Less secure app access" is not required (using App Password)
- Check spam folder for confirmation emails

**4. "Invalid JSON data"**

- Ensure `Content-Type: application/json` header
- Verify request body is valid JSON
- Check network tab for actual request

### Debug Mode

Check server logs for detailed information:

```bash
npm run dev
```

Console will show:

- `📧 Contact form submission started`
- `✅ Form data validated and sanitized`
- `📤 Attempting to send emails...`
- `✅ Both emails sent successfully`

## Security Features

- ✅ Input validation and sanitization
- ✅ Email address format validation
- ✅ Message length limits
- ✅ XSS protection
- ✅ CORS headers
- ✅ Environment variable protection
- ✅ Error message sanitization in production

## Production Deployment

### Vercel/Netlify

1. Add environment variables in dashboard:

   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`

2. Redeploy application

3. Test contact form on production URL

### Gmail Sending Limits

- **Free Gmail**: 500 emails/day
- **Google Workspace**: 2,000 emails/day

For higher volumes, consider:

- SendGrid
- AWS SES
- Mailgun
- Postmark

## Future Enhancements

- [ ] File upload support
- [ ] ReCAPTCHA integration
- [ ] Webhook notifications (Slack/Discord)
- [ ] Database logging
- [ ] Analytics tracking
- [ ] Auto-response templates
- [ ] Multi-language support

## Support

For issues or questions:

- Email: shorifull@gmail.com
- Website: https://ratanmia.com

---

**Last Updated:** February 6, 2026
**Version:** 1.0.0
