import react, {useState} from "react";
import styles from './index.module.css';

const Section4 = () => {

    const [click , setClick] = useState(1)

    const dummy = [
        {
            id: 1,
            title: 'Resolving dex issues',
            data: "*ARDM токен нэвтрүүлэлт",
            list: '*SPL, ERC20, BEP20 хувилбарууд',
            list2: '*SPL, ERC20, BEP20 хувилбарууд',
            list3: '*SPL, ERC20, BEP20 хувилбарууд',
            list4: '*SPL, ERC20, BEP20 хувилбарууд',
            list5: '*SPL, ERC20, BEP20 хувилбарууд',
            list6: '*SPL, ERC20, BEP20 хувилбарууд',
            list7: '*SPL, ERC20, BEP20 хувилбарууд',
        },
        {
            id: 2,
            title: 'Resolving dex issues 2',
            // data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!2",
            list: '*SPL, ERC20, BEP20 хувилбарууд',
            list2: '*SPL, ERC20, BEP20 хувилбарууд',
            list3: '*SPL, ERC20, BEP20 хувилбарууд',
            list4: '*SPL, ERC20, BEP20 хувилбарууд',
            list5: '*SPL, ERC20, BEP20 хувилбарууд',
            list6: '*SPL, ERC20, BEP20 хувилбарууд',
            list7: '*SPL, ERC20, BEP20 хувилбарууд',
            list8: '*SPL, ERC20, BEP20 хувилбарууд',
            list9: '*SPL, ERC20, BEP20 хувилбарууд',
            list10: '*SPL, ERC20, BEP20 хувилбарууд',
        },
        {
            id: 3,
            title: 'Resolving dex issues 3',
            // data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!3",
            list: '*SPL, ERC20, BEP20 хувилбарууд',
            list2: '*SPL, ERC20, BEP20 хувилбарууд',
            list3: '*SPL, ERC20, BEP20 хувилбарууд',
            list4: '*SPL, ERC20, BEP20 хувилбарууд',
            list5: '*SPL, ERC20, BEP20 хувилбарууд',
            list6: '*SPL, ERC20, BEP20 хувилбарууд',
            list7: '*SPL, ERC20, BEP20 хувилбарууд',
            list8: '*SPL, ERC20, BEP20 хувилбарууд',
            list9: '*SPL, ERC20, BEP20 хувилбарууд',
            list10: '*SPL, ERC20, BEP20 хувилбарууд',
            list11: '*SPL, ERC20, BEP20 хувилбарууд',
            list12: '*SPL, ERC20, BEP20 хувилбарууд',
            list13: '*SPL, ERC20, BEP20 хувилбарууд',
            list14: '*SPL, ERC20, BEP20 хувилбарууд',
            list15: '*SPL, ERC20, BEP20 хувилбарууд',
            list16: '*SPL, ERC20, BEP20 хувилбарууд',
            list17: '*SPL, ERC20, BEP20 хувилбарууд',
            list18: '*SPL, ERC20, BEP20 хувилбарууд',
        }
    ] 

    const HandleClick = (id) => {
        let temp = dummy.filter(singleData => singleData.id == id)

        return (
            <div className="mb-5 ml-2">
                <h1 className="mt-2 text-2xl font-semibold text-yellow-400 mx-1.5">{temp[0].title}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].data}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list2}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list3}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list4}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list5}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list6}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list7}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list8}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list9}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list10}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list11}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list12}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list13}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list14}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list15}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list16}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list17}</h1>
                <h1 className="mt-2 text-sm text-white mx-1.5">{temp[0].list18}</h1>
            </div>
        )
    }
    

    return(
        <div className="h-fulll w-full py-30 pb-30" style={{backgroundColor: '#1C1B24'}}>
            <h1 className="text-white font-semibold text-center text-2xl xl:text-6xl xl:py-20 mb-10">АрдМааний төлөвлөгөө</h1>
            <div className="container mx-auto relative xl-top-52 w-full">
                <div className="flex justify-around items-center">
                    <div className="hidden xl:block">
                        <div className="flex flex-row justify-center items-center">
                            <svg width="187" height="1108" viewBox="0 0 187 1108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_di_257_14)">
                                    <path d="M3 0V250C3 283.69 30.3106 311 64 311H117.5C151.189 311 178.5 338.311 178.5 372V1102.5" stroke="#F9B74B" stroke-width="5"/>
                                </g>
                                    <circle className="cursor-pointer" onClick={() => setClick(1)} cx="179.5" cy="403.5" r="6" fill="#E68E00" stroke="white" stroke-width="3"/>
                                    <circle className="cursor-pointer" onClick={() => setClick(2)} cx="179.5" cy="529.5" r="6" fill="#E68E00" stroke="white" stroke-width="3"/>
                                    <circle className="cursor-pointer" onClick={() => setClick(3)} cx="179.5" cy="664.5" r="6" fill="#E68E00" stroke="white" stroke-width="3"/>
                                    <defs>
                                        <filter id="filter0_di_257_14" x="0.5" y="0" width="185.5" height="1107.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dx="4" dy="4"/>
                                            <feGaussianBlur stdDeviation="0.5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_257_14"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_257_14" result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dx="1" dy="1"/>
                                            <feGaussianBlur stdDeviation="0.5"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_257_14"/>
                                        </filter>
                                    </defs>
                                </svg>
                            <div className="flex flex-col justify-between space-y-28 ml-10 mt-2 mb-12">
                                <h1 onClick={() => setClick(1)} className="text-white cursor-pointer hover:text-yellow-500 font-semibold border-b-2 hover:border-yellow-200 border-yellow-500">hello</h1>
                                <h1 onClick={() => setClick(2)} className="text-white cursor-pointer font-semibold border-b-2 hover:border-yellow-200 border-yellow-500">hello</h1>
                                <h1 onClick={() => setClick(3)} className="text-white cursor-pointer font-semibold border-b-2 hover:border-yellow-200 border-yellow-500">hello</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col block xl:hidden mr-3">
                            <div className="flex justify-center items-center ml-10 block xl:hidden ">
                                <div onClick={() => setClick(1)} className="cursor-pointer flex block xl:hidden w-20 h-6 rounded-xl justify-center items-center" style={{backgroundColor:'#41404F'}}>
                                    <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                                </div>
                                <div className="w-6 h-1" style={{backgroundColor:'#41404F'}}></div>
                                <div onClick={() => setClick(2)} className="cursor-pointer flex block xl:hidden w-20 h-6 rounded-xl justify-center items-center" style={{backgroundColor:'#41404F'}}>
                                    <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                                </div>
                                <div className="w-6 h-1" style={{backgroundColor:'#41404F'}}></div>
                                <div onClick={() => setClick(3)} className="flex block xl:hidden w-20 h-6 rounded-xl cursor-pointer justify-center items-center" style={{backgroundColor:'#41404F'}}>
                                    <h1 className="cursor-pointer text-yellow-200 text-center">DEA</h1>
                                </div>
                            </div>
                            <div className="shadow-2xl border-l-2 border-t-2 w-10/12 border-gray-600 mx-10 mt-10 rounded-3xl xl:border-none xl:shadow-none xl:ml-0 xl:mt-0">
                                {
                                    HandleClick(click)
                                }
                            </div>
                    </div>
                    {/* <div className='block xl:hidden absolute m-4 w-72 h-24 rounded-tl-xl border-t-2 border-l-2 border-yellow-600 mr-20' style={{top:'415%'}}></div> */}
                    <div className="hidden xl:block">
                        <div className="flex border-l p-20 shadow-2xl border-t border-gray-500 rounded-3xl" style={{backgroundColor: '#1C1B24'}}>
                            {
                                HandleClick(click)
                            }
                        </div>
                    </div>   
                </div>
                
            </div>
        </div>
    )
}


export default Section4