export interface Artwork {
  id: number;
  title: string;
  description: string;
<<<<<<< HEAD
  category: 'ceramics' | 'bags' | 'graphic' | 'illustration' | 'pottery' | 'macrame';
=======
  category: 'ceramics' | 'bags';
>>>>>>> f42d27adb31722162cba6080e3a97ecd433730e7
  imageSrc: string;
  price: string;
  dimensions: string;
  materials: string;
  featured: boolean;
}

export interface ArtworkData {
  artwork: Artwork[];
}

export interface GalleryFilter {
  category: 'all' | 'ceramics' | 'bags';
  featured?: boolean;
}
