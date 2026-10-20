// Centralized API configuration for Create React App
// Strips any accidental trailing slashes and provides default production fallbacks

const rawBackend =
  process.env.REACT_APP_BACKEND_URL ||
  (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.REACT_APP_BACKEND_URL) ||
  'https://stocktrendai-backend.onrender.com';

const rawMlApi =
  process.env.REACT_APP_ML_API_URL ||
  (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.REACT_APP_ML_API_URL) ||
  'https://stocktrendai-ml-api.onrender.com';

export const BACKEND_URL = rawBackend.replace(/\/+$/, '');
export const ML_API_URL = rawMlApi.replace(/\/+$/, '');
