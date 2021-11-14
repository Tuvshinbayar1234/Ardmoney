import react from "react";

const Footer = () => {
    return(
        <div className="w-full h-full py-10" style={{backgroundColor: '#000000'}}>
            <div className="container mx-auto">
              <h1 className="mx-2 text-sm font-semibold text-center text-white md:text-left xl:text-base">
                  <a href="https://www.dsolutions.mn/" target="_blank" className="text-blue-400 hover:text-blue-600">© Diverse Solutions.</a>
                </h1>
            </div>
        </div>
    )
}

export default Footer
