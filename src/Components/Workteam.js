import react,{useState} from "react";
import {FaTwitter, FaInstagram , FaFacebookF, FaWhatsapp, FaDiscord, FaLinkedinIn} from 'react-icons/fa'
import Team from "../assets/team.png"
import Eegii from "../assets/eegii.jpeg"
import Tseku from "../assets/tseku.jpeg"
import Anhaa from "../assets/anhaa.jpeg"
import Orgil from "../assets/orgil.jpeg"
import Tulga from "../assets/tulga.jpeg"
import Chuky from "../assets/chuky.jpeg"
import Od from "../assets/od.jpeg"


const Workteam = () => { 
    
    const [showMore, setShowMore] = useState(false);

    const member = [

        <div className="container mx-auto">
            <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5">
                <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                    <img className="w-44 rounded-full" src={Eegii} />
                    <h1 className="text-xl mt-5 text-white">М.Энх-Амгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    
                </div>
                <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                    <img className="w-44 rounded-full" src={Eegii} />
                    <h1 className="text-xl mt-5 text-white">М.Энх-Амгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    
                </div>
                <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                    <img className="w-44 rounded-full" src={Eegii} />
                    <h1 className="text-xl mt-5 text-white">М.Энх-Амгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    
                </div>
                
                <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                    <img className="w-44 rounded-full" src={Chuky} />
                    <h1 className="text-xl mt-5 text-white">Д. Чадраабал</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    
                </div>
                <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                    <img className="w-44 rounded-full" src={Anhaa} />
                    <h1 className="text-xl mt-5 text-white">Д. Анхбаясгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    
                </div>
            </div>
            
        </div>
    ];

    

    return(
        <div id="Work" className="w-full pb-5" style={{backgroundImage: `url(${Team})` , backgroundSize: '100% 100%'}}>
            <div className="container mx-auto flex flex-col">
                <div className="mx-2.5 lg:pl-16">
                    <h1 className="font-bold text-2xl xl:text-3xl mx-5 text-white">Төслийн баг</h1>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5">
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Eegii} />
                                <h1 className="text-xl mt-5 text-white">М. Энх-Амгалан</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн удирдагч</p>
                                
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Od} />
                                <h1 className="text-xl mt-5 text-white">Г.Мөнх-Од</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн хөгжүүлэгч</p>
                                
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Anhaa} />
                                <h1 className="text-xl mt-5 text-white">Д. Анхбаясгалан</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">М. Энх-Улирал</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">А. Ундрал</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                
                            </div>
                        </div>
                        <div className="flex mt-10 flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 hidden lg:block">
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Tulga} />
                                <h1 className="text-xl mt-5 text-white">А. Амартүвшин</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн удирдагч</p>
                                
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Od} />
                                <h1 className="text-xl mt-5 text-white">Т. Бумцэнд</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн хөгжүүлэгч</p>
                                
                            </div>
                            
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">М. Болортоль</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">Г. Ууганбат</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center mt-5">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">Г. Ууганбат</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                
                            </div>
                        </div>
                </div>
                {
                    showMore && member.map((item)=> 
                    <div className="">
                        {item}
                    </div>
                    )
                }
                
                <div className="flex items-center justify-center py-10 block lg:hidden">
                    <div onClick={() => setShowMore(!showMore)} className="bg-white w-60 text-center items-center flex justify-center h-14 rounded-3xl hover:bg-blue-400 transition-all duration-200 cursor-pointer">
                        <h1 className="font-bold text-black">Бусад гишүүд</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Workteam;
