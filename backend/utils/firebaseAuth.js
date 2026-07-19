import jwt from 'jsonwebtoken';

let cachedKeys = null;
let keysExpiryTime = 0;

// Fetch Google's public certificates for securetoken verification
const fetchGooglePublicKeys = async () => {
  const now = Date.now();
  if (cachedKeys && now < keysExpiryTime) {
    return cachedKeys;
  }

  try {
    const res = await fetch('https://www.googleapis.com/robot/v1/metadata/x509/securetoken-system@system.gserviceaccount.com');
    if (!res.ok) {
      throw new Error('Failed to fetch Google public keys');
    }
    const data = await res.json();
    cachedKeys = data;
    // Cache for 6 hours
    keysExpiryTime = now + 6 * 60 * 60 * 1000;
    return cachedKeys;
  } catch (err) {
    console.error('Error fetching Google securetoken certs:', err);
    throw new Error('Internal authentication service error: ' + err.message);
  }
};

/**
 * Verifies a Firebase ID token (JWT) on the backend using Google's public certs.
 * Returns the decoded token payload including phone_number.
 */
export const verifyFirebaseIdToken = async (token) => {
  if (!token) {
    throw new Error('Firebase ID token is required');
  }

  const projectId = process.env.FIREBASE_PROJECT_ID || 'bhawna-closet'; // fallback or env

  // 1. Decode token to read header (specifically kid)
  const decoded = jwt.decode(token, { complete: true });
  if (!decoded || !decoded.header || !decoded.header.kid) {
    throw new Error('Invalid authentication token format');
  }

  const kid = decoded.header.kid;
  const publicKeys = await fetchGooglePublicKeys();
  const cert = publicKeys[kid];

  if (!cert) {
    throw new Error('Authentication token signature verification failed (unknown key ID)');
  }

  // 2. Verify signature and claims
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      cert,
      {
        algorithms: ['RS256'],
        audience: projectId,
        issuer: `https://securetoken.google.com/${projectId}`
      },
      (err, decodedPayload) => {
        if (err) {
          console.error('Firebase token verification error:', err);
          return reject(new Error('Invalid or expired authentication token: ' + err.message));
        }
        resolve(decodedPayload);
      }
    );
  });
};
