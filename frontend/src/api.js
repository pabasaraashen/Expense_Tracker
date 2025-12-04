import axios from 'axios';

// Use Vite's env in the browser. `process` is not defined in the browser.
const base = import.meta.env.VITE_API_URL || import.meta.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({ baseURL: base });

export default api;
