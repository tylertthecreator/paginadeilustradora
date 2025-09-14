import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Helper function to get optimized image URL
export function getCloudinaryImageUrl(
  publicId: string,
  transformations: Record<string, any> = {}
) {
  const defaultTransformations = {
    quality: 'auto',
    fetch_format: 'auto',
    ...transformations,
  };

  return cloudinary.url(publicId, defaultTransformations);
}

// Helper function for responsive images
export function getResponsiveImageUrl(
  publicId: string,
  width: number,
  height?: number
) {
  return cloudinary.url(publicId, {
    width,
    height,
    crop: 'fill',
    quality: 'auto',
    fetch_format: 'auto',
  });
}
