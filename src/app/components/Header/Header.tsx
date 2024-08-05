import styles from "./Header.module.scss";
import Image from "next/image";
import imowind_logo from "/public/imowind_logo_header.svg";
import ImoButton from "@/shared/components/Button/ImoButton";
import { RefObject, useRef } from "react";

interface HeaderProps{
    brokersRef: RefObject<HTMLDivElement>,
    advertiseRef: RefObject<HTMLDivElement>,
    propertiesRef: RefObject<HTMLDivElement>,
    depositionsRef: RefObject<HTMLDivElement>,
    faqRef: RefObject<HTMLDivElement>
}
export default function Header(props: HeaderProps){

   


    return <div className={styles.header}>
        <div className={styles.logo}>
            <Image 
                src={imowind_logo}
                width={300}
                alt=""/>
        </div>
        <div className={styles.button_bar}>   
            <ImoButton
                onClick={() => {
                if(props.advertiseRef.current){
                    props.advertiseRef.current.scrollIntoView({behavior: "smooth"});
                }
               
                }}
                label="Anúncie Aqui"/>
            <ImoButton 
                onClick={() => {
                    if(props.propertiesRef.current){
                        props.propertiesRef.current.scrollIntoView({behavior: "smooth"});
                    }
               
                }}
                label="Imóveis"/>
            <ImoButton  
                onClick={() => {
                    if(props.brokersRef.current){
                        props.brokersRef.current.scrollIntoView({behavior: "smooth"});
                    }
                   
                }}
                label="Nossos Corretores"/>
            <ImoButton 
                onClick={() => {
                    if(props.depositionsRef.current){
                        props.depositionsRef.current.scrollIntoView({behavior: "smooth"});
                    }
                
                }}
                label="Depoimentos"/>
            <ImoButton 
                onClick={() => {
                    if(props.faqRef.current){
                        props.faqRef.current.scrollIntoView({behavior: "smooth"});
                    }
                
                }}
                label="FAQ"/>
        </div>
    </div>
}