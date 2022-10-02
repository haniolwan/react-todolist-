import { useState } from 'react'
import user from './../../assets/dropdown/account.svg';
import edit from './../../assets/dropdown/edit-user.svg';
import settings from './../../assets/dropdown/settings.svg';
import logout from './../../assets/dropdown/sign-out.svg';
import './style.css';

const Profile = () => {
    const [show, setShow] = useState(false);
    const showMenu = () => {
        setShow((show) => !show);
    }
    return (
        <div className="action">
            <div className="profile" onClick={() => showMenu()}>
                <img src='https://i.pinimg.com/736x/b0/e2/f5/b0e2f54d141a70986beac46962394651.jpg' alt="profile IMG" />
            </div>
            <div className={`menu ${show && 'active'}`}
            >
                <h3>John Doe<br /><span>Software Developer</span></h3>
                <ul>
                    <li>
                        <img src={user} alt="user" />
                        <a href="/">My profile</a>
                    </li>
                    <li>
                        <img src={edit} alt="edit user" />
                        <a href="/">Edit profile</a>
                    </li>
                    <li>
                        <img src={settings} alt="settings" />
                        <a href="/">Setting</a>
                    </li>
                    <li>
                        <img src={logout} alt="user" />
                        <a href="/">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;