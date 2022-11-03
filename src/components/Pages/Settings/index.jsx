import { useState } from "react";
import {
    Outlet,
    useNavigate,
    Link
} from "react-router-dom";
import './style.scss';

const Settings = () => {
    const [selected, setSelected] = useState('account');

    const navigate = useNavigate();
    return (
        <><section>
            <h1 className="tasks-title">Settings</h1>
            <div>
                <ul className="flex gap-8">
                    <li className="mr-6 text-[#40A1FC]">
                        <Link onClick={() => setSelected('account')} className='text-blue-500 hover:text-[#40A1FC] wrapper' to='/settings/account'>
                            <h1 className={`${selected === 'account' ? 'selected' : ''}`}>
                                Account
                            </h1>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link onClick={() => setSelected('security')} className='text-blue-500 hover:text-[#40A1FC] wrapper' to='/settings/security'>
                            <h1 className={`${selected === 'security' ? 'selected' : ''}`}>
                                Security
                            </h1>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link onClick={() => setSelected('alerts')} className='text-blue-500 hover:text-[#40A1FC] wrapper' to='/settings/alerts'>
                            <h1 className={`${selected === 'alerts' ? 'selected' : ''}`}>
                                Alerts
                            </h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
            <Outlet />
        </>
    );
}

export default Settings;