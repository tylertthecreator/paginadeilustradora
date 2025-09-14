require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Image upload function
async function uploadImage(filePath, publicId) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: 'toska-cr',
      resource_type: 'auto',
      quality: 'auto',
      fetch_format: 'auto'
    });
    console.log(`✅ Uploaded: ${publicId} - ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`❌ Error uploading ${publicId}:`, error.message);
    return null;
  }
}

// Main upload function
async function uploadAllImages() {
  console.log('🚀 Starting Cloudinary upload...\n');

  const uploads = [
    // Gallery images
    { local: 'public/images/gallery/IMG_2338.jpg', cloud: 'gallery/IMG_2338' },
    { local: 'public/images/gallery/IMG_2343.jpg', cloud: 'gallery/IMG_2343' },
    { local: 'public/images/gallery/IMG_2353.jpg', cloud: 'gallery/IMG_2353' },
    { local: 'public/images/gallery/IMG_2392.jpg', cloud: 'gallery/IMG_2392' },
    { local: 'public/images/gallery/IMG_2477.jpg', cloud: 'gallery/IMG_2477' },
    { local: 'public/images/gallery/IMG_2491.jpg', cloud: 'gallery/IMG_2491' },
    { local: 'public/images/gallery/IMG_2492.jpg', cloud: 'gallery/IMG_2492' },
    { local: 'public/images/gallery/IMG_2497.jpg', cloud: 'gallery/IMG_2497' },
    { local: 'public/images/gallery/IMG_2512.jpg', cloud: 'gallery/IMG_2512' },
    { local: 'public/images/gallery/IMG_2526.jpg', cloud: 'gallery/IMG_2526' },

    // About page
    { local: 'public/images/about/about_me.png', cloud: 'about/about_me' },

    // Contact page
    { local: 'public/images/contact/get_in_touch.png', cloud: 'contact/get_in_touch' },

    // Icons
    { local: 'public/images/icons/shop_bag.png', cloud: 'icons/shop_bag' },
    { local: 'public/images/logo/toska_logo.png', cloud: 'icons/toska_logo' },

    // Work - Pottery
    { local: 'public/images/work/pottery/IMG_2338.jpg', cloud: 'work/pottery/IMG_2338' },
    { local: 'public/images/work/pottery/IMG_2343.jpg', cloud: 'work/pottery/IMG_2343' },
    { local: 'public/images/work/pottery/IMG_2353.jpg', cloud: 'work/pottery/IMG_2353' },
    { local: 'public/images/work/pottery/IMG_2392.jpg', cloud: 'work/pottery/IMG_2392' },
    { local: 'public/images/work/pottery/IMG_2477.jpg', cloud: 'work/pottery/IMG_2477' },
    { local: 'public/images/work/pottery/IMG_2491.jpg', cloud: 'work/pottery/IMG_2491' },
    { local: 'public/images/work/pottery/IMG_2492.jpg', cloud: 'work/pottery/IMG_2492' },
    { local: 'public/images/work/pottery/IMG_2497.jpg', cloud: 'work/pottery/IMG_2497' },
    { local: 'public/images/work/pottery/IMG_2512.jpg', cloud: 'work/pottery/IMG_2512' },
    { local: 'public/images/work/pottery/IMG_2526.jpg', cloud: 'work/pottery/IMG_2526' },

    // Work - Macrame
    { local: 'public/images/work/macrame/Toska-128 copy.jpg', cloud: 'work/macrame/Toska-128' },
    { local: 'public/images/work/macrame/Toska-130 copy.jpg', cloud: 'work/macrame/Toska-130' },
    { local: 'public/images/work/macrame/Toska-146 copy.jpg', cloud: 'work/macrame/Toska-146' },
    { local: 'public/images/work/macrame/Toska-157 copy.jpg', cloud: 'work/macrame/Toska-157' },
    { local: 'public/images/work/macrame/Toska-167 copy.jpg', cloud: 'work/macrame/Toska-167' },
    { local: 'public/images/work/macrame/Toska-170 copy.jpg', cloud: 'work/macrame/Toska-170' },
  ];

  const results = [];
  
  for (const upload of uploads) {
    if (fs.existsSync(upload.local)) {
      const url = await uploadImage(upload.local, upload.cloud);
      if (url) {
        results.push({ publicId: upload.cloud, url });
      }
    } else {
      console.log(`⚠️  File not found: ${upload.local}`);
    }
  }

  console.log('\n🎉 Upload complete!');
  console.log('\n📋 Cloudinary URLs:');
  results.forEach(result => {
    console.log(`${result.publicId}: ${result.url}`);
  });

  return results;
}

// Run the upload
uploadAllImages().catch(console.error);
