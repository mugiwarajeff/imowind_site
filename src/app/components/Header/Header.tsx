import styles from "./Header.module.scss";
import Image from "next/image";
import imowind_logo from "/public/imowind_logo_header.svg";
import ImoButton from "@/shared/components/Button/ImoButton";
export default function Header(){


    return <div className={styles.header}>
        <div className={styles.logo}>
            <Image 
                src={imowind_logo}
                width={300}
                alt=""/>
        </div>
        <div className={styles.button_bar}>   
            <ImoButton
                label="Anúncie Aqui"/>
            <ImoButton 
                label="Imóveis"/>
        </div>
    </div>
}