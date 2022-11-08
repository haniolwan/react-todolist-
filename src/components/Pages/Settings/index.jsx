import { useState } from "react";
import { useSelector } from "react-redux";
import {
    Outlet,
    Link
} from "react-router-dom";
import { selectTranslations } from "../../../redux/feature/i18nSlice";
import './style.scss';

const Settings = () => {
    const [selected, setSelected] = useState('account');

    const { i18n: { locale } } = useSelector((state) => state)
    const t = useSelector(selectTranslations)

    return (
        <><section className={`${locale === 'ar' ? 'arSettingsStyle' : ''}`}>
            <h1 className="tasks-title">
                {t.settings.title}
            </h1>
            <div>
                <ul className="flex gap-8">
                    <li className="mr-6 text-[#40A1FC]">
                        <Link onClick={() => setSelected('account')} className='text-blue-500 hover:text-[#40A1FC] wrapper' to='/settings/account'>
                            <h1 className={`${selected === 'account' ? 'selected' : ''}`}>
                                {t.settings.account}
                            </h1>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link onClick={() => setSelected('security')} className='text-blue-500 hover:text-[#40A1FC] wrapper' to='/settings/security'>
                            <h1 className={`${selected === 'security' ? 'selected' : ''}`}>
                                {t.settings.security}
                            </h1>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link onClick={() => setSelected('alerts')} className='text-blue-500 hover:text-[#40A1FC] wrapper' to='/settings/alerts'>
                            <h1 className={`${selected === 'alerts' ? 'selected' : ''}`}>
                                {t.settings.alerts}
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