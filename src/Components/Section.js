import react from "react";
import Coin from '../assets/ardmcoin.png'
import BigCoin from '../assets/big-coin.png'
import {FaArrowRight} from 'react-icons/fa'

const Section = () => {
  return (
    <div>
      <div className="hidden h-screen bg-gray-600 lg:block" style={{backgroundImage: `url(${Coin})`, backgroundSize: '111%'}}>
        <div className="container flex flex-col justify-center h-full mx-12 pl-36 pb-28">
          <h1 className="hidden w-2/4 text-5xl italic font-bold text-white xl:block">Монголын анхны DAO төсөл</h1>
          <p className="hidden w-2/3 mt-10 text-lg text-white font-extralight xl:block">Таны төвлөрсөн бус, бие даасан санхүүгийн оролцооны гарц.</p>

          <div className="hidden xl:block">
            <div className="flex items-center justify-center mt-10 text-center rounded-lg h-14 w-72 bg-red-50">
              <a href="/litepaper.pdf" className="flex items-center justify-center font-extrabold tracking-wider text-center uppercase">Урьдчилсан ТТЭЗҮ <FaArrowRight className="flex items-center justify-center ml-6 text-sm font-thin" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-600 lg:hidden py-60" style={{backgroundImage: `url(${Coin})`, backgroundSize: 'cover'}}>
        <div className="container flex flex-col h-full px-4 text-center">
          <h1 className="text-xl italic font-bold text-white">Монголын анхны DAO төсөл</h1>
          <p className="mt-10 text-lg text-white font-extralight">Таны төвлөрсөн бус, бие даасан санхүүгийн оролцооны гарц</p>
          <div className="flex justify-center mt-16">
            <img src={BigCoin} alt="coin-img" width="200px" height="200px" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section
