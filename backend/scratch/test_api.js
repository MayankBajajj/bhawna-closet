const testApi = async () => {
  console.log('Fetching local backend API...');
  try {
    const res = await fetch('http://localhost:5000/api/products?page=1&limit=4&category=All&sort=newest');
    const data = await res.json();
    console.log('API RESPONSE KEYS:', Object.keys(data));
    console.log('PRODUCTS ARRAY LENGTH:', data.products ? data.products.length : 'undefined');
    console.log('FULL DATA PREVIEW:', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('API FETCH FAILED:', err.message);
  }
};
testApi();
