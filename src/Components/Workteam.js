import react, {useState} from "react";
import {FaTwitter, FaInstagram, FaFacebookF, FaWhatsapp, FaDiscord, FaLinkedinIn} from 'react-icons/fa'
import Team from "../assets/team.png"
import Eegii from "../assets/eegii.jpeg"
import Tseku from "../assets/tseku.jpeg"
import Anhaa from "../assets/anhaa.jpeg"
import Orgil from "../assets/orgil.jpeg"
import Tulga from "../assets/tulga.jpeg"
import Chuky from "../assets/chuky.jpeg"
import Od from "../assets/od.jpeg"


import Zolboo from "../assets/team/cryptopuujin/zolboo.jpg"
import EnkhUliral from "../assets/team/cryptopuujin/Enkh-Uliral.jpg"
import ChinTugsh from "../assets/team/cryptopuujin/Chintushig.jpg"
import NarinGarig from "../assets/team/cryptopuujin/Garig.jpg"




const Workteam = () => {

  const [showMore, setShowMore] = useState(false);

  const member = [

    <div className="container mx-auto">
      <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5">
        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={Eegii} />
          <h1 className="mt-5 text-xl text-white">М.Энх-Амгалан</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Блокчэйн зөвлөх</p>

        </div>
        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={Eegii} />
          <h1 className="mt-5 text-xl text-white">М.Энх-Амгалан</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Блокчэйн зөвлөх</p>

        </div>
        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={Eegii} />
          <h1 className="mt-5 text-xl text-white">М.Энх-Амгалан</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Блокчэйн зөвлөх</p>

        </div>

        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={Chuky} />
          <h1 className="mt-5 text-xl text-white">Д. Чадраабал</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Блокчэйн зөвлөх</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={Anhaa} />
          <h1 className="mt-5 text-xl text-white">Д. Анхбаясгалан</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Блокчэйн зөвлөх</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={EnkhUliral} />
          <h1 className="mt-5 text-xl text-white">М. Энx-Улирал</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Co-Founder at CryptoPuujin</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={Zolboo} />
          <h1 className="mt-5 text-xl text-white">Э. Золбоо</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Co-Founder at CryptoPuujin</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={NarinGarig} />
          <h1 className="mt-5 text-xl text-white">Г. Нарангариг</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Head Developer at CryptoPuujin</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
          <img className="rounded-full w-44" src={ChinTugsh} />
          <h1 className="mt-5 text-xl text-white">Т. Чинтүшиг</h1>
          <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Chief People Officer at CryptoPuujin</p>
        </div>

      </div>
    </div>
  ];



  return (
    <div id="Work" className="w-full pb-5" style={{backgroundImage: `url(${Team})`, backgroundSize: '100% 100%'}}>
      <div className="container flex flex-col mx-auto py-36">
        <div className="mx-2.5 pb-20 lg:pl-16">
          <h1 className="relative mx-5 text-5xl font-bold text-white -left-20">Төслийн Баг</h1>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5">
            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={Eegii} />
              <h1 className="mt-5 text-xl text-white">М. Энх-Амгалан</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Төслийн удирдагч</p>

            </div>
            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={Od} />
              <h1 className="mt-5 text-xl text-white">Г.Мөнх-Од</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Блокчэйн хөгжүүлэгч</p>

            </div>
            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={Anhaa} />
              <h1 className="mt-5 text-xl text-white">Д. Анхбаясгалан</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Төслийн менежер</p>

            </div>
            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={Orgil} />
              <h1 className="mt-5 text-xl text-white">М. Энх-Улирал</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Төслийн менежер</p>

            </div>
            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={Orgil} />
              <h1 className="mt-5 text-xl text-white">А. Ундрал</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Төслийн менежер</p>
            </div>
          </div>
          <div className="flex mt-10 flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 hidden lg:block">
            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={EnkhUliral} />
              <h1 className="mt-5 text-xl text-white">М. Энx-Улирал</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Co-Founder at CryptoPuujin</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={Zolboo} />
              <h1 className="mt-5 text-xl text-white">Э. Золбоо</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Co-Founder at CryptoPuujin</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44" src={NarinGarig} />
              <h1 className="mt-5 text-xl text-white">Г. Нарангариг</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Head Developer at CryptoPuujin</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 rounded-xl">
              <img className="rounded-full w-44 h-44" src={ChinTugsh} style={{objectFit: 'cover'}} />
              <h1 className="mt-5 text-xl text-white">Т. Чинтүшиг</h1>
              <p className="mt-2 text-xs font-extrabold text-center text-white lg:font-extrabold lg:text-base">Chief People Officer at CryptoPuujin</p>
            </div>

          </div>

        </div>
        {
          showMore && member.map((item) =>
            <div className="">
              {item}
            </div>
          )
        }

        <div className="flex items-center justify-center block py-10 lg:hidden">
          <div onClick={() => setShowMore(!showMore)} className="flex items-center justify-center text-center bg-white cursor-pointer w-60 h-14 rounded-3xl hover:bg-blue-400 transition-all duration-200">
            <h1 className="font-bold text-black">Бусад гишүүд</h1>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Workteam;
