import styles from "./FooterSection.module.scss";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhoneVolume} from "react-icons/fa6";
import {  IoMdMail } from "react-icons/io";
import imowind_logo from "/public/imowind_logo_footer.svg";
import Link from "next/link";

export default function FooterSection(){

    return <footer className={styles.footer}>

        <div className={styles.socialMedias}>
                <Image 
                src={imowind_logo}
                width={300}
                color="white"
                alt=""/>

                <div className={styles.icons}>
                    <FaWhatsapp color="white" size={40}/> 
                    <FaInstagram  color="white" size={40}/>
                    <FaFacebook color="white" size={40} />
                </div>
        </div>
        <div className={styles.spacingBar}></div>
        <div className={styles.contacts}>
            <div className={styles.item} >
                <FaPhoneVolume color="white" size={40} style={{bottom: "10px"}} />
                <span>
                    (21) 99905-1755
                </span>
            </div>
            <div className={styles.item} >
                <IoMdMail color="white" size={40} style={{bottom: "10px"}}/>
                <span>
                    cadugarcia2001@gmail.com
                </span>
            </div>
        </div>
        <div className={styles.spacingBar}></div>
        <div  className={styles.services}>
            <h4>
                Serviços
            </h4>
            <Link href={""}>Peça seu Imóvel</Link>
            <Link href={""}>Anúncie seu Imóvel</Link>
            <Link href={""}>Simule seu Financiamento</Link>
        </div>

        <h6 className={styles.tradeMarkText}>
            2024 © Todos os Direitos Reservados
        </h6>
    </footer>
}