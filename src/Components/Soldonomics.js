import react from "react";
import Grapic from '../assets/grapic.png'

const Soldonomics = () => {
    return(
        <div className="w-full h-full py-8" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                <div className="">
                    <h1 className="text-4xl font-semibold text-center text-white">АрдМааний Тархалт</h1>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <img src={Grapic} />
                </div>
            </div>
        </div>
    )
}

export default Soldonomics;