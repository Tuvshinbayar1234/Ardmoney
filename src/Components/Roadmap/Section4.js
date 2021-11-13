import react, {useState} from "react";
import styles from './index.module.css';

const Section4 = () => {

    const [click , setClick] = useState(1)

    const dummy = [
        {
            id: 1,
            title: 'Resolving dex issues',
            data: "*ARDM токен нэвтрүүлэлт",
            list: '*SPL, ERC20, BEP20 хувилбарууд'
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

    const HandleClick = (id) => {
        let temp = dummy.filter(singleData => singleData.id == id)

        return (
            <div>
                <h1 className="mt-10 text-2xl font-semibold text-yellow-400 mx-1.5">{temp[0].title}</h1>
                <h1 className="mt-10 text-white mx-1.5">{temp[0].data}</h1>
                <h1 className="mt-10 text-white mx-1.5">{temp[0].lists}</h1>
                <h1 className="mt-10 text-white mx-1.5">{temp[0].lists}</h1>
                <h1 className="mt-10 text-white mx-1.5">{temp[0].lists}</h1>
            </div>
        )
    }
    

    return(
        <div className="h-fulll w-full py-30 pb-30" style={{backgroundColor: '#1C1B24'}}>
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">АрдМааний Төлөвлөгөө</h1>
                </div>
                <div className="flex justify-around p-20">
                    <div className="hidden xl:block">
                    <div className={styles.block}></div>
                    <div className={styles.block2}>
                        <div onClick={() => setClick(1)} className="flex">
                            <div className={`${styles.circle} hover:bg-red-100 cursor-pointer`}></div>
                            <h1 className=" top-14 left-auto -right-32 absolute cursor-pointer text-yellow-400">Эхний үе шат</h1>
                        </div>
                        <div onClick={() => setClick(2)} className="">
                            <div className={`${styles.circle2} hover:bg-red-100`}></div>
                            <h1 className=" top-48 left-auto -right-36 absolute cursor-pointer text-yellow-400">Хоёр дахь үе шат</h1>
                        </div>
                        <div onClick={() => setClick(3)} className="">
                            <div className={`${styles.circle3} hover:bg-red-100`}></div>
                            <h1 className="top-80 left-auto -right-40 absolute cursor-pointer text-yellow-400">Гурав дахь үе шат</h1>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col block xl:hidden">
                            <div className="flex justify-center items-center ml-10 block xl:hidden">
                                <div onClick={() => setClick(1)} className="cursor-pointer flex block xl:hidden w-20 h-6 rounded-xl bg-yellow-600 justify-center items-center">
                                    <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                                </div>
                                <div className="w-12 h-1 bg-yellow-600"></div>
                                <div onClick={() => setClick(2)} className="cursor-pointer flex block xl:hidden w-20 h-6 rounded-xl bg-yellow-600 justify-center items-center">
                                    <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                                </div>
                                <div className="w-12 h-1 bg-yellow-600"></div>
                                <div onClick={() => setClick(3)} className="flex block xl:hidden w-20 h-6 rounded-xl cursor-pointer bg-yellow-600 justify-center items-center">
                                    <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                                </div>
                            </div>
                            <div className="shadow-2xl border-l-2 mt-10 rounded-3xl xl:border-none xl:shadow-none xl:ml-0 xl:mt-0">
                                {
                                    HandleClick(click)
                                }
                            </div>
                    </div>
                    {/* <div className='block xl:hidden absolute m-4 w-72 h-24 rounded-tl-xl border-t-2 border-l-2 border-yellow-600 mr-20' style={{top:'203%'}}></div> */}
                    <div className="hidden xl:block shadow-2xl rounded-2xl w-4/12 h-96 mt-28" style={{backgroundColor: '#1C1B24'}}>
                        {
                            HandleClick(click)
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Section4