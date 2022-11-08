import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useClickOutside from '../../hooks/useOnClickOutside';
import google from './../../assets/google.svg';
import { selectTranslations, setLangAsync, setLanguage } from '../../redux/feature/i18nSlice';
import './style.scss';

const Account = () => {

    const state = useSelector((state) => state.i18n)
    const [show, setShow] = useState();
    const dispatch = useDispatch();

    const localRef = useRef();
    useClickOutside(localRef, () => setShow(false))
    
    const { i18n: { locale } } = useSelector((state) => state)
    const t = useSelector(selectTranslations)

    return (
        <>
            <section className={`${locale === 'ar' ? 's-styles' : ''} bg-[#fff] w-4/5 flex rounded-lg mt-5`}
            >
                <div className="p-8 w-full">
                    <div className="s-head">
                        <h1 className="text-[24px] font-[1100] leading-[35px]">
                            {t.settings.account}
                        </h1>
                        <span className="text-[18px] font-[400] leading-[27px] opacity-[0.5]">{t.settings.accountTitle}</span>
                    </div>
                    <hr className="mt-3" />
                    <div className="c-1 flex justify-between my-4">
                        <div className="s-1 flex justify-between w-[22rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">{t.settings.language}
                            </span>
                            <span className="text-[16px] font-[400] leading-[30px]">{(locale) === 'en' ? 'English' : 'العربية'}</span>
                        </div>
                        <span
                            onClick={() => setShow((show) => !show)}
                            href="/"
                            id="dropdownDividerButton"
                            data-dropdown-toggle="dropdownDivider"
                            className={`${show && 'hidden'} text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]`}>{t.settings.change}</span>
                        <div ref={localRef}
                            id="dropdownDivider"
                            className={`${!show && 'hidden'} right-10  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                {
                                    Object.entries(state.supportedLang).map(([code, name]) => {
                                        return (
                                            <li key={code}>
                                                <a
                                                    onClick={
                                                        (event) => {
                                                            event.preventDefault();
                                                            dispatch(setLanguage(code))
                                                            dispatch(setLangAsync(code))
                                                        }
                                                    }
                                                    href="/"
                                                    className={`block py-2 px-4 dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-300 ${code === state.locale && 'bg-gray-200'} `}>{name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="c-2 flex justify-between my-4">
                        <div className="s-2 flex justify-between w-[24rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">{t.settings.date}</span>
                            <span className="text-[16px] font-[400] leading-[30px]">{new Date().toLocaleString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}</span>
                        </div>
                        <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">{t.settings.change}</a>
                    </div>
                    <hr />
                    <div className="c-3 flex justify-between my-4">
                        <div className="s-3 flex justify-between w-[38rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">{t.settings.timezone}</span>
                            <span className="text-[16px] font-[400] leading-[30px]">Time zone in Jerusalem, Palestine (GMT+3)</span>
                        </div>
                        <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">{t.settings.change}</a>
                    </div>
                    <hr />
                    <div className="c-4 flex justify-between mt-4 items-center">
                        <div className="s-4 flex flex-col w-[38rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">{t.settings.linkedAccounts}</span>
                            <span className="text-[16px] font-[400] leading-[20px] opacity-[0.5]">
                                {t.settings.accountDescription}
                            </span>
                            <div
                                type="button"
                                className="flex items-center my-5 w-[14rem] gap-3 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <img src={google} alt="google" />
                                Signed in with Google
                            </div>
                        </div>
                        <button
                            type="button"
                            className="text-[#40A1FC] bg-[#ECF6FF] hover:bg-[#b4d8f7] font-medium rounded-lg px-3 h-10 w-50">
                            {t.settings.unlinkAccount}
                        </button>
                    </div>
                </div>
            </section></>
    )

}


export default Account;