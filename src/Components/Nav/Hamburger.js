import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import { Disclosure } from '@headlessui/react';

import {FaAlignJustify} from 'react-icons/fa'

import { useTranslation } from 'react-i18next';

export default function Hamburger() {
    
    const [navOpen, setNavOpen] = useState(false);
    const { t, i18n, ready } = useTranslation('Hamburger');

    const handleToggle = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className="pl-4">
                <nav className="relative">
                    <div className="relative mr-5 xl:hidden">
                        <button onClick={handleToggle} className="flex items-center text-white">
                            <FaAlignJustify />
                        </button>
                    </div>
                </nav>
                <div className="navbar-menu">
                    <nav className={`z-50 fixed top-0 right-0 bottom-0 bg-black text-gray-300 flex flex-col w-full max-w-sm py-6 px-6 bg-dax-blue border-r overflow-y-auto  ${navOpen ? 'fixed right-0 transition-all duration-200 ease-in ' : 'fixed -right-full transition-all duration-200 ease-in '}`}>
                        <div className="relative flex justify-between xl:hidden">
                            <img src={Logo} />
                            <button onClick={handleToggle} className="flex items-center text-white">
                                <FaAlignJustify />
                            </button>
                        </div>
                        <div className="">
                            <ul className="mt-5">
                                <li className="mb-1">
                                    <a href="#Res">
                                        <div className="flex items-center w-full p-2 text-sm font-semibold text-white rounded cursor-pointer space-x-2">
                                            <div className="w-full">
                                                <Disclosure>
                                                    <div className="" onClick={handleToggle}>
                                                        <Disclosure.Button className="flex justify-between w-full py-1 text-sm font-medium text-left text-white ">
                                                            <span className="font-semibold">Resolving Dex Issues</span>
                                                        </Disclosure.Button>
                                                    </div>
                                                </Disclosure>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="#What">
                                    <div className="flex w-full p-4 text-sm font-semibold text-white rounded cursor-pointer space-x-3">
                                        <div className="w-full">
                                            <Disclosure>
                                                <div className="" onClick={handleToggle}>
                                                    <Disclosure.Button className="flex justify-between w-full py-1 text-sm font-medium text-left text-white ">
                                                        <span className="font-semibold">What is Ardmoney</span>
                                                    </Disclosure.Button>
                                                </div>
                                            </Disclosure>
                                        </div>
                                    </div>
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="#Road">
                                    <div className="flex w-full p-4 text-sm font-semibold text-white rounded cursor-pointer space-x-3">
                                        <div className="w-full">
                                            <Disclosure>
                                                <div className="" onClick={handleToggle}>
                                                    <Disclosure.Button className="flex justify-between w-full py-1 text-sm font-medium text-left text-white ">
                                                        <span className="font-semibold">RoadMap</span>
                                                    </Disclosure.Button>
                                                </div>
                                            </Disclosure>
                                        </div>
                                    </div>
                                    </a>
                                </li>  
                                <li className="mb-1">
                                    <a href="#Eco">
                                    <div className="flex w-full p-4 text-sm font-semibold text-white rounded cursor-pointer space-x-3">
                                        <div className="w-full">
                                            <Disclosure>
                                                <div className="" onClick={handleToggle}>
                                                    <Disclosure.Button className="flex justify-between w-full py-1 text-sm font-medium text-left text-white ">
                                                        <span className="font-semibold">Eco System</span>
                                                    </Disclosure.Button>
                                                </div>
                                            </Disclosure>
                                        </div>
                                    </div>
                                    </a>
                                </li>  
                                <li className="mb-1">
                                    <a href="#Work">
                                    <div className="flex w-full p-4 text-sm font-semibold text-white rounded cursor-pointer space-x-3">
                                        <div className="w-full">
                                            <Disclosure>
                                                <div className="" onClick={handleToggle}>
                                                    <Disclosure.Button className="flex justify-between w-full py-1 text-sm font-medium text-left text-white ">
                                                        <span className="font-semibold">Work Team</span>
                                                    </Disclosure.Button>
                                                </div>
                                            </Disclosure>
                                        </div>
                                    </div>
                                    </a>
                                </li>  
                                <li className="mb-1">
                                    <a href="#Our">
                                    <div className="flex w-full p-4 text-sm font-semibold text-white rounded cursor-pointer space-x-3">
                                        <div className="w-full">
                                            <Disclosure>
                                                <div className="" onClick={handleToggle}>
                                                    <Disclosure.Button className="flex justify-between w-full py-1 text-sm font-medium text-left text-white ">
                                                        <span className="font-semibold">OurVision</span>
                                                    </Disclosure.Button>
                                                </div>
                                            </Disclosure>
                                        </div>
                                    </div>
                                    </a>
                                </li>  
                                <li className="mb-1">
                                    <a href="#FAQ">
                                    <div className="flex w-full p-4 text-sm font-semibold text-white rounded cursor-pointer space-x-3">
                                        <div className="w-full">
                                            <Disclosure>
                                                <div className="" onClick={handleToggle}>
                                                    <Disclosure.Button className="flex justify-between w-full py-1 text-sm font-medium text-left text-white ">
                                                        <span className="font-semibold">FAQ</span>
                                                    </Disclosure.Button>
                                                </div>
                                            </Disclosure>
                                        </div>
                                    </div>
                                    </a>
                                </li>     
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>Copyright © Diverse Solutions</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

