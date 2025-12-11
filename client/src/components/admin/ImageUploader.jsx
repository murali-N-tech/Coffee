// Image Uploader component 
import { useState } from 'react';
import axios from 'axios';

const ImageUploader = ({ onUploadSuccess, existingImage }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(existingImage || '');

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` } };
      
      const { data } = await axios.post('http://localhost:5000/api/v1/admin/upload', formData, config);
      
      // Backend returns relative path "/uploads/...", we prepend server URL for preview
      const fullUrl = `http://localhost:5000${data.filePath}`;
      setPreview(fullUrl);
      onUploadSuccess(fullUrl); // Pass the URL back to parent form
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
      alert('Image upload failed');
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Item Image</label>
      <div className="flex items-center space-x-4">
        {preview && <img src={preview} alt="Preview" className="h-20 w-20 object-cover rounded-lg border" />}
        <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          {uploading ? 'Uploading...' : 'Choose File'}
          <input type="file" onChange={uploadFileHandler} className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;