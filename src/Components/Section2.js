import react, {useState} from "react";
import Cube from '../assets/bg3.png'
import CubeImg from '../assets/cube.png'


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
      <div className="px-6 md:px-0 md:ml-5 sm:ml-0">
        <h1 className="mt-5 text-2xl text-center text-white md:text-left font-extralight xl:text-4xl">{temp[0].title}</h1>
        <h1 className="mt-5 mb-5 text-sm leading-loose tracking-wide text-center text-white md:text-left xl:text-base xl:w-3/5">{temp[0].data}</h1>
      </div>
    )
  }

  let mobileButtonTextStyle = (idx) => `${activeSection == idx ? "text-white" : "text-yellow-200" } text-center cursor-pointer`;

  return (
    <div id="Res" className="w-full" style={{backgroundColor: '#373544'}}>
      <div className="container mx-auto lg:px-20">
        <h1 className="py-12 text-xl font-bold text-center text-white md:py-16 xl:text-6xl">Resolving DEX Issues</h1>

        <div className="flex">
          <div className="leftSide">
            <div className="flex w-6/12 py-5 space-x-16">
              <h1 className={`hidden w-16 text-2xl font-light ${isActive(1)} cursor-pointer xl:block hover:text-white hover:border-yellow-200`} onClick={() => setActiveSection(1)}>Dao</h1>
              <h1 className={`hidden w-16 text-2xl font-light ${isActive(2)} cursor-pointer xl:block hover:text-white hover:border-yellow-200`} onClick={() => setActiveSection(2)}>Defi</h1>
              <h1 className={`hidden w-16 text-2xl font-light ${isActive(3)} cursor-pointer xl:block hover:text-white hover:border-yellow-200`} onClick={() => setActiveSection(3)}>Dex</h1>
            </div>

            <div className="flex flex-col items-center block text-xl xl:hidden">
              <div onClick={() => setActiveSection(1)} className="flex items-center justify-center block w-full h-6 py-6 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className={mobileButtonTextStyle(1)}>Dao</h1>
              </div>
              <div onClick={() => setActiveSection(2)} className="flex items-center justify-center block w-full h-6 py-6 my-8 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className={mobileButtonTextStyle(2)}>Defi</h1>
              </div>
              <div onClick={() => setActiveSection(3)} className="flex items-center justify-center block w-full h-6 py-6 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className={mobileButtonTextStyle(3)}>Dex</h1>
              </div>
            </div>

            <div className="container flex pb-36">
              <div className="w-full mt-10 border-t-2 border-l-2 border-gray-600 shadow-2xl rounded-3xl sm:border-none sm:shadow-none sm:ml-0 sm:mt-0">
                {findActiveData(activeSection)}
              </div>
            </div>
          </div>
          <div className="relative hidden -top-2 left-12 md:block">
            <img src={CubeImg} width="590px" height="590px" />
          </div>

        </div>

      </div>
    </div>
  )

  function isActive(idx) {
    return activeSection == idx ? "border-b-2 border-yellow-500 text-white" : "text-yellow-200";
  }
}

export default Section2;


