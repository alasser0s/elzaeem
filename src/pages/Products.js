import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaFilter } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Red Chili Peppers',
    category: 'Fresh Peppers',
    price: 4.99,
    image: '/products/red-chili.jpg',
    description: 'Fresh and spicy red chili peppers',
  },
  {
    id: 2,
    name: 'Green Bell Peppers',
    category: 'Fresh Peppers',
    price: 3.99,
    image: '/products/green-bell.jpg',
    description: 'Sweet and crispy green bell peppers',
  },
  {
    id: 3,
    name: 'Chili Powder',
    category: 'Spices',
    price: 6.99,
    image: '/products/chili-powder.jpg',
    description: 'Premium quality chili powder',
  },
  {
    id: 4,
    name: 'Pepper Sauce',
    category: 'Sauces',
    price: 8.99,
    image: '/products/pepper-sauce.jpg',
    description: 'Homemade spicy pepper sauce',
  },
  // Add more products as needed
];

const categories = ['All', 'Fresh Peppers', 'Spices', 'Sauces'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Our Products</h1>
          <button
            onClick={() => setShowCart(!showCart)}
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg"
          >
            <FaShoppingCart />
            <span>{cart.length} items</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shopping Cart Sidebar */}
        {showCart && (
          <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg p-6 transform transition-transform">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-500">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-16 px-2 py-1 border rounded"
                        />
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="text-primary font-bold">${totalAmount.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      // Handle checkout logic here
                      alert('Proceeding to checkout...');
                    }}
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 