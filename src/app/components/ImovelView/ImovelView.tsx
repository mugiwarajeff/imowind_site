import Image from "next/image";
import img from "/public/images/tangarasimagem.jpeg";
import styles from "./ImovelView.module.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

interface ImovelViewProps {
    isCard: boolean
}

export default function ImovelCard({isCard} : ImovelViewProps){

    return <div className={isCard ? styles.imovelCard : styles.imovelView }>
       <Image 
            src={img} 
            alt=""
        />
        <IoIosArrowDropleft />
        <IoIosArrowDropright />
    </div>;
}