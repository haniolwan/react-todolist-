import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTranslations } from "../../redux/feature/i18nSlice";
import { ChangePassword } from "../common";
import './style.scss';

const Security = () => {
    const [showChangePasswordModal, setShowPasswordModal] = useState(false);

    const showPasswordModal = (event) => {
        event.preventDefault();
        setShowPasswordModal(true);
    }
    const { i18n: { locale } } = useSelector((state) => state)
    const t = useSelector(selectTranslations)

    return (
        <section className={`${locale === 'ar' ? 'arSecurityStyle' : ''} bg-[#fff] w-4/5 flex rounded-lg mt-5`}>
            <div className="container p-8 w-full">
                <div className="t-head">
                    <h1 className="text-[24px] font-[1100] leading-[35px]">
                        {t.settings.security}
                    </h1>
                    <span className="text-[18px] font-[400] leading-[27px] opacity-[0.5]">{t.settings.accountTitle}</span>
                </div>
                <hr className="mt-3" />
                <div className="c-1 flex justify-between my-4">
                    <span className="text-[16px] font-[500] leading-[30px]">{t.settings.password}</span>
                    <a onClick={showPasswordModal} href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">{t.settings.change}</a>
                </div>
                <hr />
                <div className="c-2 flex justify-between my-4">
                    <span className="text-[16px] font-[500] leading-[30px]">{t.settings.question}</span>
                    <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">{t.settings.change}</a>
                </div>
            </div>
            <ChangePassword show={showChangePasswordModal} setShow={setShowPasswordModal} />
        </section>
    )
}
export default Security;