// API calls for Menu 
import api from './api';

export const getMenuItems = async () => {
  const response = await api.get('/menu');
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};