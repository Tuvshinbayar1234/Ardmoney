import react, {useState} from "react";
import styles from './index.module.css';

const Section4 = () => {

  const [click, setClick] = useState(1)

  const dummy = [
    {
      id: 1,
      title: 'Эхний үе шат',
      data: "* AMM-тэй DEX хөгжүүлэлт",
      list: '* ARDM токен нэвтрүүлэлт',
      list2: '* SPL, ERC20, BEP20 хувилбарын хөгжүүлэлт, нэвтрүүлэлт',
      list3: '* Дотоодын төвлөрсөн бирж дээрх бүртгэл;',
      list4: '* DAO засаглалын платформ хөгжүүлэлт;',
    },
    {
      id: 2,
      title: 'Хоёр дахь үе шат',
      // data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!2",
      list: '* BSC, Ethereum, Polygon, Terra, Solana блокчэйн сүлжээ хоорондын интеграци',
      list2: '* Нэмэлт хөрөнгө босголт',
      list3: '* Хэтэвчний экосистем',
      list4: '* Төсөл бойжуулах хөтөлбөр',
      list5: '* Аудит (black box, white box)',
      list6: '* Төвлөрсөн бус хадгаламжийн үйлчилгээ',
      list7: '* Төвлөрсөн бус зээлийн үйлчилгээ',
    },
    {
      id: 3,
      title: 'Гурав дахь үе шат',
      // data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dignissimos!3",
      list: '* Сайжруулсан хэтэвч болон хадгаламжийн үйлчилгээ',
      list3: '* АрдМааний ирээдүйн экосистемийн хөгжүүлэлт',
      list4: '* Сайн дурын хөгжүүлэгчдийг урамшуулах хөтөлбөр',
      list5: '* Нээлттэй хөгжүүлэлтийн код',
      list6: '* Хэтэвчний хуулга үүсгэх үйлчилгээ',
      list7: '* NFT үүсгэн хадгалах боломж',
      list8: '* Олон улсын төвлөрсөн бус биржүүд дээрх бүртгэл',
    }
  ]

  const HandleClick = (id) => {
    let temp = dummy.filter(singleData => singleData.id == id)

    return (
      <div className="mb-5 ml-2">
        <h1 className="mt-2 text-2xl font-semibold text-yellow-400 mx-1.5">{temp[0].title}</h1>
        <div className="relative mt-4 md:left-2">
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
      </div>
    )
  }


  return (
    <div id="Road" className="w-full " style={{backgroundColor: '#1C1B24'}}>
      <h1 className="relative pb-10 text-2xl font-semibold text-center text-white xl:text-6xl xl:py-20 xl:-mb-56">АрдМааний төлөвлөгөө</h1>
      <div className="container relative w-full mx-auto xl-top-52">
        <div className="flex items-center justify-around">
          <div className="hidden xl:block">
            <div className="flex flex-row items-center justify-center">
              <svg width="187" height="1108" viewBox="0 0 187 1108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_di_257_14)">
                  <path d="M3 0V250C3 283.69 30.3106 311 64 311H117.5C151.189 311 178.5 338.311 178.5 372V1102.5" stroke="#F9B74B" stroke-width="5" />
                </g>
                <circle className="cursor-pointer" onClick={() => setClick(1)} cx="179.5" cy="403.5" r="6" fill="#E68E00" stroke="white" stroke-width="3" />
                <circle className="cursor-pointer" onClick={() => setClick(2)} cx="179.5" cy="529.5" r="6" fill="#E68E00" stroke="white" stroke-width="3" />
                <circle className="cursor-pointer" onClick={() => setClick(3)} cx="179.5" cy="664.5" r="6" fill="#E68E00" stroke="white" stroke-width="3" />
                <defs>
                  <filter id="filter0_di_257_14" x="0.5" y="0" width="185.5" height="1107.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_257_14" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_257_14" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_257_14" />
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col justify-between mt-2 mb-12 ml-10 space-y-28">
                <h1 onClick={() => setClick(1)} className={`${isActive(1)} uppercase cursor-pointer font-extralight hover:text-yellow-200`}>Эхний үе шат</h1>
                <h1 onClick={() => setClick(2)} className={`${isActive(2)} uppercase cursor-pointer font-extralight hover:text-yellow-200`}>Хоёр дахь үе шат</h1>
                <h1 onClick={() => setClick(3)} className={`${isActive(3)} uppercase cursor-pointer font-extralight hover:text-yellow-200`}>Гурав дахь үе шат</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col block xl:hidden">
            <div className="flex items-center justify-center block xl:hidden ">
              <div onClick={() => setClick(1)} className="flex items-center justify-center block w-20 h-32 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className={`${isActive(1)} text-center cursor-pointer text-xs px-2`}>Эхний үе шат</h1>
              </div>
              <div className="w-6 h-1" style={{backgroundColor: '#41404F'}}></div>
              <div onClick={() => setClick(2)} className="flex items-center justify-center block w-20 h-32 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className={`${isActive(2)} text-center cursor-pointer text-xs px-2`}>Хоёр дахь үе шат</h1>
              </div>
              <div className="w-6 h-1" style={{backgroundColor: '#41404F'}}></div>
              <div onClick={() => setClick(3)} className="flex items-center justify-center block w-20 h-32 cursor-pointer xl:hidden rounded-xl" style={{backgroundColor: '#41404F'}}>
                <h1 className={`${isActive(3)} text-center cursor-pointer text-xs px-2`}>Гурав дахь үе шат</h1>
              </div>
            </div>
            <div className="w-full py-6 mt-10 text-center border-t-2 border-l-2 border-gray-600 shadow-2xl rounded-3xl xl:border-none xl:shadow-none xl:ml-0 xl:mt-0">
              {HandleClick(click)}
            </div>
          </div>
          {/* <div className='absolute block h-24 m-4 mr-20 border-t-2 border-l-2 border-yellow-600 xl:hidden w-72 rounded-tl-xl' style={{top:'415%'}}></div> */}
          <div className="hidden xl:block">
            <div className="flex p-20 border-t border-l border-gray-500 shadow-2xl rounded-3xl" style={{backgroundColor: '#1C1B24'}}>
              {HandleClick(click)}
            </div>
          </div>
        </div>

      </div>
    </div>
  )

  function isActive(idx) {
    return click == idx ? "text-yellow-200 font-normal" : "text-white";
  }

}


export default Section4


