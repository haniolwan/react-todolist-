import './App.css';
import './index.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
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
import {
  Home,
  Calender,
  Notification,
  Settings
} from './components/Pages';
import './firebase.js';
import Account from './components/Account';
import { Alerts, Security } from './components';
import { useSelector } from 'react-redux';

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
  const [selectedDate, setSelectedDate] = useState(() => {
    const date = new Date();
    return ((parseInt(date.getMonth()) + 1) + '-' + date.getDate())
  });

  useEffect(() => {
    store.dispatch(getUserData());
  }, [])


  const { loading } = useSelector((state) => (state.i18n));
  return (
    loading ?
      <h1>... Loading</h1> :
      <>
        <NotificationsContext.Provider value={{ title, setTitle, message, setMessage }}>
          <SelectedTodoContext.Provider value={{ todo, setTodo }}>
            {sidebarShow === 'full' ?
              <FullSidebar showCollabsed={showCollabsedSidebar} /> :
              <CollabsedSidebar showCollabsed={showCollabsedSidebar} />
            }
            <Header setShowTaskModal={setShowTaskModal} setSearch={setSearch} search={search} />
            <TaskModal show={showTaskModal} setShowModal={setShowTaskModal} />
            <Success />
            <Routes>
              <Route path="statistics" element={<div>Statistics Page</div>} />
              <Route path="notifications" element={<Notification />} />
              <Route path="settings" element={<Settings />}>
                <Route path="account" element={<Account />} />
                <Route path="security" element={<Security />} />
                <Route path="alerts" element={<Alerts />} />
              </Route>
              <Route path="/calender" element={<Calender search={search} showTaskModal={showTaskModal} setShowTaskModal={setShowTaskModal} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />} />
              <Route path="/" element={<Home search={search} showTaskModal={showTaskModal} setShowTaskModal={setShowTaskModal} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />} />
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
