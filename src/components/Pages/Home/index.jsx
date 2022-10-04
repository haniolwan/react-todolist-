import { useContext, useState } from 'react';
import NotificationsContext from '../../../Context/Notifications';
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

    const showCollabsedSidebar = (sidebar) => {
        setSidebarShow(sidebar)
    }
    const hideModal = () => {
        setShowModal((show) => !show)
    }
    const { title, message } = useContext(NotificationsContext);
    return (
        <>
            {sidebarShow === 'full' ? <FullSidebar showCollabsed={showCollabsedSidebar} /> : <CollabsedSidebar showCollabsed={showCollabsedSidebar} />}
            <Header hideModal={hideModal} />
            <h1 className="tasks-title">Tasks</h1>
            <div className="flex gap-5 mr-14">
                <Tasks />
                <div className='flex flex-col'>
                    <Success title={title} message={message} />
                    <Calender />
                    <DailyStatistics />
                </div>
            </div>
            <TaskModal show={showModal} hideModal={hideModal} />
        </>
    )
}

export default Home;