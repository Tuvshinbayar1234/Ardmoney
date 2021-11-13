import react, {useState} from "react";
import Cube from '../assets/cube.png'


const Section2 = () => {
    
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
            <div>
                <h1 className="mt-10 text-2xl font-semibold text-white">{temp[0].title}</h1>
                <h1 className="mt-10 text-white w-6/12">{temp[0].data}</h1>
            </div>
        )
    }
    
    return(
        <div className=" w-full h-full pb-20" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                <h1 className="text-center py-10 text-3xl font-bold text-white">Resolving DEX Issues</h1>
                <div className="flex w-6/12 space-x-16">
                    <h1 className="cursor-pointer hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(1)}>High gas fees</h1>
                    <h1 className="cursor-pointer hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(2)}>High gas fees</h1>
                    <h1 className="cursor-pointer hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(3)}>High gas fees</h1>
                </div>
                <div className="flex justify-between">
                    <div className="">
                    {
                        findActiveData(activeSection)
                    }
                    </div>
                    <div className="">
                        <img src={Cube} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;