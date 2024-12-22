import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';

const locations = [
  {
    id: 1,
    name: 'Main Store & Processing Facility',
    address: '123 Pepper Street, City Name, State 12345',
    phone: '+1 (234) 567-8901',
    email: 'mainstore@elzaeem.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    description: 'Our flagship store and main processing facility',
  },
  {
    id: 2,
    name: 'Downtown Branch',
    address: '456 Market Avenue, City Name, State 12345',
    phone: '+1 (234) 567-8902',
    email: 'downtown@elzaeem.com',
    hours: 'Mon-Sat: 10:00 AM - 8:00 PM',
    coordinates: { lat: 40.7580, lng: -73.9855 },
    description: 'Convenient downtown location with our full product range',
  },
  {
    id: 3,
    name: 'Wholesale Center',
    address: '789 Business Park, City Name, State 12345',
    phone: '+1 (234) 567-8903',
    email: 'wholesale@elzaeem.com',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    coordinates: { lat: 40.7829, lng: -73.9654 },
    description: 'Bulk orders and wholesale purchases',
  },
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Locations</h1>
          <p className="text-gray-600">
            Find us at these convenient locations across the city
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Map Preview (placeholder) */}
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary text-4xl" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-600 mb-4">{location.description}</p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-primary mt-1" />
                    <span className="text-gray-700">{location.address}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-primary" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-700 hover:text-primary"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-primary" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-gray-700 hover:text-primary"
                    >
                      {location.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaClock className="text-primary" />
                    <span className="text-gray-700">{location.hours}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    window.open(
                      `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`,
                      '_blank'
                    );
                  }}
                  className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors"
                >
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Need More Information?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our customer service team for any questions or inquiries
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:+12345678900"
              className="flex items-center space-x-2 text-primary hover:text-primary-light"
            >
              <FaPhone />
              <span>Call Us</span>
            </a>
            <a
              href="mailto:info@elzaeem.com"
              className="flex items-center space-x-2 text-primary hover:text-primary-light"
            >
              <FaEnvelope />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations; 