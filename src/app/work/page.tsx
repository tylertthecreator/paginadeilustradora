'use client';

import { motion } from "framer-motion";
import { FaFilter, FaEye, FaShoppingBag } from "react-icons/fa";
import dynamic from 'next/dynamic';

const WorkGallery = dynamic(() => import('./WorkGallery'), {
  ssr: false,
  loading: () => <div className="text-center py-8">Loading gallery...</div>
});

// Metadata moved to layout.tsx since this is now a Client Component

export default function WorkPage() {
  // Artwork data with placeholder images
  const artwork = [
    {
      id: 1,
      title: "Terracotta Bowl Set",
      category: "ceramics",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      alt: "Hand-thrown terracotta ceramic bowls with natural finish",
      description: "Hand-thrown ceramic bowls with natural terracotta finish"
    },
    {
      id: 2,
      title: "Sage Green Vase",
      category: "ceramics", 
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      alt: "Elegant ceramic vase with sage green glaze and organic curves",
      description: "Elegant vase with organic curves and sage green glaze"
    },
    {
      id: 3,
      title: "Leather Crossbody Bag",
      category: "bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", 
      alt: "Handcrafted leather crossbody bag with brass hardware",
      description: "Handcrafted leather bag with brass hardware"
    },
    {
      id: 4,
      title: "Olive Pottery Plate",
      category: "ceramics",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      alt: "Ceramic dinner plate with olive green glaze and natural edge",
      description: "Dinner plate with olive green glaze and natural edge"
    },
    {
      id: 5,
      title: "Canvas Tote Bag",
      category: "bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      alt: "Sturdy canvas tote bag with leather handles",
      description: "Sturdy canvas tote with leather handles"
    },
    {
      id: 6,
      title: "Beige Ceramic Mug",
      category: "ceramics",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      alt: "Ceramic coffee mug with warm beige glaze and comfortable handle",
      description: "Coffee mug with warm beige glaze and comfortable handle"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-terracotta-600 mb-6">
            My Work
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            A collection of handcrafted ceramics and bags, each piece telling its own story
          </p>
        </motion.div>

        {/* Interactive Gallery */}
        <WorkGallery artwork={artwork} />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sage-50 to-terracotta-50 rounded-2xl p-8 border border-sage-200">
            <h2 className="text-2xl font-serif text-terracotta-600 mb-4">
              Interested in a Custom Piece?
            </h2>
            <p className="text-sage-700 mb-6 max-w-2xl mx-auto">
              I love creating custom pieces that are perfectly suited to your style and needs. 
              Let's work together to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shop"
                className="bg-terracotta-600 text-white px-8 py-3 rounded-full hover:bg-terracotta-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <FaShoppingBag />
                Visit Shop
              </a>
              <a
                href="/contact"
                className="bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
