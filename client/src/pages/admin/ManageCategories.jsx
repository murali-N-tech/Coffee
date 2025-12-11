// Manage Categories page 
import { useState, useEffect } from 'react';
import api from '../../services/api';
import DataTable from '../../components/admin/DataTable';
import AdminSidebar from '../../components/layout/AdminSidebar';
import AdminHeader from '../../components/layout/AdminHeader';
import Button from '../../components/common/Button';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await api.get('/categories');
    setCategories(data);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/categories', { name, slug });
      setName(''); setSlug('');
      fetchCategories();
    } catch (err) { alert('Failed to create category'); }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={true} />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">Manage Categories</h1>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white p-6 rounded shadow h-fit">
                <h3 className="font-bold mb-4">Add New</h3>
                <form onSubmit={handleCreate} className="space-y-4">
                    <input type="text" placeholder="Name (e.g., Hot Coffee)" className="w-full p-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder="Slug (e.g., hot-coffee)" className="w-full p-2 border rounded" value={slug} onChange={e => setSlug(e.target.value)} />
                    <Button type="submit" className="w-full">Create Category</Button>
                </form>
            </div>
            <div className="md:col-span-2">
                <DataTable columns={[{header: 'Name', field: 'name'}, {header: 'Slug', field: 'slug'}]} data={categories} onEdit={() => {}} onDelete={() => {}} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageCategories;