import { useState } from 'react';
import './App.css';
import CollabsedSidebar from './components/Sidebar/CollabsedSidebar';
import FullSidebar from './components/Sidebar/FullSidebar';
import './index.css'


const App = () => {
  const [sidebarShow, setSidebarShow] = useState("full");
  const showCollabsedSidebar = (sidebar) => {
    setSidebarShow(sidebar)
  }
  return (
    sidebarShow === 'full' ? <FullSidebar showCollabsed={showCollabsedSidebar} /> : <CollabsedSidebar showCollabsed={showCollabsedSidebar} />
  );
}

export default App;
