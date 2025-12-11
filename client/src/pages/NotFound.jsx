// Not Found page 
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-cream text-center px-4">
      <h1 className="text-9xl font-bold text-coffee-200">404</h1>
      <h2 className="text-3xl font-serif text-coffee-900 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 mb-8">The coffee you are looking for has been spilled.</p>
      <Link to="/" className="bg-coffee-600 text-white px-6 py-3 rounded-full hover:bg-coffee-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;