import react from "react";
import {FaArrowRight} from 'react-icons/fa'

const Whitepaper = () => {
    return(
        <a href="#" className="block xl:hidden">
            <div className="w-full max-h-full py-4 bg-white">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl text-black font-semibold flex justify-center items-center">White paper <FaArrowRight className="flex justify-center items-center ml-6" /></h1>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Whitepaper