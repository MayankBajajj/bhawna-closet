/**
 * Sends an SMS OTP code to a user's phone number using the configured SMS gateway.
 * @param {string} phone - Target phone number (e.g., "+919876543210" or "9876543210")
 * @param {string} otp - 6-digit numeric OTP code
 */
export const sendSmsOtp = async (phone, otp) => {
  const apiKey = process.env.BLACK_SMS_API_KEY || process.env.SMS_API_KEY;
  const senderId = process.env.BLACK_SMS_SENDER_ID || 'BHAWNA';
  const templateId = process.env.BLACK_SMS_TEMPLATE_ID || '';

  // Normalize phone number (extract 10-digit number for Indian gateways)
  let cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length > 10 && cleanPhone.startsWith('91')) {
    cleanPhone = cleanPhone.slice(2);
  }

  const message = `${otp} is your verification code for Bhawna Closet. Valid for 5 minutes.`;

  console.log(`[SMS SERVICE] Triggering OTP ${otp} for phone: ${cleanPhone}`);

  // If no API key is set yet, print OTP in console for testing
  if (!apiKey || apiKey === 'YOUR_BLACK_SMS_API_KEY') {
    console.log(`=======================================================`);
    console.log(`[SMS GATEWAY READY] OTP FOR ${cleanPhone} IS: ${otp}`);
    console.log(`=======================================================`);
    return { success: true, mode: 'console' };
  }

  try {
    const customUrl = process.env.BLACK_SMS_URL;

    if (customUrl) {
      // Replace placeholders in custom API URL if provided
      const finalUrl = customUrl
        .replace('{API_KEY}', encodeURIComponent(apiKey))
        .replace('{PHONE}', encodeURIComponent(cleanPhone))
        .replace('{OTP}', encodeURIComponent(otp))
        .replace('{MESSAGE}', encodeURIComponent(message))
        .replace('{SENDER_ID}', encodeURIComponent(senderId))
        .replace('{TEMPLATE_ID}', encodeURIComponent(templateId));

      const response = await fetch(finalUrl);
      const data = await response.json().catch(() => ({}));
      console.log('[SMS GATEWAY RESPONSE]:', data);
      return { success: true, data };
    } else {
      // Standard HTTP POST payload to SMS Gateway API
      const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
        method: 'POST',
        headers: {
          'authorization': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          route: 'otp',
          variables_values: otp,
          numbers: cleanPhone
        })
      });

      const data = await response.json();
      console.log('[SMS GATEWAY RESPONSE]:', data);
      return { success: true, data };
    }
  } catch (err) {
    console.error('Error sending SMS via gateway:', err.message);
    throw new Error('Failed to send SMS verification code: ' + err.message);
  }
};
