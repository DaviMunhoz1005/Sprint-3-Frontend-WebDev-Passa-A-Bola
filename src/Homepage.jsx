import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LastEditionsSection from "./components/LastEditionSection";
import OrganizersSection from "./components/OrganizerSection";

import duasImg from './assets/imgs/duas.png';
import aleImg from "./assets/imgs/ale.pab.png";
import luanaImg from "./assets/imgs/luana.pab.png";
import copaImg from "./assets/imgs/copa.png";
import trofeuImg from "./assets/imgs/trofeu.png";

export default function Homepage() {
  return (
    <>
      <Header />
        <HeroSection />
        <AboutSection />
        <LastEditionsSection copaImg={copaImg} trofeuImg={trofeuImg} />
        <OrganizersSection duasImg={duasImg} aleImg={aleImg} luanaImg={luanaImg} />
      <Footer />
    </>
  );
}
