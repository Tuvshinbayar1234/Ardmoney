import react from "react";
import Chart from '../assets/tokenomic_chart.png'

const Soldonomics = () => {
    return(
        <div className="w-full h-full py-32" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                <div className="">
                    <h1 className="pb-16 text-2xl font-semibold text-center text-white xl:text-6xl">АрдМааний Тархалт</h1>
                </div>
                <div className="flex items-center justify-center mx-5 mt-10">
                    <img src={Chart} />
                </div>
            </div>
        </div>
    )
}

export default Soldonomics;
