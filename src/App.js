import react from "react";
import "./i18next";
import {useTranslation} from 'react-i18next';
import Nav from "./Components/Nav/Nav";
import Section from "./Components/Section";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Roadmap/Section4";
import Ecosystem from "./Components/Ecosystem";
import Workteam from "./Components/Workteam";
import Ourvision from "./Components/Ourvision";
import Soldonomics from "./Components/Soldonomics";
import Faq from "./Components/Faq";
import Socials from "./Components/Social";
import Footer from "./Components/Footer";
import Whitepaper from "./Components/Whitepaper";

function App() {

  const {t, i18n, ready} = useTranslation('home');
  

  return (
    <div className="overflow-hidden">
      <Nav />
      <Section />
      <Whitepaper />
      <Section2 />
      <Section3 />
      <Section4 />
      <Ecosystem />
      <Workteam />
      <Ourvision />
      <Soldonomics />
      <Faq />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
