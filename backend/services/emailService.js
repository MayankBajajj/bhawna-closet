import nodemailer from 'nodemailer';
import dns from 'dns';

// Force Node to query Google Public DNS over IPv4 instead of broken local IPv6 router DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const sendEmail = async (to, subject, text) => {
  const isSmtpConfigured = 
    process.env.SMTP_HOST && 
    process.env.SMTP_USER && 
    process.env.SMTP_PASS;

  if (isSmtpConfigured) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"Bhawna Closet" <${process.env.SMTP_USER}>`,
        to,
        subject,
        text
      });
      console.log(`Email successfully sent to ${to}`);
    } catch (err) {
      console.error(`Failed to send email via SMTP to ${to}:`, err.message);
      // fallback printing to console if SMTP sending itself fails
      printConsoleFallback(to, subject, text);
    }
  } else {
    printConsoleFallback(to, subject, text);
  }
};

const printConsoleFallback = (to, subject, text) => {
  console.log('\n==========================================');
  console.log(`[DEVELOPMENT EMAIL SENDER FALLBACK]`);
  console.log(`TO: ${to}`);
  console.log(`SUBJECT: ${subject}`);
  console.log(`MESSAGE:\n${text}`);
  console.log('==========================================\n');
};
