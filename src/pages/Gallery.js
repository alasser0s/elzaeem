import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/farm1.jpg',
    title: 'Pepper Farm',
    description: 'Our beautiful pepper farm during harvest season',
  },
  {
    id: 2,
    src: '/gallery/processing.jpg',
    title: 'Processing Facility',
    description: 'State-of-the-art processing facility',
  },
  {
    id: 3,
    src: '/gallery/products1.jpg',
    title: 'Product Display',
    description: 'Our products on display',
  },
  {
    id: 4,
    src: '/gallery/farm2.jpg',
    title: 'Growing Process',
    description: 'Peppers growing in our greenhouse',
  },
  {
    id: 5,
    src: '/gallery/packaging.jpg',
    title: 'Packaging',
    description: 'Premium packaging process',
  },
  {
    id: 6,
    src: '/gallery/products2.jpg',
    title: 'Product Range',
    description: 'Wide range of pepper products',
  },
  // Add more gallery images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Gallery</h1>
          <p className="text-gray-600">
            Take a visual journey through our farms, facilities, and products
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes size={24} />
                </button>
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                />
                <div className="text-white text-center mt-4">
                  <h3 className="text-2xl font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p>{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery; 