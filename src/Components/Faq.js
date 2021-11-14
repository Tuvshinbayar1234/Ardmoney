import react from "react";

const Faq = () => {

  let titleTextStyle = "mt-20 text-lg px-3 font-semibold text-center text-white xl:text-2xl";
  let subTextStyle = "mx-5 mt-5 text-xs text-center text-gray-400 xl:text-base";

  return (
    <div id="FAQ" className="w-full h-full py-32" style={{backgroundColor: '#1F1E29'}}>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white md:pb-16 xl:text-6xl">Түгээмэл Асуултууд</h1>
        </div>
        <div className="">
          <h1 className={titleTextStyle} >АрдМааний төсөл хэзээ бэлэн болох вэ?</h1>
          <p className={subTextStyle} >3-6 сарын дотор эхний үе шатаа бүрэн төгөлдөр хэрэглээнд оруулахаар ажиллаж байна.</p>
        </div>
        <div className="">
          <h1 className={titleTextStyle} >АрдМааний төвлөрсөн бус санхүү аль сүлжээн дээр үйл ажиллагаагаа явуулах бэ?</h1>
          <p className={subTextStyle} >АрдМааний нь Wormhole технологийг ашиглан, Этериум, Солана, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүд дээр үйл ажиллагаагаа явуулахаар бүтээгдэж байна.</p>
        </div>
        <div className="">
          <h1 className={titleTextStyle}>АрдМааний нь аль байгууллагын төсөл бэ?</h1>
          <p className={subTextStyle}>АрдМааний нь DAO буюу төвлөрсөн эзэнгүй, токен эзэмшигчдийн төсөл байх болно. Өөрөөр хэлбэл, энэхүү төслийн засаглалын токен нь АрдМааний байх юм.</p>
        </div>
        <div className="">
          <h1 className={titleTextStyle} >Засаглалын токен гэж юу вэ?</h1>
          <p className={subTextStyle} >Засаглалын токен нь төвлөрсөн бус системийн ноён нуруу бөгөөд ил тод, тэгш оролцоог хангасан засаглалыг хэвшүүлж, эзэмшигчид өөрсдөө блокчэйн төслийн ирээдүйг тодорхойлох боломжийг олгодог. Засаглалын токен нь төслийн шинэ санаачилга, шийдвэр гаргалт бүр дээр эзэмшигчдээс санал хураах, түүнийг хэрэгжүүлэх асуудлыг хариуцах үүрэгтэй төвлөрсөн бус бие даасан байгууллагатай (DAO) байдаг.</p>
        </div>
      </div>
    </div>
  )
}

export default Faq
