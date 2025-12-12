import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext';

// Import the new ScrollToTop component
import ScrollToTop from './components/common/ScrollToTop'; 

// Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Public Pages
import Home from './pages/public/Home';
import Menu from './pages/public/Menu';
import Shop from './pages/public/Shop';
import About from './pages/public/About';
import Contact from './pages/public/Contact';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageMenu from './pages/admin/ManageMenu';
import ManageCategories from './pages/admin/ManageCategories';
import ManageShop from './pages/admin/ManageShop';
import Settings from './pages/admin/Settings';

// Error Page
import NotFound from './pages/NotFound';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div className="p-10">Loading...</div>;
  return user ? children : <Navigate to="/admin/login" />;
};

const PublicLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* ADD THIS LINE HERE - It fixes the scroll issue */}
        <ScrollToTop /> 

        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/menu" element={<PublicLayout><Menu /></PublicLayout>} />
          <Route path="/shop" element={<PublicLayout><Shop /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

          {/* ================= ADMIN ROUTES ================= */}
          <Route path="/admin/login" element={<Login />} />
          
          <Route path="/admin/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          
          <Route path="/admin/menu" element={
            <ProtectedRoute><ManageMenu /></ProtectedRoute>
          } />
          
          <Route path="/admin/categories" element={
            <ProtectedRoute><ManageCategories /></ProtectedRoute>
          } />

          <Route path="/admin/products" element={
            <ProtectedRoute><ManageShop /></ProtectedRoute>
          } />
          
          <Route path="/admin/settings" element={
            <ProtectedRoute><Settings /></ProtectedRoute>
          } />

          {/* ================= 404 ROUTE ================= */}
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;