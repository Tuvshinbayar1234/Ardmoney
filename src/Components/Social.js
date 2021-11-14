import react from "react";
import {FaTwitter, FaInstagram , FaFacebookF, FaWhatsapp, FaDiscord} from 'react-icons/fa'

const Socials = () =>{ 
    return(
        <div className="w-full h-full py-12" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center xl:flex-row">
                        <div className="flex justify-center mt-10 xl:mt-0 space-x-4">
                            <a href="#" target="_blank">
                                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full cursor-pointer xl:w-16 xl:h-16 hover:bg-red-700">
                                    <FaTwitter className="w-8 h-8 xl:w-6/12 xl:h-3/6 " color="white" />
                                </div>
                            </a>
                            <a href="#" target="_blank">
                                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full cursor-pointer xl:w-16 xl:h-16 hover:bg-red-700">
                                    <FaInstagram className="w-8 h-8 xl:w-6/12 xl:h-3/6" color="white" />
                                </div>
                            </a>
                            <a href="#" target="_blank">
                                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full cursor-pointer xl:w-16 xl:h-16 hover:bg-red-700">
                                    <FaFacebookF className="w-8 h-8 xl:w-6/12 xl:h-3/6" color="white" />
                                </div>
                            </a>
                            <a href="#" target="_blank">
                                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full cursor-pointer xl:w-16 xl:h-16 hover:bg-red-700">
                                    <FaWhatsapp className="w-8 h-8 xl:w-6/12 xl:h-3/6" color="white" />
                                </div>
                            </a>
                            <a href="#" target="_blank">
                                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full cursor-pointer xl:w-16 xl:h-16 hover:bg-red-700">
                                    <FaDiscord className="w-8 h-8 xl:w-6/12 xl:h-3/6" color="white" />
                                </div>
                            </a>
                        </div>
                        <div>
                        
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Socials;
