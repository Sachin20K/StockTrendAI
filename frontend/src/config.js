// Centralized API configuration for Create React App
// Create React App uses process.env.REACT_APP_* environment variables

export const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ||
  (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.REACT_APP_BACKEND_URL) ||
  '';

export const ML_API_URL =
  process.env.REACT_APP_ML_API_URL ||
  (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.REACT_APP_ML_API_URL) ||
  '';
