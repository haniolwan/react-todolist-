import React from 'react'
import sideArrow from './../../../assets/left-arrow.svg';
import logo from './../../../assets/logo.svg';

import './style.css';
const CollabsedSidebar = ({ showCollabsed }) => {
    return (
        <aside className="h-screen flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 bg-gray-100 rounded">
            <a className="flex items-center justify-center mt-3" href="/">
                <img className="stroke-current w-9" src={logo} alt="side arrow" />
            </a>
            <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="/">
                <svg className="stroke-current" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9L11 2L20 9V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V9Z" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 22V12H14V22" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="/">
                <svg className="stroke-current" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M18 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V6C20 4.89543 19.1046 4 18 4Z" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 2V6" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 2V6" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 10H20" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </a>
            <a className="flex items-center justify-center w-12 h-12 mt-2 bg-gray-300 rounded" href="/">
                <svg className="stroke-current" width="22" height="24" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="">
                        <path d="M20 26V11" stroke="" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 26V2" stroke="" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 26V17" stroke="" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </a>
            <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="/">
                <svg className="stroke-current" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="">
                        <path d="M17 8C17 6.4087 16.3679 4.88258 15.2426 3.75736C14.1174 2.63214 12.5913 2 11 2C9.4087 2 7.88258 2.63214 6.75736 3.75736C5.63214 4.88258 5 6.4087 5 8C5 15 2 17 2 17H20C20 17 17 15 17 8Z" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.73 21C12.5542 21.3031 12.3019 21.5547 11.9982 21.7295C11.6946 21.9044 11.3504 21.9965 11 21.9965C10.6496 21.9965 10.3054 21.9044 10.0018 21.7295C9.69818 21.5547 9.44583 21.3031 9.27002 21" stroke="" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </a>
            <div className="flex flex-col items-center mt-2 border-t border-gray-300">
                <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="/">
                    <svg className="stroke-current" width="22" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="">
                            <path d="M11.5 14.0909C12.9309 14.0909 14.0909 12.9309 14.0909 11.5C14.0909 10.069 12.9309 8.90906 11.5 8.90906C10.0691 8.90906 8.90912 10.069 8.90912 11.5C8.90912 12.9309 10.0691 14.0909 11.5 14.0909Z" stroke="" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.8909 14.0909C17.7759 14.3514 17.7417 14.6403 17.7925 14.9205C17.8432 15.2007 17.9768 15.4592 18.1759 15.6627L18.2277 15.7145C18.3883 15.875 18.5157 16.0655 18.6026 16.2751C18.6896 16.4848 18.7343 16.7096 18.7343 16.9366C18.7343 17.1636 18.6896 17.3883 18.6026 17.598C18.5157 17.8077 18.3883 17.9982 18.2277 18.1586C18.0673 18.3192 17.8768 18.4466 17.6671 18.5336C17.4574 18.6205 17.2327 18.6652 17.0057 18.6652C16.7787 18.6652 16.5539 18.6205 16.3442 18.5336C16.1346 18.4466 15.9441 18.3192 15.7836 18.1586L15.7318 18.1068C15.5283 17.9077 15.2698 17.7742 14.9896 17.7234C14.7094 17.6726 14.4205 17.7069 14.16 17.8218C13.9046 17.9313 13.6867 18.1131 13.5333 18.3448C13.3798 18.5765 13.2975 18.848 13.2964 19.1259V19.2727C13.2964 19.7308 13.1144 20.1702 12.7905 20.4941C12.4665 20.818 12.0272 21 11.5691 21C11.111 21 10.6717 20.818 10.3477 20.4941C10.0238 20.1702 9.84182 19.7308 9.84182 19.2727V19.195C9.83513 18.9091 9.7426 18.6319 9.57626 18.3993C9.40992 18.1668 9.17745 17.9896 8.90909 17.8909C8.6486 17.7759 8.35965 17.7417 8.07949 17.7925C7.79933 17.8432 7.54081 17.9768 7.33727 18.1759L7.28545 18.2277C7.12504 18.3883 6.93454 18.5157 6.72485 18.6026C6.51516 18.6896 6.2904 18.7343 6.06341 18.7343C5.83642 18.7343 5.61165 18.6896 5.40197 18.6026C5.19228 18.5157 5.00178 18.3883 4.84136 18.2277C4.68077 18.0673 4.55337 17.8768 4.46644 17.6671C4.37952 17.4574 4.33478 17.2327 4.33478 17.0057C4.33478 16.7787 4.37952 16.5539 4.46644 16.3442C4.55337 16.1346 4.68077 15.9441 4.84136 15.7836L4.89318 15.7318C5.09228 15.5283 5.22584 15.2698 5.27664 14.9896C5.32744 14.7094 5.29314 14.4205 5.17818 14.16C5.0687 13.9046 4.88693 13.6867 4.65522 13.5333C4.42351 13.3798 4.152 13.2975 3.87409 13.2964H3.72727C3.26917 13.2964 2.82983 13.1144 2.50591 12.7905C2.18198 12.4665 2 12.0272 2 11.5691C2 11.111 2.18198 10.6717 2.50591 10.3477C2.82983 10.0238 3.26917 9.84182 3.72727 9.84182H3.805C4.09086 9.83513 4.3681 9.7426 4.60067 9.57626C4.83324 9.40992 5.01039 9.17745 5.10909 8.90909C5.22405 8.6486 5.25835 8.35965 5.20755 8.07949C5.15675 7.79933 5.02319 7.54081 4.82409 7.33727L4.77227 7.28545C4.61168 7.12504 4.48428 6.93454 4.39735 6.72485C4.31043 6.51516 4.26569 6.2904 4.26569 6.06341C4.26569 5.83642 4.31043 5.61165 4.39735 5.40197C4.48428 5.19228 4.61168 5.00178 4.77227 4.84136C4.93269 4.68077 5.12319 4.55337 5.33288 4.46644C5.54256 4.37952 5.76733 4.33478 5.99432 4.33478C6.22131 4.33478 6.44607 4.37952 6.65576 4.46644C6.86545 4.55337 7.05595 4.68077 7.21636 4.84136L7.26818 4.89318C7.47172 5.09228 7.73024 5.22584 8.0104 5.27664C8.29056 5.32744 8.57951 5.29314 8.84 5.17818H8.90909C9.16453 5.0687 9.38238 4.88693 9.53583 4.65522C9.68927 4.42351 9.77162 4.152 9.77273 3.87409V3.72727C9.77273 3.26917 9.95471 2.82983 10.2786 2.50591C10.6026 2.18198 11.0419 2 11.5 2C11.9581 2 12.3974 2.18198 12.7214 2.50591C13.0453 2.82983 13.2273 3.26917 13.2273 3.72727V3.805C13.2284 4.08291 13.3107 4.35442 13.4642 4.58613C13.6176 4.81783 13.8355 4.99961 14.0909 5.10909C14.3514 5.22405 14.6403 5.25835 14.9205 5.20755C15.2007 5.15675 15.4592 5.02319 15.6627 4.82409L15.7145 4.77227C15.875 4.61168 16.0655 4.48428 16.2751 4.39735C16.4848 4.31043 16.7096 4.26569 16.9366 4.26569C17.1636 4.26569 17.3883 4.31043 17.598 4.39735C17.8077 4.48428 17.9982 4.61168 18.1586 4.77227C18.3192 4.93269 18.4466 5.12319 18.5336 5.33288C18.6205 5.54256 18.6652 5.76733 18.6652 5.99432C18.6652 6.22131 18.6205 6.44607 18.5336 6.65576C18.4466 6.86545 18.3192 7.05595 18.1586 7.21636L18.1068 7.26818C17.9077 7.47172 17.7742 7.73024 17.7234 8.0104C17.6726 8.29056 17.7069 8.57951 17.8218 8.84V8.90909C17.9313 9.16453 18.1131 9.38238 18.3448 9.53583C18.5765 9.68927 18.848 9.77162 19.1259 9.77273H19.2727C19.7308 9.77273 20.1702 9.95471 20.4941 10.2786C20.818 10.6026 21 11.0419 21 11.5C21 11.9581 20.818 12.3974 20.4941 12.7214C20.1702 13.0453 19.7308 13.2273 19.2727 13.2273H19.195C18.9171 13.2284 18.6456 13.3107 18.4139 13.4642C18.1822 13.6176 18.0004 13.8355 17.8909 14.0909V14.0909Z" stroke="" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
                <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="/">
                    <svg className="stroke-current" width="22" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33333 21H4.11111C3.55121 21 3.01424 20.7776 2.61833 20.3817C2.22242 19.9858 2 19.4488 2 18.8889V4.11111C2 3.55121 2.22242 3.01424 2.61833 2.61833C3.01424 2.22242 3.55121 2 4.11111 2H8.33333" stroke="#DA1E28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.7222 16.7777L21 11.4999L15.7222 6.22217" stroke="#DA1E28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 11.5H8.33331" stroke="#DA1E28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
            <a className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="/"
                onClick={(event) => { event.preventDefault(); showCollabsed('full') }} >
                <img className="stroke-current w-7 side-arrow" src={sideArrow} alt="side arrow" />
            </a>
        </aside>

    )
}

export default CollabsedSidebar;