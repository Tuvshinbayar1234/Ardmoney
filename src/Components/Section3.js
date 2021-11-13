import react from "react";
import Vid from '../assets/Vid.gif'

const Section3 = () => {
    return(
        <div className="h-full w-full" style={{backgroundColor: '#1C1C2B'}}>
            <div className="container mx-auto py-8 pb-8">
                <div className="flex sm:flex-row flex-col justify-between">
                    <div className="sm:w-6/12">
                        <img src={Vid} className="w-96 sm:w-full" alt=''/>
                    </div>
                    <div className="sm:w-6/12 flex flex-col justify-center ">
                        <h1 className="sm:text-2xl text-white text-2xl">Lorem ipsum dolor sit amet.</h1>
                        <p className="mt-5 sm:w-9/12 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3