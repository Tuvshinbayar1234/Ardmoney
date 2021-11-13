import react from "react";
import Vid from '../assets/Vid.gif'

const Section3 = () => {
    return(
        <div className="h-full w-full" style={{backgroundColor: '#1C1C2B'}}>
            <div className="container mx-auto py-8 pb-8">
                <div className="flex flex-row justify-between">
                    <div className="w-6/12">
                        <img src={Vid} alt=''/>
                    </div>
                    <div className="w-6/12 flex flex-col justify-center">
                        <h1 className="text-2xl text-white">Lorem ipsum dolor sit amet.</h1>
                        <p className="mt-5 w-9/12 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis cum doloribus neque dignissimos quasi in laborum provident voluptatibus debitis rerum soluta minima earum culpa ipsam ratione voluptatem rem, a tempora ea, illo beatae? Quam hic dignissimos reprehenderit expedita velit? Unde eos adipisci, earum natus quod iure asperiores. Veritatis, earum!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3