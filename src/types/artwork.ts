export interface Artwork {
  id: number;
  title: string;
  description: string;
  category: 'ceramics' | 'bags';
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
