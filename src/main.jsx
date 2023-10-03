// main.jsx

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './app/store.js'; // Correct the import statement

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
