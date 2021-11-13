import react from "react";
import Electric from '../assets/electric.png'

const Ourvision = () => {
    return(
        <div className="w-full h-full" style={{backgroundColor: '#1F1E29'}}>
            <div className="container mx-auto py-10">
                <div className="">
                    <h1 className="text-2xl xl:text-5xl mb-5 text-center font-semibold text-white">Онцлог</h1>
                </div>
                <div className="flex lg:flex-row flex-col items-center">
                    <div className="flex flex-col justify-center items-center w-4/12">
                        <img src={Electric} />
                        <h1 className="text-lg xl:text-lg font-semibold text-center text-white">
                            Хамгийн хурдан
                        </h1>
                        <p className="text-xs text-center text-white">Солана сүлжээ нь 1 секундэд 50.000 гүйлгээ батлах чадвартай. Энэ нь АрдМааний протокол хамгийн хурдан санхүүгийн үйлчилгээг үзүүлнэ гэсэн үг юм.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-4/12">
                        <img src={Electric} />
                        <h1 className="text-lg xl:text-lg font-semibold text-center text-white">
                        Wormhole: Олон сүлжээт холбоо
                        </h1>
                        <p className="text-xs text-center text-white">АрдМааний нь Солана, Этериум, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүдэд зэрэг оршиж, сүлжээ хооронд шилжих боломжтой.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-4/12">
                        <img src={Electric} />
                        <h1 className="text-lg xl:text-lg font-semibold text-center text-white">
                        DEX: Төвлөрсөн бус бирж
                        </h1>
                        <p className="text-xs text-center text-white">Монгол блокчэйн төслүүдийг дэлхийн тавцанд гаргах DEX байх болно. Гадаад орны хөрөнгө оруулагчид Монгол блокчэйн төслүүдэд хөрөнгө оруулах хамгийн хурдан, хялбар зам байх болно.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-4/12">
                        <img src={Electric} />
                        <h1 className="text-lg xl:text-lg font-semibold text-center text-white">
                        DEFI: Санхүүгийн шинэ эрин
                        </h1>
                        <p className="text-xs text-center text-white">АрдМааний эзэмшигчид бүх шинэчлэлт, сайжруулалтанд саналаа өгч оролцох боломжтой.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourvision;