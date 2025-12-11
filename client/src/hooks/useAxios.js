// Axios wrapper hook 
import { useState, useEffect } from 'react';
import api from '../services/api';

const useAxios = (url, method = 'GET', body = null, trigger = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api({ method, url, data: body });
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (url) fetchData();
  }, [url, method, body, trigger]);

  return { response, error, loading };
};

export default useAxios;