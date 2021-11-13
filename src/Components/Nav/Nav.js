import React from "react";
import Hamburger from "./Hamburger";
import Logo from '../../assets/logo.png'

const Nav = () =>{
    return(
        <div className="bg-black relative` xl:fixed py-5 pb-5 bg-colors-ardm-black w-full">
            <div className="container mx-auto flex">
                <div className="container mx-auto flex justify-between">
                    <img src={Logo} />
                    <Hamburger />
                </div>
                <div className="flex space-x-16 font-bold text-white hidden xl:block">
                    <a className="">adobe</a>
                    <a className="">adobe</a>
                    <a className="">adobe</a>
                    <a className="">adobe</a>
                    <a className="">adobe</a>
                    <a className="">adobe</a>
                </div>
            </div>
            
        </div>
    )
}

export default Nav