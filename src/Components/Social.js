import react from "react";
import {FaTwitter, FaInstagram , FaFacebookF, FaWhatsapp, FaDiscord} from 'react-icons/fa'

const Socials = () =>{ 
    return(
        <div className="w-full h-full py-8" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-semibold">Socials</h1>
                </div>
                        <div className="hidden xl:block">
                            <h1 className="xl:text-2xl mt-10 text-md text-center text-white mr-96 xl:text-right">SUBSCRIBE TO OUR NEWSLETTER</h1>
                        </div>
                    <div className="flex xl:flex-row flex-col justify-evenly items-center">
                        <div className="flex flex-col-reverse">
                        <div className="">
                            <h1 className="xl:text-2xl mt-10 xl:mt-0 text-md text-center text-white xl:text-right block xl:hidden">SUBSCRIBE TO OUR NEWSLETTER</h1>
                        </div>
                        <div className="flex justify-around mt-10 xl:mt-0 space-x-4">
                            <div className="xl:w-16 xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaTwitter className="xl:w-6/12 xl:h-3/6 w-8 h-8 " color="white" />
                            </div>
                            <div className="xl:w-16 xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaInstagram className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                            <div className="xl:w-16 xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaFacebookF className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                            <div className="xl:w-16 xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaWhatsapp className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                            <div className="xl:w-16 xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaDiscord className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                        </div>
                        </div>
                        <div>
                        <form class="m-4 flex hidden xl:block">
                            <input class="rounded-l-3xl p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-96" placeholder="Enter your email"/>
                            <button class="px-8 rounded-r-3xl bg-yellow-600  text-gray-800 font-bold p-4 uppercase border-yellow-600 border-t border-b border-r">Subscribe</button>
                        </form>
                        <div className="flex flex-col justify-center items-center mt-10 block xl:hidden">
                            <input class="rounded-3xl p-4 border-t mr-0 border-b border-l border-r text-gray-800 border-gray-200 bg-white w-72" placeholder="Enter your email"/>
                            <button class="px-8 mt-5 rounded-3xl bg-yellow-600  text-gray-800 font-bold p-4 uppercase border-yellow-600 border-t border-b border-r w-72">Subscribe</button>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Socials;