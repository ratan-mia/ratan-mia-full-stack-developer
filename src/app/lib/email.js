import nodemailer from 'nodemailer';

/**
 * Titan Email SMTP (smtp.titan.email).
 * Prefers SMTP_* env; falls back to legacy GMAIL_* if still present.
 */
export function getEmailConfig() {
  const user =
    process.env.SMTP_USER ||
    process.env.EMAIL_FROM ||
    process.env.GMAIL_USER ||
    '';
  const pass =
    process.env.SMTP_PASS ||
    process.env.GMAIL_APP_PASSWORD ||
    process.env.GMAIL_PASS ||
    '';
  const fromName =
    process.env.EMAIL_FROM_NAME || 'Ratan Mia';
  const fromAddress =
    process.env.EMAIL_FROM || user;
  const adminEmail =
    process.env.ADMIN_EMAIL ||
    process.env.CONTACT_ADMIN_EMAIL ||
    fromAddress ||
    user;

  return {
    host: process.env.SMTP_HOST || 'smtp.titan.email',
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE ?? 'true') !== 'false',
    user,
    pass,
    fromName,
    fromAddress,
    adminEmail,
  };
}

export function isEmailConfigured() {
  const { user, pass } = getEmailConfig();
  return Boolean(user && pass);
}

export function createTransporter() {
  const { host, port, secure, user, pass } = getEmailConfig();
  if (!user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export function fromHeader(name) {
  const { fromName, fromAddress } = getEmailConfig();
  return {
    name: name || fromName,
    address: fromAddress,
  };
}
