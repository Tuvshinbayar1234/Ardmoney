import react from "react";
import {FaTwitter, FaInstagram , FaFacebookF, FaWhatsapp, FaDiscord} from 'react-icons/fa'

const Socials = () =>{ 
    return(
        <div className="w-full h-full py-8" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-semibold">Socials</h1>
                </div>
                        
                    <div className="flex xl:flex-row flex-col justify-center mt-10 items-center">
                        
                        <div className="flex justify-center mt-10 xl:mt-0 space-x-4">
                            <div className="xl:w-16 cursor-pointer xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaTwitter className="xl:w-6/12 xl:h-3/6 w-8 h-8 " color="white" />
                            </div>
                            <div className="xl:w-16 cursor-pointer xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaInstagram className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                            <div className="xl:w-16 cursor-pointer xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaFacebookF className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                            <div className="xl:w-16 cursor-pointer xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaWhatsapp className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                            <div className="xl:w-16 cursor-pointer xl:h-16 w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center">
                                <FaDiscord className="xl:w-6/12 xl:h-3/6 w-8 h-8" color="white" />
                            </div>
                        
                        </div>
                        <div>
                        
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Socials;