// Admin Sidebar component 
import { NavLink } from 'react-router-dom';
import { FiHome, FiCoffee, FiList, FiSettings, FiGrid } from 'react-icons/fi';

const AdminSidebar = ({ isOpen }) => {
  const links = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FiHome /> },
    { name: 'Menu Items', path: '/admin/menu', icon: <FiCoffee /> },
    { name: 'Categories', path: '/admin/categories', icon: <FiList /> },
    { name: 'Settings', path: '/admin/settings', icon: <FiSettings /> },
  ];

  return (
    <aside className={`bg-coffee-900 text-white w-64 min-h-screen fixed md:static transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <div className="h-16 flex items-center justify-center border-b border-coffee-800 font-serif font-bold text-xl tracking-wider">
        ADMIN PANEL
      </div>
      <nav className="mt-8 px-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-gold text-coffee-900 font-bold' : 'hover:bg-coffee-800 text-coffee-100'}`}
          >
            <span className="mr-3 text-lg">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;