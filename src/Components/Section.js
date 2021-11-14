import react from "react";
import Coin from '../assets/ardmcoin.png'
import {FaArrowRight} from 'react-icons/fa'

const Section = () => {
    return(
        <div className=" bg-gray-600 " style={{backgroundImage: `url(${Coin})`, backgroundSize: '100% 100% 100% 100%'}}>
            <div className="container mx-auto h-screen flex flex-col">
                <h1 className="font-bold italic text-5xl w-2/4 text-white hidden xl:block mt-80">
                Монголын анхны DAO төсөл
                </h1>
                <p className="font-medium mt-10 w-1/3 text-xl text-white hidden xl:block">
                    Таны төвлөрсөн бус, бие даасан санхүүгийн оролцооны гарц    
                </p>
                <div className="hidden xl:block">
                <div className=" w-60 h-11 bg-red-50 text-center flex justify-center items-center rounded-lg mt-10">
                    <a href="#" className="text-center flex items-center justify-center">Төсөлтэй танилцах <FaArrowRight className="flex justify-center items-center ml-6" /></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Section