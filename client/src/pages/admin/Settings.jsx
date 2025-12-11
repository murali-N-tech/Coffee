// Settings page 
import { useState, useEffect } from 'react';
import api from '../../services/api';
import AdminSidebar from '../../components/layout/AdminSidebar';
import AdminHeader from '../../components/layout/AdminHeader';
import Button from '../../components/common/Button';

const Settings = () => {
  const [settings, setSettings] = useState({ contact: {}, hours: {}, hero: {} });

  useEffect(() => {
    api.get('/settings').then(res => setSettings(res.data));
  }, []);

  const handleSave = async () => {
    try {
      await api.put('/admin/settings', settings);
      alert('Settings Updated!');
    } catch(err) { alert('Error updating settings'); }
  };

  // Helper to update nested state
  const update = (section, field, value) => {
    setSettings(prev => ({
        ...prev,
        [section]: { ...prev[section], [field]: value }
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={true} />
      <div className="flex-1 flex flex-col overflow-auto">
        <AdminHeader />
        <main className="p-6 max-w-4xl">
          <h1 className="text-2xl font-bold mb-6">Site Settings</h1>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold border-b pb-2 mb-4">Contact Info</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input className="border p-2 rounded" placeholder="Phone" value={settings.contact.phone || ''} onChange={e => update('contact', 'phone', e.target.value)} />
                    <input className="border p-2 rounded" placeholder="Address" value={settings.contact.address || ''} onChange={e => update('contact', 'address', e.target.value)} />
                </div>
            </div>
            <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold border-b pb-2 mb-4">Opening Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input className="border p-2 rounded" placeholder="Weekdays" value={settings.hours.weekdays || ''} onChange={e => update('hours', 'weekdays', e.target.value)} />
                    <input className="border p-2 rounded" placeholder="Weekends" value={settings.hours.weekends || ''} onChange={e => update('hours', 'weekends', e.target.value)} />
                </div>
            </div>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;