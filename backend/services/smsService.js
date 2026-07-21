/**
 * Sends an SMS OTP code to a user's phone number using the BlackSMS API.
 * @param {string} phone - Target phone number (e.g., "+919560083880" or "9560083880")
 * @param {string} otp - 6-digit numeric OTP code
 */
export const sendSmsOtp = async (phone, otp) => {
  const apiKey = process.env.BLACK_SMS_API_KEY || process.env.SMS_API_KEY;
  const senderId = process.env.BLACK_SMS_SENDER_ID || '357';

  // Normalize phone number (extract 10-digit number for Indian gateways)
  let cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length > 10 && cleanPhone.startsWith('91')) {
    cleanPhone = cleanPhone.slice(2);
  }

  const message = `${otp} is your verification code for Bhawna Closet. Valid for 5 minutes.`;

  console.log(`[BLACKSMS SERVICE] Triggering OTP ${otp} for phone: ${cleanPhone}`);

  // If no API key is set yet, print OTP in console for testing
  if (!apiKey || apiKey === 'YOUR_BLACK_SMS_API_KEY') {
    console.log(`=======================================================`);
    console.log(`[SMS GATEWAY READY] OTP FOR ${cleanPhone} IS: ${otp}`);
    console.log(`=======================================================`);
    return { success: true, mode: 'console' };
  }

  try {
    const response = await fetch('https://www.blacksms.in/sms', {
      method: 'POST',
      headers: {
        'authorization': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        route: '1',
        sender_id: senderId,
        variables_values: otp,
        numbers: cleanPhone,
        message: message
      })
    });

    const data = await response.json().catch(() => ({}));
    console.log('[BLACKSMS GATEWAY RESPONSE]:', data);

    if (data.status === 0) {
      throw new Error(data.message || 'SMS delivery failed');
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error sending SMS via BlackSMS:', err.message);
    throw new Error('Failed to send SMS verification code: ' + err.message);
  }
};
