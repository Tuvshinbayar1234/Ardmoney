import react from "react";
import Coin from '../assets/ardmcoin.png'
import {FaArrowRight} from 'react-icons/fa'

const Section = () => {
    return(
        <div className="h-screen bg-gray-600" style={{backgroundImage: `url(${Coin})`, backgroundSize: '111%'}}>
            <div className="container flex flex-col justify-center h-full mx-12 pl-36 pb-28">
                <h1 className="hidden w-2/4 text-5xl italic font-bold text-white xl:block">
                Монголын анхны DAO төсөл
                </h1>
                <p className="hidden w-2/3 mt-10 text-lg text-white font-extralight xl:block">
                    Таны төвлөрсөн бус, бие даасан санхүүгийн оролцооны гарц    
                </p>
                <div className="hidden xl:block">
                <div className="flex items-center justify-center mt-10 text-center rounded-lg w-60 h-11 bg-red-50">
                    <a href="#" className="flex items-center justify-center font-extrabold tracking-wider text-center uppercase">Whitepaper <FaArrowRight className="flex items-center justify-center ml-6 text-sm font-thin" /></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Section
