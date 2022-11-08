import { useSelector } from 'react-redux';
import { selectTranslations } from '../../redux/feature/i18nSlice';
import './style.scss';

const Alerts = () => {

    const { i18n: { locale } } = useSelector((state) => state)
    const t = useSelector(selectTranslations)

    return (
        <section className={`${locale === 'ar' ? 'arAlertsStyle' : ''} bg-[#fff] w-4/5 flex rounded-lg mt-5`}
        >
            <div className="p-8 w-full">
                <div className="a-title">
                    <h1 className="text-[24px] font-[1100] leading-[35px]">
                        {t.settings.alerts}
                    </h1>
                    <span className="text-[18px] font-[400] leading-[27px] opacity-[0.5]">{t.settings.accountTitle}</span>
                </div>
                <hr className="mt-3" />
                <div className="c-1 flex justify-between my-4">
                    <span className="text-[16px] font-[500] leading-[30px]">{t.settings.notification}</span>
                    <label htmlFor="toggle-1" className="inline-flex relative cursor-pointer">
                        <input
                            name="notification"
                            type="checkbox"
                            id="toggle-1"
                            className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <hr />
                <div className="c-1 flex justify-between my-4">
                    <span className="text-[16px] font-[500] leading-[30px]">{t.settings.active}</span>
                    <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">View</a>
                </div>
                <hr />
                <div className="c-1 flex justify-between my-4">
                    <div className="flex flex-col justify-between w-[24rem]">
                        <span className="text-[16px] font-[500] leading-[30px]">{t.settings.disable}</span>
                        <span className="text-[16px] font-[400] leading-[27px] opacity-[0.5]">{t.settings.dMsg}</span>
                    </div>
                    <label htmlFor="toggle-2" className="inline-flex relative cursor-pointer">
                        <input
                            name="notification"
                            type="checkbox"
                            id="toggle-2"
                            className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </section>
    )
}
export default Alerts;