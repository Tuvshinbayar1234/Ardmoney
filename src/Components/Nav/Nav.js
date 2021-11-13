import React from "react";
import Hamburger from "./Hamburger";

const Nav = () =>{
    return(
        <div className="bg-black relative` sm:fixed py-5 pb-5 bg-colors-ardm-black w-full">
            <div className="container mx-auto flex">
                <div className="container mx-auto flex justify-between">
                    <h1 className="text-white">
                        Logo
                    </h1>
                    <Hamburger />
                </div>
                <div className="flex space-x-16 font-bold text-white hidden sm:block">
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