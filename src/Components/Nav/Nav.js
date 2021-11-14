import React from "react";
import Hamburger from "./Hamburger";
import Logo from '../../assets/logo.png'

const Nav = () => {
  let navTextStyle = `pl-1 lg:pl-4 hover:text-yellow-200`;

  return (
    <div className="fixed z-10 w-full py-8 bg-black bg-colors-ardm-black">
      <div className="flex justify-center lg:justify-between">
        <div className="flex items-center justify-center md:justify-start">
          <img src={Logo} className="relative lg:left-40" />
          <Hamburger />
        </div>
        <div className="hidden text-sm font-light tracking-normal text-white md:mr-12 lg:block">
          <a href="#Res" className={navTextStyle}>DAO гэж юу вэ?</a>
          <a href="#What" className={navTextStyle}>АрдМааний гэж юу вэ?</a>
          <a href="#Road" className={navTextStyle}>Төлөвлөгөө</a>
          <a href="#Eco" className={navTextStyle}>Экосистем</a>
          <a href="#Work" className={navTextStyle}>Баг</a>
          <a href="#FAQ" className={navTextStyle}>FAQ</a>
          <a href="/litepaper.pdf" className={navTextStyle}>Litepaper</a>
        </div>
      </div>

    </div>
  )
}

export default Nav
