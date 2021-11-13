import react,{useState} from "react";
import Eco from '../assets/eco.png'

const Ecosystem = () => {

    const [activeSection, setActiveSection] = useState(1);

    const dummy = [
        {
            id: 1,
            title: 'Resolving dex issues',
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!1"
        },
        {
            id: 2,
            title: 'Resolving dex issues 2',
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!2"
        },
        {
            id: 3,
            title: 'Resolving dex issues 3',
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!3"
        }
    ] 

    const findActiveData = (id) => {
        let temp = dummy.filter(singleData => singleData.id == id)

        return (
            <div className="w-6/12">
                <h1 className="mt-10 text-2xl font-semibold text-white">{temp[0].title}</h1>
                <h1 className="mt-10 text-white w-4/12">{temp[0].data}</h1>
            </div>
        )
    }

    return(
        <div className="w-full h-full py-8" style={{backgroundColor: '#1F1E29'}}>
            <div className="container mx-auto">
                <div className=" flex justify-around">
                    <div className="">
                        <img src={Eco} />
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className="text-4xl text-white">Ecosystem</h1>
                        </div>
                        <div className="flex space-x-16 mt-10">
                            <h1 className="cursor-pointer hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(1)}>High gas fees</h1>
                            <h1 className="cursor-pointer hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(2)}>High gas fees</h1>
                            <h1 className="cursor-pointer hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(3)}>High gas fees</h1>
                        </div>
                        <div className="flex flex-col">
                            {
                                findActiveData(activeSection)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem