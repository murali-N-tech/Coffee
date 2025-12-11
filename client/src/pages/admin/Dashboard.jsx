// Admin Dashboard page 
import { useState } from 'react';
import AdminSidebar from '../../components/layout/AdminSidebar';
import AdminHeader from '../../components/layout/AdminHeader';
import Card from '../../components/common/Card';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Card className="border-l-4 border-l-coffee-600">
               <h3 className="text-gray-500 text-sm uppercase">Total Menu Items</h3>
               <p className="text-3xl font-bold text-coffee-900">24</p>
             </Card>
             <Card className="border-l-4 border-l-gold">
               <h3 className="text-gray-500 text-sm uppercase">Categories</h3>
               <p className="text-3xl font-bold text-coffee-900">4</p>
             </Card>
             <Card className="border-l-4 border-l-green-500">
               <h3 className="text-gray-500 text-sm uppercase">Site Status</h3>
               <p className="text-3xl font-bold text-green-600">Live</p>
             </Card>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="flex gap-4">
                <button className="bg-white p-4 rounded shadow hover:bg-gray-50 text-coffee-700 font-medium">Add New Item</button>
                <button className="bg-white p-4 rounded shadow hover:bg-gray-50 text-coffee-700 font-medium">Update Hours</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;