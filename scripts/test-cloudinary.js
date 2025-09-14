// Test Cloudinary integration
const https = require('https');

const testImages = [
  'https://res.cloudinary.com/dxpdn6xgr/image/upload/f_auto,q_auto,w_800,h_600,c_fill/toska-cr/gallery/IMG_2338.jpg',
  'https://res.cloudinary.com/dxpdn6xgr/image/upload/f_auto,q_auto,w_600,h_600,c_fill/toska-cr/about/about_me.jpg',
  'https://res.cloudinary.com/dxpdn6xgr/image/upload/f_auto,q_auto,w_100,h_100,c_fill/toska-cr/icons/toska_logo.png'
];

console.log('🧪 Testing Cloudinary Integration...\n');

async function testImage(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    https.get(url, (res) => {
      const endTime = Date.now();
      const loadTime = endTime - startTime;
      
      if (res.statusCode === 200) {
        console.log(`✅ ${url.split('/').pop()} - ${loadTime}ms - ${res.headers['content-type']}`);
        resolve({ success: true, loadTime, contentType: res.headers['content-type'] });
      } else {
        console.log(`❌ ${url.split('/').pop()} - HTTP ${res.statusCode}`);
        resolve({ success: false, statusCode: res.statusCode });
      }
    }).on('error', (err) => {
      console.log(`❌ ${url.split('/').pop()} - Error: ${err.message}`);
      resolve({ success: false, error: err.message });
    });
  });
}

async function runTests() {
  const results = [];
  
  for (const url of testImages) {
    const result = await testImage(url);
    results.push({ url, ...result });
  }
  
  console.log('\n📊 Test Summary:');
  const successful = results.filter(r => r.success).length;
  const total = results.length;
  
  console.log(`✅ Successful: ${successful}/${total}`);
  console.log(`⚡ Average load time: ${Math.round(results.filter(r => r.loadTime).reduce((a, b) => a + b.loadTime, 0) / successful)}ms`);
  
  if (successful === total) {
    console.log('\n🎉 All Cloudinary images are working perfectly!');
  } else {
    console.log('\n⚠️  Some images failed to load. Check your Cloudinary configuration.');
  }
}

runTests();
