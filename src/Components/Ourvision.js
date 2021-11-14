import react from "react";
import Electric from '../assets/electric.png'
import Water from '../assets/water.png'
import Exchange from '../assets/exchange.png'
import Denluu from '../assets/denluu.png'

const Ourvision = () => {
    return(
        <div id="Our" className="w-full h-full" style={{backgroundColor: '#1F1E29'}}>
            <div className="container py-32 mx-auto">
                <div className="">
                    <h1 className="mb-5 text-2xl font-semibold text-center text-white xl:text-5xl">Онцлог</h1>
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row">
                    <div className="flex flex-col items-center justify-center w-full xl:h-96 xl:w-4/12">
                        <img src={Electric} />
                        <h1 className="flex items-center justify-center mb-3 text-lg font-semibold text-center text-white xl:text-lg">Гадаслах (Staking)</h1>
                        <p className="flex items-center justify-center w-3/4 text-xs text-center text-white">Гадаслах хөтөлбөрөөр хадгаламжаас илүү өгөөж хүртэх боломжтой. Эзэмшигч нь АрдМааний токены эзэмшлээ гадаслах буюу түгжсэнээр өгөөж хүртэх боломжтой.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full xl:h-96 xl:w-4/12">
                        <img src={Water} />
                        <h1 className="flex items-center justify-center mb-3 text-lg font-semibold text-center text-white xl:text-lg">
                        Олон сүлжээт холбоо
                        </h1>
                        <p className="flex items-center justify-center w-3/4 text-xs text-center text-white">АрдМааний нь Солана, Этериум, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүдэд зэрэг оршиж, сүлжээ хооронд шилжих боломжтой.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mt-2 xl:h-96 xl:w-4/12">
                        <img src={Exchange} />
                        <h1 className="flex items-center justify-center mb-3 text-lg font-semibold text-center text-white xl:text-lg">
                            DEX: Төвлөрсөн бус бирж
                        </h1>
                        <p className="flex items-center justify-center w-3/4 text-xs text-center text-white">Монгол блокчэйн төслүүдийг дэлхийн тавцанд гаргах DEX байх болно. Гадаад орны хөрөнгө оруулагчид Монгол блокчэйн төслүүдэд хөрөнгө оруулах хамгийн хурдан, хялбар зам байх болно.</p>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-full xl:h-96 xl:w-4/12 -top-3">
                        <img src={Denluu} />
                        <h1 className="flex items-center justify-center mb-3 text-lg font-semibold text-center text-white xl:text-lg">
                        DEFI: Санхүүгийн шинэ эрин
                        </h1>
                        <p className="flex items-center justify-center w-3/4 text-xs text-center text-white">АрдМааний эзэмшигчид бүх шинэчлэлт, сайжруулалтанд саналаа өгч оролцох боломжтой.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourvision;
