import { useState } from 'react';
import { useSelector } from 'react-redux';
import user from './../../../assets/dropdown/account.svg';
import edit from './../../../assets/dropdown/edit-user.svg';
import settings from './../../../assets/dropdown/settings.svg';
import logout from './../../../assets/dropdown/sign-out.svg';
import logoutUser from '../../../utils/logout';
import './style.css';
import { selectTranslations } from '../../../redux/feature/i18nSlice';


const Profile = () => {
    const [show, setShow] = useState(false);
    const { user: { userData: { name } }, i18n: { locale } } = useSelector((state) => state);
    const t = useSelector(selectTranslations)

    const showMenu = () => {
        setShow((show) => !show);
    }
    return (
        <div className={`${locale === 'ar' ? 'arAction' : 'action'}`}>
            <div className="profile" onClick={() => showMenu()}>
                <img src='' alt="profile IMG" />
            </div>
            <div className={`menu ${show && 'active'}`}
            >
                <h3 className="capitalize">{name}<br /><span>{t.profile.profession}</span></h3>
                <ul>
                    <li>
                        <img src={user} alt="user" />
                        <a href="/">{t.profile.account}</a>
                    </li>
                    <li>
                        <img src={edit} alt="edit user" />
                        <a href="/">{t.profile.edit}</a>
                    </li>
                    <li>
                        <img src={settings} alt="settings" />
                        <a href="/">{t.profile.settings}</a>
                    </li>
                    <li>
                        <img src={logout} alt="user" />
                        <a href="/" onClick={logoutUser}>{t.profile.logout}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;