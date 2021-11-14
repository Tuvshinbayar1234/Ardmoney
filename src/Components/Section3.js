import react from "react";
import Vid from '../assets/Vid.gif'

const Section3 = () => {
  return (
    <div id="What" className="w-full h-full" style={{backgroundColor: '#1C1C2B'}}>
      <div className="container py-8 pb-8 mx-auto">
        <h1 className="block text-2xl text-center text-white xl:hidden xl:text-5xl">AрдМааний гэж юу вэ?</h1>
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="sm:w-6/12">
            <img src={Vid} className="relative right-8 w-96 sm:w-full" alt='' />
          </div>
          <div className="flex flex-col justify-center mb-10 sm:w-6/12">
            <h1 className="hidden text-2xl text-center text-white xl:text-5xl xl:text-justify xl:block">AрдМааний гэж юу вэ?</h1>
            <p className="relative mt-5 text-center text-white font-extralight xl:text-justify left-5">АрдМааний нь эзэмшигчдэдээ дундын зуучлагчгүйгээр зээл, хадгаламж, ашиг олборлолт зэрэг санхүүгийн үйлчилгээг авах боломжийг олгодог DAO (Decentralized Autonomous Organization) протокол юм. Та Ардмааний протокол дээр хөрөнгөө хадгалан, өгөөж хүртэх боломжтойгоос гадна түргэн шуурхай арилжаа хийх боломжтой байх болно.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
