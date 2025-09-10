<<<<<<< HEAD
import { Artwork } from '@/types/artwork';
=======
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
>>>>>>> f42d27adb31722162cba6080e3a97ecd433730e7

export const artwork: Artwork[] = [
  {
    id: 1,
    title: "Terracotta Bowl Collection",
    description: "A set of hand-thrown ceramic bowls featuring organic shapes and warm terracotta glazes. Each bowl is unique with subtle variations in texture and color.",
    category: "ceramics",
    imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    price: "$45-65",
    dimensions: "6-8 inches diameter",
    materials: "Stoneware clay, terracotta glaze",
    featured: true
  },
  {
    id: 2,
    title: "Sage Green Vase",
    description: "An elegant hand-thrown vase with a soft sage green glaze and organic curves. Perfect for displaying dried flowers or as a standalone art piece.",
    category: "ceramics",
    imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    price: "$85",
    dimensions: "12 inches tall",
    materials: "Stoneware clay, sage green glaze",
    featured: true
  },
  {
    id: 3,
    title: "Olive Mug Set",
    description: "A pair of handcrafted mugs with olive green glazes and comfortable handles. Each mug is slightly different, showcasing the beauty of handmade ceramics.",
    category: "ceramics",
    imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    price: "$55",
    dimensions: "4 inches tall",
    materials: "Stoneware clay, olive green glaze",
    featured: false
  },
  {
    id: 4,
    title: "Beige Crossbody Bag",
    description: "A minimalist crossbody bag made from high-quality canvas with leather accents. Features multiple compartments and adjustable strap.",
    category: "bags",
    imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$125",
    dimensions: "10 x 8 x 3 inches",
    materials: "Canvas, leather, brass hardware",
    featured: true
  },
  {
    id: 5,
    title: "Terracotta Tote",
    description: "A spacious tote bag in warm terracotta canvas with reinforced handles. Perfect for daily use or as a beach bag.",
    category: "bags",
    imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$95",
    dimensions: "16 x 14 x 6 inches",
    materials: "Canvas, cotton lining, brass hardware",
    featured: false
  },
  {
    id: 6,
    title: "Sage Green Clutch",
    description: "An elegant evening clutch in sage green leather with a subtle texture. Features a magnetic closure and interior card slots.",
    category: "bags",
    imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$75",
    dimensions: "9 x 6 x 2 inches",
    materials: "Genuine leather, magnetic closure",
    featured: true
  },
  {
    id: 7,
    title: "Olive Serving Bowl",
    description: "A large serving bowl with olive green glaze and organic rim. Perfect for salads, pasta, or as a decorative centerpiece.",
    category: "ceramics",
    imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    price: "$75",
    dimensions: "10 inches diameter",
    materials: "Stoneware clay, olive green glaze",
    featured: false
  },
  {
    id: 8,
    title: "Beige Canvas Backpack",
    description: "A versatile backpack in neutral beige canvas with leather straps and multiple pockets. Ideal for work or travel.",
    category: "bags",
    imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$145",
    dimensions: "15 x 12 x 6 inches",
    materials: "Canvas, leather, brass hardware",
    featured: true
  },
  {
    id: 9,
    title: "Terracotta Plant Pot",
    description: "A hand-thrown plant pot with drainage holes and terracotta glaze. Perfect for succulents or small herbs.",
    category: "ceramics",
    imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    price: "$35",
    dimensions: "5 inches tall",
    materials: "Stoneware clay, terracotta glaze",
    featured: false
  },
  {
    id: 10,
    title: "Sage Green Shoulder Bag",
    description: "A medium-sized shoulder bag in sage green canvas with adjustable strap and multiple interior pockets.",
    category: "bags",
    imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$110",
    dimensions: "12 x 10 x 4 inches",
    materials: "Canvas, leather, brass hardware",
    featured: false
  },
  {
    id: 11,
    title: "Olive Dinner Plates Set",
    description: "A set of four hand-thrown dinner plates with olive green glaze. Each plate has subtle variations making them unique.",
    category: "ceramics",
    imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    price: "$120",
    dimensions: "10 inches diameter each",
    materials: "Stoneware clay, olive green glaze",
    featured: true
  },
  {
    id: 12,
    title: "Beige Leather Wallet",
    description: "A minimalist leather wallet in beige with card slots and cash compartment. Hand-stitched with attention to detail.",
    category: "bags",
    imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$65",
    dimensions: "4 x 3 inches",
    materials: "Genuine leather, hand-stitched",
    featured: false
  }
];
