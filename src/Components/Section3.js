import react from "react";
import Vid from '../assets/Vid.gif'

const Section3 = () => {
    return(
        <div id="What" className="h-full w-full" style={{backgroundColor: '#1C1C2B'}}>
            <div className="container mx-auto py-8 pb-8">
            <h1 className="block xl:hidden text-2xl xl:text-5xl text-center text-white">AрдМааний гэж юу вэ?</h1>            
                <div className="flex sm:flex-row flex-col justify-between">
                    <div className="sm:w-6/12">
                        <img src={Vid} className="w-96 sm:w-full" alt=''/>
                    </div>
                    <div className="sm:w-6/12 flex flex-col justify-center mb-10">
                        <h1 className="text-2xl xl:text-5xl text-center xl:text-justify text-white hidden xl:block">AрдМааний гэж юу вэ?</h1>            
                        <p className="mt-5 text-white text-center xl:text-justify">АрдМааний нь эзэмшигчдэдээ дундын зуучлагчгүйгээр зээл, хадгаламж, ашиг олборлолт зэрэг санхүүгийн үйлчилгээг авах боломжийг олгодог DAO (Decentralized Autonomous Organization) протокол юм. Та Ардмааний протокол дээр хөрөнгөө хадгалан, өгөөж хүртэх боломжтойгоос гадна түргэн шуурхай арилжаа хийх боломжтой байх болно.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3