// Cloudinary image URLs for Toska CR Portfolio
export const cloudinaryImages = {
  // Gallery images
  gallery: {
    IMG_2338: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837426/toska-cr/gallery/IMG_2338.jpg',
    IMG_2343: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837430/toska-cr/gallery/IMG_2343.jpg',
    IMG_2353: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837434/toska-cr/gallery/IMG_2353.jpg',
    IMG_2392: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837437/toska-cr/gallery/IMG_2392.jpg',
    IMG_2477: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837753/toska-cr/gallery/IMG_2477.jpg',
    IMG_2491: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837444/toska-cr/gallery/IMG_2491.jpg',
    IMG_2492: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837449/toska-cr/gallery/IMG_2492.jpg',
    IMG_2497: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837453/toska-cr/gallery/IMG_2497.jpg',
    IMG_2512: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837458/toska-cr/gallery/IMG_2512.jpg',
    IMG_2526: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837462/toska-cr/gallery/IMG_2526.jpg',
  },
  
  // Work - Pottery
  pottery: {
    IMG_2338: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837469/toska-cr/work/pottery/IMG_2338.jpg',
    IMG_2343: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837473/toska-cr/work/pottery/IMG_2343.jpg',
    IMG_2353: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837477/toska-cr/work/pottery/IMG_2353.jpg',
    IMG_2392: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837480/toska-cr/work/pottery/IMG_2392.jpg',
    IMG_2477: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837800/toska-cr/work/pottery/IMG_2477.jpg',
    IMG_2491: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837491/toska-cr/work/pottery/IMG_2491.jpg',
    IMG_2492: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837498/toska-cr/work/pottery/IMG_2492.jpg',
    IMG_2497: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837502/toska-cr/work/pottery/IMG_2497.jpg',
    IMG_2512: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837507/toska-cr/work/pottery/IMG_2512.jpg',
    IMG_2526: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837510/toska-cr/work/pottery/IMG_2526.jpg',
  },
  
  // Work - Macrame
  macrame: {
    'Toska-128': 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837514/toska-cr/work/macrame/Toska-128.jpg',
    'Toska-130': 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837515/toska-cr/work/macrame/Toska-130.jpg',
    'Toska-146': 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837518/toska-cr/work/macrame/Toska-146.jpg',
    'Toska-157': 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837520/toska-cr/work/macrame/Toska-157.jpg',
    'Toska-167': 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837522/toska-cr/work/macrame/Toska-167.jpg',
    'Toska-170': 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837526/toska-cr/work/macrame/Toska-170.jpg',
  },
  
  // Page images
  about: {
    about_me: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837466/toska-cr/about/about_me.jpg',
  },
  
  contact: {
    get_in_touch: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837467/toska-cr/contact/get_in_touch.jpg',
  },
  
  // Icons
  icons: {
    shop_bag: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837468/toska-cr/icons/shop_bag.png',
    toska_logo: 'https://res.cloudinary.com/dxpdn6xgr/image/upload/v1757837468/toska-cr/icons/toska_logo.png',
  },
};

// Helper function to get Cloudinary URL with transformations
export function getCloudinaryUrl(publicId: string, transformations?: string): string {
  const baseUrl = 'https://res.cloudinary.com/dxpdn6xgr/image/upload';
  const transformString = transformations ? `/${transformations}` : '';
  return `${baseUrl}${transformString}/${publicId}`;
}

// Common transformations
export const transformations = {
  // Responsive images
  responsive: 'f_auto,q_auto,w_auto',
  // Thumbnail
  thumbnail: 'f_auto,q_auto,w_300,h_300,c_fill',
  // Gallery image
  gallery: 'f_auto,q_auto,w_800,h_600,c_fill',
  // Hero image
  hero: 'f_auto,q_auto,w_1200,h_800,c_fill',
  // Icon
  icon: 'f_auto,q_auto,w_100,h_100,c_fill',
};
