import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import SectionSpliter from "./components/SectionSpliter/SectionSpliter";
import ImovelSlider from "./components/ImovelSlider/ImovelSlider";
import CallingText from "./components/CallingTexts/CallingText";
import ImovelView from "./components/ImovelView/ImovelView";

import BrokersSection from "./components/BrokersSection/BrokersSection";
import GalerySection from "./components/GalerySection/GalerySection";
import DepositionSection from "./components/DepositionSection/DepositionSection";
import AdvertisePropertieSection from "./components/AdvertisePropertieSection/AdvertisePropertieSection";
import FAQSection from "./components/FAQSection/FAQSection";
import FooterSection from "./components/Footer/FooterSection";




export default function Home() {
  return (
   
      <main className={styles.page}>
        <Header/>
        <SectionSpliter/>
        <ImovelSlider/>
        <SectionSpliter height={35}/>
        <CallingText />
        <ImovelView />
        <BrokersSection /> 
        <GalerySection /> 
        <DepositionSection />
        <AdvertisePropertieSection />
        <FAQSection />
        <FooterSection />
      </main>
    
  );
}
