import './App.css';
import './index.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import NotificationsContext from './Context/Notifications';
import { useState } from 'react';
const App = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <NotificationsContext.Provider value={{ title, setTitle, message, setMessage }}>
        <Routes>
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
