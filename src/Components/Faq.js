import react from "react";

const Faq = () => {
    return(
        <div className="w-full h-full py-5" style={{backgroundColor:'#1F1E29'}}>
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-white text-2xl xl:text-4xl font-semibold">Түгээмэл Асуултууд</h1>
                </div>
                <div className="">
                    <h1 className="text-center text-white text-lg xl:text-2xl mt-20 font-semibold">АрдМааний төсөл хэзээ бэлэн болох вэ?</h1>
                    <p className="text-gray-400 text-center mt-5 text-sm xl:text-base mx-5">3-6 сарын дотор эхний үе шатаа бүрэн төгөлдөр хэрэглээнд оруулахаар ажиллаж байна.</p>
                </div>
                <div className="">
                    <h1 className="text-center text-white text-lg xl:text-2xl mt-20 font-semibold">АрдМааний төвлөрсөн бус санхүү аль сүлжээн дээр үйл ажиллагаагаа явуулах бэ?</h1>
                    <p className="text-gray-400 text-center mt-5 text-sm xl:text-base mx-5">АрдМааний нь Wormhole технологийг ашиглан, Этериум, Солана, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүд дээр үйл ажиллагаагаа явуулахаар бүтээгдэж байна.</p>
                </div>
                <div className="">
                    <h1 className="text-center text-white text-lg xl:text-2xl mt-20 font-semibold">АрдМааний нь аль байгууллагын төсөл бэ?</h1>
                    <p className="text-gray-400 text-center mt-5 text-sm xl:text-base mx-5">АрдМааний нь DAO буюу төвлөрсөн эзэнгүй, токен эзэмшигчдийн төсөл байх болно. Өөрөөр хэлбэл, энэхүү төслийн засаглалын токен нь АрдМааний байх юм.</p>
                </div>
                <div className="">
                    <h1 className="text-center text-white text-lg xl:text-2xl mt-20 font-semibold">Засаглалын токен гэж юу вэ?</h1>
                    <p className="text-gray-400 text-center mt-5 text-sm xl:text-base mx-5">Засаглалын токен нь төвлөрсөн бус системийн ноён нуруу бөгөөд ил тод, тэгш оролцоог хангасан засаглалыг хэвшүүлж, эзэмшигчид өөрсдөө блокчэйн төслийн ирээдүйг тодорхойлох боломжийг олгодог. Засаглалын токен нь төслийн шинэ санаачилга, шийдвэр гаргалт бүр дээр эзэмшигчдээс санал хураах, түүнийг хэрэгжүүлэх асуудлыг хариуцах үүрэгтэй төвлөрсөн бус бие даасан байгууллагатай (DAO) байдаг.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq