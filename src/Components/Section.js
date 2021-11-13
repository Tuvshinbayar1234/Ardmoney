import react from "react";
import Coin from '../assets/ardmcoin.png'


const Section = () => {
    return(
        <div className=" bg-gray-600" style={{backgroundImage: `url(${Coin})`, backgroundSize: '100% 100%'}}>
            <div className="container mx-auto py-72 flex flex-col">
                <h1 className="font-bold italic text-5xl w-2/4 text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="font-medium mt-10 w-1/3 text-xl text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa dolorem officiis similique, dignissimos animi quos repellendus explicabo nihil doloribus.
                </p>
                <div className=" w-60 h-11 bg-red-50 text-center flex justify-center items-center rounded-lg mt-10">
                    <a href="#">White paper</a>
                </div>
            </div>
        </div>
    )
}

export default Section