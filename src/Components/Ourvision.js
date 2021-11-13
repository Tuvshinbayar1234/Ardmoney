import react from "react";
import Electric from '../assets/electric.png'

const Ourvision = () => {
    return(
        <div className="w-full h-full" style={{backgroundColor: '#1F1E29'}}>
            <div className="container mx-auto py-10">
                <div className="">
                    <h1 className="text-5xl mb-5 text-center font-semibold text-white">OurVision</h1>
                </div>
                <div className="flex justify-around items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img src={Electric} />
                        <h1 className="text-2xl font-semibold text-center text-white">
                            Хамгийн хурдан
                        </h1>
                        <p className=" w-6/12 text-center text-white mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore natus rerum assumenda! Sequi perspiciatis, excepturi voluptates inventore dolor itaque.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={Electric} />
                        <h1 className="text-2xl font-semibold text-center text-white">
                            Хамгийн хурдан
                        </h1>
                        <p className=" w-6/12 text-center text-white mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore natus rerum assumenda! Sequi perspiciatis, excepturi voluptates inventore dolor itaque.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={Electric} />
                        <h1 className="text-2xl font-semibold text-center text-white">
                            Хамгийн хурдан
                        </h1>
                        <p className=" w-6/12 text-center text-white mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore natus rerum assumenda! Sequi perspiciatis, excepturi voluptates inventore dolor itaque.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={Electric} />
                        <h1 className="text-2xl font-semibold text-center text-white">
                            Хамгийн хурдан
                        </h1>
                        <p className=" w-6/12 text-center text-white mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore natus rerum assumenda! Sequi perspiciatis, excepturi voluptates inventore dolor itaque.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourvision;