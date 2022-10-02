import { useState } from 'react';
import {
  Calender,
  CollabsedSidebar,
  DailyStatistics,
  FullSidebar,
  Header,
  Tasks
} from './components';
import './App.css';
import './index.css';
import TaskModal from './components/Modals/Task';

const App = () => {
  const [sidebarShow, setSidebarShow] = useState("full");
  const [showModal, setShowModal] = useState(false);

  const showCollabsedSidebar = (sidebar) => {
    setSidebarShow(sidebar)
  }
  const hideModal = () => {
    setShowModal((show) => !show)
  }

  return (
    <>
      {sidebarShow === 'full' ? <FullSidebar showCollabsed={showCollabsedSidebar} /> : <CollabsedSidebar showCollabsed={showCollabsedSidebar} />}
      <Header hideModal={hideModal} />
      <h1 className="tasks-title">Tasks</h1>
      <div className="flex gap-5 mr-14">
        <Tasks />
        <div className='flex flex-col'>
          <Calender />
          <DailyStatistics />
        </div>
      </div>
      <TaskModal show={showModal} hideModal={hideModal} />
    </>
  );
}

export default App;
