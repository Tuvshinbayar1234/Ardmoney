import React from "react";
import Hamburger from "./Hamburger";
import Logo from '../../assets/logo.png'

const Nav = () =>{
    return(
        <div className="fixed z-10 w-full py-8 bg-black bg-colors-ardm-black">
            <div className="container flex justify-between w-full h-full px-5 mx-auto">
                <div className="container relative flex items-center mx-auto left-14">
                    <img src={Logo} />
                    <Hamburger />
                </div>
                <div className="flex flex-row justify-end w-full text-sm font-light tracking-normal text-white">
                    <a href="#Res" className="pl-4 hover:text-yellow-200">DAO гэж юу вэ?</a>
                    <a href="#What" className="pl-4 hover:text-yellow-200">АрдМааний гэж юу вэ?</a>
                    <a href="#Road" className="pl-4 hover:text-yellow-200">Төлөвлөгөө</a>
                    <a href="#Eco" className="pl-4 hover:text-yellow-200">Eco System</a>
                    <a href="#Work" className="pl-4 hover:text-yellow-200">Экосистем</a>
                    <a href="#Our" className="pl-4 hover:text-yellow-200">Баг</a>
                    <a href="#FAQ" className="pl-4 hover:text-yellow-200">FAQ</a>
                    <a href="#FAQ" className="pl-4 hover:text-yellow-200">Litepaper</a>
                </div>
            </div>
            
        </div>
    )
}

export default Nav
