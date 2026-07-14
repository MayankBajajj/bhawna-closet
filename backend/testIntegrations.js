import dotenv from 'dotenv';
import path from 'path';
import Razorpay from 'razorpay';

// Load env variables
dotenv.config();

console.log('--- Diagnostic Test Script ---');

const testRazorpay = async () => {
  console.log('\n[1/2] Testing Razorpay Connection...');
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    console.error('❌ Razorpay credentials missing in .env');
    return;
  }

  try {
    const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });
    const orders = await rzp.orders.all({ count: 1 });
    console.log('✅ Razorpay Connected Successfully! Retained orders list.');
  } catch (error) {
    console.error('❌ Razorpay Connection Failed:', error.message);
  }
};

const testShiprocket = async () => {
  console.log('\n[2/2] Testing Shiprocket Connection...');
  const email = process.env.SHIPROCKET_EMAIL;
  const password = process.env.SHIPROCKET_PASSWORD;

  if (!email || !password) {
    console.error('❌ Shiprocket credentials missing in .env');
    return;
  }

  try {
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText);
    }

    const data = await res.json();
    if (data.token) {
      console.log('✅ Shiprocket Authenticated Successfully!');
    } else {
      console.log('❌ Auth returned status but no token:', data);
    }
  } catch (error) {
    console.error('❌ Shiprocket Authentication Failed:', error.message);
  }
};

const runAll = async () => {
  await testRazorpay();
  await testShiprocket();
  console.log('\nDiagnostic checks complete!');
};

runAll();
