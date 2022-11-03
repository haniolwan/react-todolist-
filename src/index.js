import React from 'react';
import 'flowbite';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import "react-datepicker/dist/react-datepicker.css";
import { Login } from './components/Pages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<App/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </CookiesProvider>
  // </React.StrictMode>
);

