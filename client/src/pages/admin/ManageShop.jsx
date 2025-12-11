import { useState, useEffect } from 'react';
import api from '../../services/api';
import DataTable from '../../components/admin/DataTable';
import ImageUploader from '../../components/admin/ImageUploader';
import AdminSidebar from '../../components/layout/AdminSidebar';
import AdminHeader from '../../components/layout/AdminHeader';
import Button from '../../components/common/Button';

const ManageShop = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', price: '', weight: '', tag: '', description: '', imageURL: '' 
  });

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
    } catch (err) {
      console.error('Failed to fetch products', err);
      setProducts([]);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/products', currentItem);
      setIsModalOpen(false);
      fetchProducts();
      setCurrentItem({});
    } catch (error) {
      console.error('Error saving product', error);
      alert('Error saving product');
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm('Delete this product?')) {
        await api.delete(`/admin/products/${id}`);
        fetchProducts();
    }
  };

  const columns = [
    { header: 'Image', render: (item) => <img src={item.imageURL} alt={item.name} className="h-10 w-10 object-cover rounded"/> },
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Price', render: (item) => `₹${item.price}` },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={true} />
      <div className="flex-1 flex flex-col overflow-auto">
        <AdminHeader />
        <main className="p-6">
          <div className="flex justify-between mb-6">
            <h1 className="text-2xl font-bold">Manage Shop Products</h1>
            <Button onClick={() => { setCurrentItem({}); setIsModalOpen(true); }}>Add Product</Button>
          </div>
          <DataTable columns={columns} data={products} onEdit={() => {}} onDelete={handleDelete} />
        </main>
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Add Retail Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Name (e.g. Classic Blend)" className="w-full p-2 border rounded" value={currentItem.name || ''} onChange={e => setCurrentItem({...currentItem, name: e.target.value})} required />
                    <textarea placeholder="Description" className="w-full p-2 border rounded" value={currentItem.description || ''} onChange={e => setCurrentItem({...currentItem, description: e.target.value})} required />
                    
                    <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Price" className="w-full p-2 border rounded" value={currentItem.price || ''} onChange={e => setCurrentItem({...currentItem, price: e.target.value})} required />
                        <input type="text" placeholder="Weight (e.g. 250g)" className="w-full p-2 border rounded" value={currentItem.weight || ''} onChange={e => setCurrentItem({...currentItem, weight: e.target.value})} required />
                    </div>
                    
                    <input type="text" placeholder="Tag (e.g. Best Seller)" className="w-full p-2 border rounded" value={currentItem.tag || ''} onChange={e => setCurrentItem({...currentItem, tag: e.target.value})} />
                    
                    <ImageUploader existingImage={currentItem.imageURL} onUploadSuccess={(url) => setCurrentItem({...currentItem, imageURL: url})} />
                    
                    <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit">Save Product</Button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default ManageShop;