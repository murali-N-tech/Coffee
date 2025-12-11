import { useState, useEffect } from 'react';
import api from '../../services/api';
import AdminSidebar from '../../components/layout/AdminSidebar';
import AdminHeader from '../../components/layout/AdminHeader';
import Button from '../../components/common/Button';

const Settings = () => {
  const [settings, setSettings] = useState({ 
    contact: { email: '', phone: '', address: '', mapsLink: '' }, 
    hours: { weekdays: '', weekends: '' }, 
    hero: {} 
  });

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
            
            {/* CONTACT SECTION */}
            <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold border-b pb-2 mb-4 text-coffee-900">Contact Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs text-gray-500 uppercase font-bold">Phone Number</label>
                        <input className="w-full border p-2 rounded focus:border-gold outline-none" placeholder="+91..." value={settings.contact.phone || ''} onChange={e => update('contact', 'phone', e.target.value)} />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 uppercase font-bold">Email Address</label>
                        <input className="w-full border p-2 rounded focus:border-gold outline-none" placeholder="hello@example.com" value={settings.contact.email || ''} onChange={e => update('contact', 'email', e.target.value)} />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-xs text-gray-500 uppercase font-bold">Physical Address</label>
                        <input className="w-full border p-2 rounded focus:border-gold outline-none" placeholder="12-34, Main Road..." value={settings.contact.address || ''} onChange={e => update('contact', 'address', e.target.value)} />
                    </div>
                    
                    {/* NEW MAP FIELD */}
                    <div className="md:col-span-2">
                        <label className="text-xs text-gray-500 uppercase font-bold">Google Maps Embed URL (src)</label>
                        <p className="text-[10px] text-gray-400 mb-1">Go to Google Maps {'>'} Share {'>'} Embed a map {'>'} Copy the link inside src="..."</p>
                        <input 
                            className="w-full border p-2 rounded focus:border-gold outline-none text-sm text-gray-600 font-mono" 
                            placeholder="https://www.google.com/maps/embed?pb=..." 
                            value={settings.contact.mapsLink || ''} 
                            onChange={e => update('contact', 'mapsLink', e.target.value)} 
                        />
                    </div>
                </div>
            </div>

            {/* HOURS SECTION */}
            <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold border-b pb-2 mb-4 text-coffee-900">Opening Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs text-gray-500 uppercase font-bold">Weekdays</label>
                        <input className="w-full border p-2 rounded focus:border-gold outline-none" placeholder="7:00 AM - 9:00 PM" value={settings.hours.weekdays || ''} onChange={e => update('hours', 'weekdays', e.target.value)} />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 uppercase font-bold">Weekends</label>
                        <input className="w-full border p-2 rounded focus:border-gold outline-none" placeholder="8:00 AM - 10:00 PM" value={settings.hours.weekends || ''} onChange={e => update('hours', 'weekends', e.target.value)} />
                    </div>
                </div>
            </div>

            <Button onClick={handleSave} className="w-full md:w-auto">Save All Changes</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;