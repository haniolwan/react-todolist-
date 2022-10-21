import './App.css';
import './index.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import NotificationsContext from './context/Notifications';
import { useEffect, useState } from 'react';
import store from './redux/app/store';
import { getUserData } from './redux/feature/userSlice';
import {
  CollabsedSidebar,
  FullSidebar,
  Header,
  Success,
  TaskModal
} from './components/common';
import SelectedTodoContext from './context/SelectedTodo';


const App = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [sidebarShow, setSidebarShow] = useState("full");
  const showCollabsedSidebar = (sidebar) => {
    setSidebarShow(sidebar)
  }
  const [search, setSearch] = useState('');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [todo, setTodo] = useState(false);

  useEffect(() => {
    store.dispatch(getUserData());
  }, [])


  return (
    <>
      <NotificationsContext.Provider value={{ title, setTitle, message, setMessage }}>
        <SelectedTodoContext.Provider value={{ todo, setTodo }}>
          {
            sidebarShow === 'full' ?
              <FullSidebar showCollabsed={showCollabsedSidebar} /> :
              <CollabsedSidebar showCollabsed={showCollabsedSidebar} />
          }
          <Header setShowTaskModal={setShowTaskModal} setSearch={setSearch} search={search} />
          <TaskModal show={showTaskModal} setShowModal={setShowTaskModal} />
          <Success />
          <Routes>
            <Route path="/calender" element={<div>Calender Page</div>} />
            <Route path="/statistics" element={<div>Statistics Page</div>} />
            <Route path="/notifications" element={<div>Notifications Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/" element={<Home search={search} showTaskModal={showTaskModal} setShowTaskModal={setShowTaskModal} />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={
              <h1>
                Page Not Found
              </h1>} />
          </Routes>
        </SelectedTodoContext.Provider>
      </NotificationsContext.Provider>
    </>
  );
}

export default App;
