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
            <div className="xl:w-6/12 w-9/12">
                <h1 className="mt-10 text-2xl font-semibold text-white">{temp[0].title}</h1>
                <h1 className="mt-10 text-white xl:w-4/12">{temp[0].data}</h1>
            </div>
        )
    }

    return(
        <div className="w-full h-full py-8" style={{backgroundColor: '#1F1E29'}}>
            <div className="container mx-auto">
                <div className=" flex justify-around flex-col-reverse xl:flex-row">
                    <div className="flex justify-center items-center">
                        <img src={Eco} />
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className="text-4xl text-white">Ecosystem</h1>
                        </div>
                        <div className="flex space-x-16 mt-10">
                            <h1 className="cursor-pointer hidden xl:block hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(1)}>High gas fees</h1>
                            <h1 className="cursor-pointer hidden xl:block hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(2)}>High gas fees</h1>
                            <h1 className="cursor-pointer hidden xl:block hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(3)}>High gas fees</h1>
                        </div>
                        <div className="flex justify-center items-center ml-10 block xl:hidden">
                    
                            <div onClick={() => setActiveSection(1)} className="cursor-pointer flex block xl:hidden w-20 h-6 rounded-xl bg-yellow-600 justify-center items-center">
                                <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                            </div>
                            <div className="w-12 h-1 bg-yellow-600"></div>
                            <div onClick={() => setActiveSection(2)} className="cursor-pointer flex block xl:hidden w-20 h-6 rounded-xl bg-yellow-600 justify-center items-center">
                                <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                            </div>
                            <div className="w-12 h-1 bg-yellow-600"></div>
                            <div onClick={() => setActiveSection(3)} className="flex block xl:hidden w-20 h-6 rounded-xl cursor-pointer bg-yellow-600 justify-center items-center">
                                <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                            </div>
                            
                        </div>
                        <div className="flex flex-col hidden xl:block">
                            {
                                findActiveData(activeSection)
                            }
                        </div>
                        {/* <div className='block xl:hidden absolute m-4 w-72 h-24 rounded-tl-xl border-t-2 border-l-2 border-yellow-600' style={{top:'311%', zIndex: '0'}}></div> */}
                        <div className="flex justify-between mb-20 block xl:hidden">
                            <div className="shadow-2xl border-l-2 mx-5 mt-10 rounded-3xl xl:border-none xl:shadow-none xl:ml-0 xl:mt-0">
                            {
                                findActiveData(activeSection)
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem