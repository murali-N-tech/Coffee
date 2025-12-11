import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../services/authService';
import Button from '../../components/common/Button';
import { FiCoffee, FiLock } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await login(email, password);
      setUser(data);
      // Redirect to dashboard after successful login
      navigate('/admin/dashboard');
    } catch (err) {
      // Handle different error messages based on backend response
      const msg = err.response?.data?.message || 'Invalid email or password';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee-50 px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md border border-coffee-100">
        
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-coffee-100 rounded-full mb-4">
            <FiCoffee className="w-8 h-8 text-coffee-600" />
          </div>
          <h2 className="text-3xl font-bold text-coffee-900 font-serif">Admin Access</h2>
          <p className="text-gray-500 mt-2">Login to manage your cafe</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm flex items-center">
            <FiLock className="mr-2" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 focus:outline-none transition-all"
              placeholder="admin@chennapatanam.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 focus:outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 text-lg shadow-lg"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Restricted area. Authorized personnel only.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;