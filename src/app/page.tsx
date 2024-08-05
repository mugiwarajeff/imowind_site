"use client"

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
import { useRef } from "react";




export default function Home() {
  const brokersSections = useRef<HTMLDivElement>(null);
  const propertiesSections = useRef<HTMLDivElement>(null);

  const depositionsSections = useRef<HTMLDivElement>(null);
  const faqSections = useRef<HTMLDivElement>(null);
  const advertiseSections = useRef<HTMLDivElement>(null);
  return (
   
      <main className={styles.page}>
        <Header brokersRef={brokersSections} advertiseRef={advertiseSections} depositionsRef={depositionsSections} faqRef={faqSections} propertiesRef={propertiesSections}/>
        <SectionSpliter/>
        <ImovelSlider/>
        <SectionSpliter height={35}/>
        <CallingText />
        <ImovelView propertiesRef={propertiesSections} />
        <BrokersSection brokersRef={brokersSections} /> 
        <GalerySection /> 
        <DepositionSection  depositionsRef={depositionsSections}/>
        <AdvertisePropertieSection  advertiseRef={advertiseSections}/>
        <FAQSection  faqRef={faqSections}/>
        <FooterSection />
      </main>
    
  );
}
