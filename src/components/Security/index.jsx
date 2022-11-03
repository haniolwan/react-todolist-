import { useState } from "react";
import { ChangePassword } from "../common";

const Security = () => {
    const [showChangePasswordModal, setShowPasswordModal] = useState(false);

    const showPasswordModal = (event) => {
        event.preventDefault();
        setShowPasswordModal(true);
    }
    return (
        <section className="bg-[#fff] w-4/5 flex rounded-lg mt-5">
            <div className="p-8 w-full">
                <h1 className="text-[24px] font-[1100] leading-[35px]">
                    Security
                </h1>
                <span className="text-[18px] font-[400] leading-[27px] opacity-[0.5]">Manage your account information settings</span>
                <hr className="mt-3" />
                <div className="flex justify-between my-4">
                    <div className="flex justify-between w-[22rem]">
                        <span className="text-[16px] font-[500] leading-[30px]">Password</span>
                    </div>
                    <a onClick={showPasswordModal} href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">Change</a>
                </div>
                <hr />
                <div className="flex justify-between my-4">
                    <div className="flex justify-between w-[24rem]">
                        <span className="text-[16px] font-[500] leading-[30px]">Security Question</span>
                    </div>
                    <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">Change</a>
                </div>
            </div>
            <ChangePassword show={showChangePasswordModal} setShow={setShowPasswordModal} />
        </section>
    )
}
export default Security;