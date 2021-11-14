import react from "react";

const Faq = () => {
    return(
        <div id="FAQ" className="w-full h-full py-32" style={{backgroundColor:'#1F1E29'}}>
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="pb-16 text-2xl font-semibold text-white xl:text-6xl">Түгээмэл Асуултууд</h1>
                </div>
                <div className="">
                    <h1 className="mt-20 text-lg font-semibold text-center text-white xl:text-2xl">АрдМааний төсөл хэзээ бэлэн болох вэ?</h1>
                    <p className="mx-5 mt-5 text-sm text-center text-gray-400 xl:text-base">3-6 сарын дотор эхний үе шатаа бүрэн төгөлдөр хэрэглээнд оруулахаар ажиллаж байна.</p>
                </div>
                <div className="">
                    <h1 className="mt-20 text-lg font-semibold text-center text-white xl:text-2xl">АрдМааний төвлөрсөн бус санхүү аль сүлжээн дээр үйл ажиллагаагаа явуулах бэ?</h1>
                    <p className="mx-5 mt-5 text-sm text-center text-gray-400 xl:text-base">АрдМааний нь Wormhole технологийг ашиглан, Этериум, Солана, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүд дээр үйл ажиллагаагаа явуулахаар бүтээгдэж байна.</p>
                </div>
                <div className="">
                    <h1 className="mt-20 text-lg font-semibold text-center text-white xl:text-2xl">АрдМааний нь аль байгууллагын төсөл бэ?</h1>
                    <p className="mx-5 mt-5 text-sm text-center text-gray-400 xl:text-base">АрдМааний нь DAO буюу төвлөрсөн эзэнгүй, токен эзэмшигчдийн төсөл байх болно. Өөрөөр хэлбэл, энэхүү төслийн засаглалын токен нь АрдМааний байх юм.</p>
                </div>
                <div className="">
                    <h1 className="mt-20 text-lg font-semibold text-center text-white xl:text-2xl">Засаглалын токен гэж юу вэ?</h1>
                    <p className="mx-5 mt-5 text-sm text-center text-gray-400 xl:text-base">Засаглалын токен нь төвлөрсөн бус системийн ноён нуруу бөгөөд ил тод, тэгш оролцоог хангасан засаглалыг хэвшүүлж, эзэмшигчид өөрсдөө блокчэйн төслийн ирээдүйг тодорхойлох боломжийг олгодог. Засаглалын токен нь төслийн шинэ санаачилга, шийдвэр гаргалт бүр дээр эзэмшигчдээс санал хураах, түүнийг хэрэгжүүлэх асуудлыг хариуцах үүрэгтэй төвлөрсөн бус бие даасан байгууллагатай (DAO) байдаг.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq
