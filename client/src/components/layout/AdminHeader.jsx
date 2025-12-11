// Admin Header component 
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FiLogOut, FiMenu } from 'react-icons/fi';

const AdminHeader = ({ toggleSidebar }) => {
  const { logout, user } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 sticky top-0 z-30">
      <button onClick={toggleSidebar} className="md:hidden text-coffee-900">
        <FiMenu size={24} />
      </button>
      <div className="flex items-center ml-auto space-x-4">
        <span className="text-sm font-medium text-gray-600">Hello, {user?.username}</span>
        <button 
          onClick={logout}
          className="flex items-center text-sm text-red-600 hover:text-red-800 font-medium"
        >
          <FiLogOut className="mr-1" /> Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;