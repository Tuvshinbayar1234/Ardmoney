import react, {useState} from "react";
import Eco from '../assets/eco.png'

const Ecosystem = () => {

  const [activeSection, setActiveSection] = useState(3);

  const dummy = [
    {
      id: 1,
      data: "1. DAX.mn дээр урьдчилсан худалдаа.",
      list: "2. SPL, ERC20, BEP20 хувилбарын хөгжүүлэлт, нэвтрүүлэлт.",
    },
    {
      id: 2,
      data: "1. DEX протокол хөгжүүлэлтийг эхлүүлэх.",
      list: "2. AMM Liquidity Pools протоколын хөгжүүлэлт.",
      list2: "3. Платформыг нэвтрүүлэх.",
    },
    {
      id: 3,
      data: "1. Governance протоколыг ашиглан хэрэглэгчид шинэчлэлүүдэд бүрэн саналын эрхтэй оролцох.",
      list: "2. Wormhole bridge технологийг ашиглан BSC, Ethereum, Polygon, Terra, Solana блокчэйн сүлжээ хоорондын интеграци хийх.",
    }
  ]

  const findActiveData = (id) => {
    let temp = dummy.filter(singleData => singleData.id == id)

    return (
      <div className="w-full mx-2 mb-5 text-sm text-center md:text-left md:mx-0 md:ml-5">
        <h1 className="mt-4 text-white xl:w-full">{temp[0].data}</h1>
        <h1 className="mt-4 text-white xl:w-full">{temp[0].list}</h1>
        <h1 className="mt-4 text-white xl:w-full">{temp[0].list2}</h1>
        <h1 className="mt-4 text-white xl:w-full">{temp[0].list3}</h1>
      </div>
    )
  }

  return (
    <div id="Eco" className="w-full h-full py-32" style={{backgroundColor: '#1F1E29'}}>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse justify-around xl:flex-row">
          <div className="flex items-center justify-center">
            <img src={Eco} width="500px" height="500px" />
          </div>
          <div className="relative flex flex-col justify-center top-2 md:right-9">
            <h1 className="mx-5 mb-6 text-5xl font-semibold text-center text-white md:text-left">Ecosystem</h1>
            <div className="flex my-6 space-x-16 xl:ml-5">
              <h1 className={`${isActive(1)} uppercase hidden text-lg text-white cursor-pointer font-extralight w-32 xl:block`} onClick={() => setActiveSection(1)}>Layer 1</h1>
              <h1 className={`${isActive(2)} uppercase hidden text-lg text-white cursor-pointer font-extralight w-32 xl:block`} onClick={() => setActiveSection(2)}>Layer 2</h1>
              <h1 className={`${isActive(3)} uppercase hidden text-lg text-white cursor-pointer font-extralight w-32 xl:block`} onClick={() => setActiveSection(3)}>Layer 3</h1>
            </div>
            <div className="flex items-center justify-center block xl:hidden">
              <div onClick={() => setActiveSection(1)} className="flex items-center justify-center block w-20 h-6 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className="text-center text-yellow-200 cursor-pointer">Layer 1</h1>
              </div>
              <div className="w-12 h-1" style={{backgroundColor: '#41404F'}}></div>
              <div onClick={() => setActiveSection(2)} className="flex items-center justify-center block w-20 h-6 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className="text-center text-yellow-200 cursor-pointer">Layer 2</h1>
              </div>
              <div className="w-12 h-1" style={{backgroundColor: '#41404F'}}></div>
              <div onClick={() => setActiveSection(3)} className="flex items-center justify-center block w-20 h-6 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className="text-center text-yellow-200 cursor-pointer">Layer 3</h1>
              </div>

            </div>
            <div className="flex flex-col hidden text-xs text-center xl:block">
              {findActiveData(activeSection)}
            </div>
            <div className="flex justify-between block mb-20 xl:hidden">
              <div className="mx-2 mt-10 border-t-2 border-l-2 border-gray-600 shadow-2xl rounded-3xl xl:border-none xl:shadow-none xl:ml-0 xl:mt-0">
                {findActiveData(activeSection)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function isActive(idx) {
    return activeSection == idx ? "border-yellow-400 border-b-2 text-white" : "text-yellow-400";
  }

}

export default Ecosystem

