import react from "react";
import Vid from '../assets/Vid.gif'

const Section3 = () => {
    return(
        <div className="h-full w-full" style={{backgroundColor: '#1C1C2B'}}>
            <div className="container mx-auto py-8 pb-8">
                <div className="flex flex-row justify-between">
                    <div className="w-6/12">
                        <img src={Vid} alt=''/>
                    </div>
                    <div className="w-6/12 flex flex-col justify-center">
                        <h1 className="text-2xl text-white">AрдМааний гэж юу вэ?</h1>
                        <p className="mt-5 w-9/12 text-white">АрдМааний нь эзэмшигчдэдээ дундын зуучлагчгүйгээр зээл, хадгаламж, ашиг олборлолт зэрэг санхүүгийн үйлчилгээг авах боломжийг олгодог DAO (Decentralized Autonomous Organization) протокол юм. Та Ардмааний протокол дээр хөрөнгөө хадгалан, өгөөж хүртэх боломжтойгоос гадна түргэн шуурхай арилжаа хийх боломжтой байх болно.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3