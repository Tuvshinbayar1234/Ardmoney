import react,{useState} from "react";

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

        <div className="container mx-auto mt-10">
            <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 mt-10">
                <div className=" rounded-xl flex flex-col justify-center items-center ">
                    <img className="w-44 rounded-full" src={Eegii} />
                    <h1 className="text-xl mt-5 text-white">М.Энх-Амгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">Дайверс Солюшн ХХК, Гүйцэтгэх захирал</p>
                </div>
                <div className=" rounded-xl flex flex-col justify-center items-center ">
                    <img className="w-44 rounded-full" src={Eegii} />
                    <h1 className="text-xl mt-5 text-white">М.Энх-Амгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">Дайверс Солюшн ХХК, Гүйцэтгэх захирал</p>
                </div>
                <div className=" rounded-xl flex flex-col justify-center items-center ">
                    <img className="w-44 rounded-full" src={Eegii} />
                    <h1 className="text-xl mt-5 text-white">М.Энх-Амгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">Дайверс Солюшн ХХК, Гүйцэтгэх захирал</p>
                </div>
                
                <div className=" rounded-xl flex flex-col justify-center items-center ">
                    <img className="w-44 rounded-full" src={Chuky} />
                    <h1 className="text-xl mt-5 text-white">Д. Чадраабал</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-1.5">АРД ЭКС ХХК, Үйл ажиллагаа хариуцсан захирал</p>
                </div>
                <div className=" rounded-xl flex flex-col justify-center items-center ">
                    <img className="w-44 rounded-full" src={Anhaa} />
                    <h1 className="text-xl mt-5 text-white">Д. Анхбаясгалан</h1>
                    <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн зөвлөх</p>
                    <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white">АРД ЭКС ХХК, Технологи хариуцсан захирал</p>
                </div>
            </div>
            
        </div>
    ];

    

    return(
        <div id="team" className="w-full" style={{backgroundImage: `url(${Team})` , backgroundSize: '100% 100%'}}>
            <div className="container mx-auto flex flex-col">
                <div className="mx-2.5 lg:pl-16">
                    <h1 className="font-bold text-3xl py-14 text-white">Төслийн баг</h1>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5">
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Tulga} />
                                <h1 className="text-xl mt-5 text-white">С.Тулга</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн удирдагч</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-3.5">Монгол ДиФай ХХК, Гүйцэтгэх захирал</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Od} />
                                <h1 className="text-xl mt-5 text-white">Г.Мөнх-Од</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн хөгжүүлэгч</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white">Дайверс Солюшн ХХК, Технологи хариуцсан захирал</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">О. Мөнх-Оргил</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">АРД ЭКС ХХК, Бизнес хөгжлийн менежер</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">О. Мөнх-Оргил</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">АРД ЭКС ХХК, Бизнес хөгжлийн менежер</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">О. Мөнх-Оргил</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">АРД ЭКС ХХК, Бизнес хөгжлийн менежер</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 hidden lg:block">
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Tulga} />
                                <h1 className="text-xl mt-5 text-white">С.Тулга</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн удирдагч</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-3.5">Монгол ДиФай ХХК, Гүйцэтгэх захирал</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Od} />
                                <h1 className="text-xl mt-5 text-white">Г.Мөнх-Од</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Блокчэйн хөгжүүлэгч</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white">Дайверс Солюшн ХХК, Технологи хариуцсан захирал</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">О. Мөнх-Оргил</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">АРД ЭКС ХХК, Бизнес хөгжлийн менежер</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">О. Мөнх-Оргил</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">АРД ЭКС ХХК, Бизнес хөгжлийн менежер</p>
                            </div>
                            <div className=" rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5 text-white">О. Мөнх-Оргил</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-white">Төслийн менежер</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-white mx-0.5">АРД ЭКС ХХК, Бизнес хөгжлийн менежер</p>
                            </div>
                        </div>
                </div>
                {
                    showMore && member.map((item)=> 
                    <div>
                        {item}
                    </div>
                    )
                }
                
                <div className="flex items-center justify-center py-10 block lg:hidden">
                    <div onClick={() => setShowMore(!showMore)} className="bg-yellow-600 p-5 rounded-lg hover:bg-blue-400 transition-all duration-200 cursor-pointer">
                        <h1 className="font-bold text-white">Бусад гишүүд</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Workteam;
