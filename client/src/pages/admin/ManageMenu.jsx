// Manage Menu page 
import { useState, useEffect } from 'react';
import api from '../../services/api';
import DataTable from '../../components/admin/DataTable';
import ImageUploader from '../../components/admin/ImageUploader';
import AdminSidebar from '../../components/layout/AdminSidebar';
import AdminHeader from '../../components/layout/AdminHeader';
import Button from '../../components/common/Button';

const ManageMenu = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({ name: '', price: '', category: '', description: '', imageURL: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [menuRes, catRes] = await Promise.all([api.get('/menu'), api.get('/categories')]);
    setItems(menuRes.data);
    setCategories(catRes.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (currentItem._id) {
            await api.put(`/admin/menu/${currentItem._id}`, currentItem);
        } else {
            await api.post('/admin/menu', currentItem);
        }
        setIsModalOpen(false);
        fetchData();
    } catch (error) {
        alert('Error saving item');
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm('Delete this item?')) {
        await api.delete(`/admin/menu/${id}`);
        fetchData();
    }
  };

  const columns = [
    { header: 'Image', render: (item) => <img src={item.imageURL} alt={item.name} className="h-10 w-10 object-cover rounded"/> },
    { header: 'Name', field: 'name' },
    { header: 'Price', render: (item) => `₹${item.price}` },
    { header: 'Category', render: (item) => item.category?.name || 'N/A' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={true} />
      <div className="flex-1 flex flex-col overflow-auto">
        <AdminHeader />
        <main className="p-6">
          <div className="flex justify-between mb-6">
            <h1 className="text-2xl font-bold">Manage Menu</h1>
            <Button onClick={() => { setCurrentItem({}); setIsModalOpen(true); }}>Add Item</Button>
          </div>
          <DataTable columns={columns} data={items} onEdit={(item) => { setCurrentItem(item); setIsModalOpen(true); }} onDelete={handleDelete} />
        </main>
      </div>

      {/* Simple Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg overflow-y-auto max-h-[90vh]">
                <h2 className="text-xl font-bold mb-4">{currentItem._id ? 'Edit Item' : 'Add Item'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-2 border rounded" value={currentItem.name || ''} onChange={e => setCurrentItem({...currentItem, name: e.target.value})} required />
                    <textarea placeholder="Description" className="w-full p-2 border rounded" value={currentItem.description || ''} onChange={e => setCurrentItem({...currentItem, description: e.target.value})} required />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Price" className="w-full p-2 border rounded" value={currentItem.price || ''} onChange={e => setCurrentItem({...currentItem, price: e.target.value})} required />
                        <select className="w-full p-2 border rounded" value={currentItem.category?._id || currentItem.category || ''} onChange={e => setCurrentItem({...currentItem, category: e.target.value})} required>
                            <option value="">Select Category</option>
                            {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                        </select>
                    </div>
                    <ImageUploader existingImage={currentItem.imageURL} onUploadSuccess={(url) => setCurrentItem({...currentItem, imageURL: url})} />
                    <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default ManageMenu;