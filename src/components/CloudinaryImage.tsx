import Image from 'next/image';
import { getCloudinaryImageUrl } from '@/lib/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  transformations?: Record<string, any>;
}

export default function CloudinaryImage({
  publicId,
  alt,
  width = 400,
  height = 400,
  className = '',
  priority = false,
  transformations = {},
}: CloudinaryImageProps) {
  const imageUrl = getCloudinaryImageUrl(publicId, {
    width,
    height,
    crop: 'fill',
    quality: 'auto',
    fetch_format: 'auto',
    ...transformations,
  });

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
