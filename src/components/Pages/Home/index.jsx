import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Calender,
    CollabsedSidebar,
    FullSidebar,
    Header,
    DailyStatistics,
    Tasks,
    TaskModal,
    Success
} from '../../common';

const Home = () => {
    const [sidebarShow, setSidebarShow] = useState("full");
    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.user);
    const showCollabsedSidebar = (sidebar) => {
        setSidebarShow(sidebar)
    }
    const hideModal = () => {
        setShowModal((show) => !show)
    }
    return (
        user.isAuthorized ?
            <>
                {sidebarShow === 'full' ? <FullSidebar showCollabsed={showCollabsedSidebar} /> : <CollabsedSidebar showCollabsed={showCollabsedSidebar} />}
                <Header hideModal={hideModal} />
                <h1 className="tasks-title">Tasks</h1>
                <div className="flex gap-5 mr-14">
                    <Tasks />
                    <div className='flex flex-col'>
                        <Success />
                        <Calender />
                        <DailyStatistics />
                    </div>
                </div>
                <TaskModal show={showModal} hideModal={hideModal} />
            </>
            : null
    )
}

export default Home;