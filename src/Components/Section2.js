import react, {useState} from "react";
import Cube from '../assets/bg3.png'


const Section2 = () => {
    
    const [activeSection, setActiveSection] = useState(1);

    const dummy = [
        {
            id: 1,
            title: 'Крипто хөрөнгөө хадгалах, зээл авах боломж.',
            data: "DEFI буюу төвлөрсөн бус санхүү нь хэрэглэгчдэд төвлөрсөн санхүүгийн үйлчилгээ үзүүлэгчийн оронд блокчэйн дээр орших ухаалаг гэрээгээр баталгаажин ажилладаг. АрдМааний протоколыг ашиглан, хэрэглэгчид өөрийн хөрөнгөө өндөр хүүтэйгээр хадгалах, бага хүүтэй зээл авах боломжтой. Мөн блокчэйн дээр хийгдэж буй гүйлгээ бүрийг хянаж, магадлан итгэмжлэх бүрэн боломжийг олгодгоороо төвлөрсөн бус санхүү нь хамгийн найдвартай байх болно."
        },
        {
            id: 2,
            title: 'Таны бирж таны гарт байх болно.',
            data: "DEX буюу төвлөрсөн бус бирж нь автоматжуулсан ухаалаг гэрээнд тулгуурлан дундын зуучлагчгүйгээр арилжаа хийх боломжийг олгоно. Энгийнээр хэлбэл, DEX дээр хэрэглэгчид брокерын шаардлагагүйгээр криптовалют арилжаалах боломжтой. Хэрэглэгчид ердөө л MetaMask, Phantom, Sollet эсвэл Trezor гэх мэт крипто түрийвчээ DEX-тэй холбож, Bitcoin, Solana болонEthereum-ийн хоорондох крипто-крипто арилжааны хослолыг сонгох, үнийн дүнг оруулах, солих товчийг ашиглах ба арилжаа нь ухаалаг гэрээгээр баталгаажиж, хэрэгждэг. Энэхүү биржийн ирээдүйн хөгжилт, сайжруулалтыг АрдМааний эзэмшигчид бүрэн шийдэх юм."
        },
        {
            id: 3,
            title: 'АрдМааний нь эзэмшигчдээр бүрэн захирагдана.',
            data: "АрдМааний нь засаглалын токен буюу DAO протоколд суурилсан. DAO нь эзэмшигчдэд хөрөнгийн санд эзлэх өөрийн эзэмшлийн хувиар аливаа шинэ төсөл, дүрэм, урамшуулал, ашиг хуваарилах зэрэг токентой холбоотой асуудлыг дэвшүүлэх, санал хураалт явуулах, санал өгөх боломжийг олгодог. Ингэснээр токены засаглалыг эзэмшигчдэд эрх тэгш хуваарилж, аливаа шийдвэр гадны оролцоо, механик алдаа, хөгжүүлэгчдийн нөлөөнөөс ангид байх баталгааг өгч буй юм. АрдМааний үйл ажиллагаатай холбоотой дэвшүүлсэн санал нь олонхын саналаар хэрэгжинэ. Өөрөөр хэлбэл, АрдМааний-тай холбоотой чухал шийдвэр гаргалтад түүний эзэмшигчид шууд оролцон засаглах тухай ойлголт юм."
        }
    ] 

    const findActiveData = (id) => {
        let temp = dummy.filter(singleData => singleData.id == id)

        return (
            <div className="ml-10 sm:ml-0">
                <h1 className="mt-10 text-2xl w-full font-semibold text-white">{temp[0].title}</h1>
                <h1 className="mt-10 text-white xl:w-3/5">{temp[0].data}</h1>
            </div>
        )
    }
    
    return(
        <div className=" w-full h-full pb-56" style={{backgroundColor: '#1C1B24', backgroundImage: `url(${Cube})`, backgroundSize:'cover'}}>
            <div className="container mx-auto">
                <h1 className="text-left sm:text-center py-10 text-3xl font-bold text-white text-center">Resolving DEX Issues</h1>
                <div className="flex w-6/12 space-x-16 ">
                    <h1 className="cursor-pointer hidden xl:block hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(1)}>Төвлөрсөн бус санхүү</h1>
                    <h1 className="cursor-pointer hidden xl:block hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(2)}>Төвлөрсөн бус арилжаа</h1>
                    <h1 className="cursor-pointer hidden xl:block hover:text-white text-yellow-200 font-semibold text-2xl" onClick={() => setActiveSection(3)}>Засаглал</h1>
                </div>
                <div className=" flex justify-center items-center ml-10 block xl:hidden">
                    
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
                {/* <div className='block xl:hidden absolute m-4 w-72 h-24 rounded-tl-xl border-t-2 border-l-2 border-yellow-600' style={{top:'55%', zIndex: '0'}}></div> */}
                <div className="container mx-5 flex justify-evenly">
                    <div className="shadow-2xl border-l-2 border-t-2 border-yellow-500 mx-5 mt-10 rounded-3xl sm:border-none sm:shadow-none sm:ml-0 sm:mt-0">
                    {
                        findActiveData(activeSection)
                    }
                    </div>
                    {/* <div className="hidden sm:block">
                        <img src={Cube} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Section2;