import './App.css';
import './index.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import 'flowbite';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import NotificationsContext from './context/Notifications';
import { useEffect, useState } from 'react';
import store from './redux/app/store';
import { getUserData } from './redux/feature/userSlice';
const App = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    store.dispatch(getUserData());
  }, [])
  return (
    <>
      <NotificationsContext.Provider value={{ title, setTitle, message, setMessage }}>
        <Routes>
          <Route path="/calender" element={<div>Calender Page</div>} />
          <Route path="/statistics" element={<div>Statistics Page</div>} />
          <Route path="/notifications" element={<div>Notifications Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={
            <h1>
              Page Not Found
            </h1>} />
        </Routes>
      </NotificationsContext.Provider>
    </>
  );
}

export default App;
