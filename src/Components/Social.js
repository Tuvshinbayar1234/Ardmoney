import react from "react";
import {FaTwitter, FaInstagram , FaFacebookF, FaWhatsapp, FaDiscord} from 'react-icons/fa'

const Socials = () =>{ 
    return(
        <div className="w-full h-full py-8" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-semibold">Socials</h1>
                </div>
                <div className="">
                    <h1 className="text-2xl text-white text-right mr-72 mb-10 mt-36">SUBSCRIBE TO OUR NEWSLETTER</h1>
                </div>
                
                    <div className="flex justify-evenly">
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex justify-center items-center">
                            <FaTwitter size={40} color="white" />
                        </div>
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex justify-center items-center">
                            <FaInstagram size={40} color="white" />
                        </div>
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex justify-center items-center">
                            <FaFacebookF size={40} color="white" />
                        </div>
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex justify-center items-center">
                            <FaWhatsapp size={40} color="white" />
                        </div>
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex justify-center items-center">
                            <FaDiscord size={40} color="white" />
                        </div>
                        <div>
                        <form class="m-4 flex">
                            <input class="rounded-l-3xl p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-96" placeholder="Enter your email"/>
                            <button class="px-8 rounded-r-3xl bg-yellow-600  text-gray-800 font-bold p-4 uppercase border-yellow-600 border-t border-b border-r">Subscribe</button>
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Socials;