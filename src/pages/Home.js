import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaTruck, FaMedal } from 'react-icons/fa';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] bg-gradient-to-r from-primary to-primary-light"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center text-center relative z-10">
          <motion.div {...fadeInUp} className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Quality Peppers & Food Products
            </h1>
            <p className="text-xl mb-8">
              Experience the finest selection of peppers and food products
            </p>
            <Link
              to="/products"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-secondary-dark transition-colors"
            >
              Explore Our Products
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <FaLeaf className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fresh Products</h3>
              <p className="text-gray-600">
                We ensure all our products are fresh and of the highest quality
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <FaTruck className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to your doorstep
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <FaMedal className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest selection of products for our customers
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
            <p className="text-gray-600 mb-8">
              At Elzaeem, we take pride in delivering the finest quality peppers and food products
              to our customers. With years of experience in the industry, we have built a reputation
              for excellence and reliability.
            </p>
            <Link
              to="/about"
              className="text-primary hover:text-primary-light font-semibold"
            >
              Learn More About Us →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Our Products?
            </h2>
            <p className="mb-8">
              Browse our collection and find the perfect products for your needs
            </p>
            <Link
              to="/products"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-secondary-dark transition-colors"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 