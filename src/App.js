import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CollabsedSidebar from './components/Sidebar/CollabsedSidebar';
import FullSidebar from './components/Sidebar/FullSidebar';
import './index.css'


const App = () => {
  const [sidebarShow, setSidebarShow] = useState("full");
  const showCollabsedSidebar = (sidebar) => {
    setSidebarShow(sidebar)
  }
  return (
    <div style={{ backgroundColor: "#F6F6F6", display: "grid", gridTemplateColumns: "15% 85%" }}>
      {sidebarShow === 'full' ? <FullSidebar showCollabsed={showCollabsedSidebar} /> : <CollabsedSidebar showCollabsed={showCollabsedSidebar} />}
      <Header />
    </div>
  );
}

export default App;
