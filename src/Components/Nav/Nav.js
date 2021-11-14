import React from "react";
import Hamburger from "./Hamburger";
import Logo from '../../assets/logo.png'

const Nav = () =>{
    return(
        <div className="bg-black py-5 pb-5 bg-colors-ardm-black fixed w-full z-10">
            <div className="container mx-auto flex justify-between w-full h-full">
                <div className="container mx-auto items-center flex">
                    <img src={Logo} />
                    <Hamburger />
                </div>
                <div className="flex w-full flex-row space-x-3 font-bold text-white hidden xl:block">
                    <a href="#Res" className=" hover:text-yellow-200">Resolving Dex Issues</a>
                    <a href="#What" className="hover:text-yellow-200">What is Ardmoney</a>
                    <a href="#Road" className="hover:text-yellow-200">RoadMap</a>
                    <a href="#Eco" className="hover:text-yellow-200">Eco System</a>
                    <a href="#Work" className="hover:text-yellow-200">Work Team</a>
                    <a href="#Our" className="hover:text-yellow-200">OurVision</a>
                    <a href="#FAQ" className="hover:text-yellow-200">FAQ</a>
                </div>
            </div>
            
        </div>
    )
}

export default Nav