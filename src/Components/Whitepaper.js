import react from "react";
import {FaArrowRight} from 'react-icons/fa'

const Whitepaper = () => {
    return(
        <a href="/litepaper.pdf" className="block xl:hidden">
            <div className="w-full max-h-full py-4 bg-white">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="flex items-center justify-center text-2xl font-semibold text-black">Урьдчилсан ТТЭЗҮ <FaArrowRight className="flex items-center justify-center ml-6" /></h1>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Whitepaper
