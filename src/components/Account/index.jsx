import google from './../../assets/google.svg';

const Account = () => {

    return (
        <>
            <section className="bg-[#fff] w-4/5 flex rounded-lg mt-5">
                <div className="p-8 w-full">
                    <h1 className="text-[24px] font-[1100] leading-[35px]">
                        Account
                    </h1>
                    <span className="text-[18px] font-[400] leading-[27px] opacity-[0.5]">Manage your account information settings</span>
                    <hr className="mt-3" />
                    <div className="flex justify-between my-4">
                        <div className="flex justify-between w-[22rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">Language</span>
                            <span className="text-[16px] font-[400] leading-[30px]">English</span>
                        </div>
                        <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">Change</a>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <div className="flex justify-between w-[24rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">Date</span>
                            <span className="text-[16px] font-[400] leading-[30px]">{new Date().toLocaleString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}</span>
                        </div>
                        <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">Change</a>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <div className="flex justify-between w-[38rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">Time zone</span>
                            <span className="text-[16px] font-[400] leading-[30px]">Time zone in Jerusalem, Palestine (GMT+3)</span>
                        </div>
                        <a href="/" className="text-[16px] font-[400] leading-[30px] no-underline hover:underline text-[#40A1FC]">Change</a>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-4 items-center">
                        <div className="flex flex-col w-[38rem]">
                            <span className="text-[16px] font-[500] leading-[30px]">Linked Accounts</span>
                            <span className="text-[16px] font-[400] leading-[20px] opacity-[0.5]">
                                We use this to let you sign in and organize your tasks
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
                            Unlink account
                        </button>
                    </div>
                </div>
            </section></>
    )

}


export default Account;