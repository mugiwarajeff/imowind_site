import { Broker } from "@/app/interfaces/broker";
import styles from "./BrokerCard.module.scss";
import {  FaWhatsapp } from "react-icons/fa"
import Image from "next/image";

interface BrokerCardProps {
    broker: Broker
}
export default function BrokerCard(props: BrokerCardProps) {

    return <div className={styles.brokerCard}>
        <div className={styles.brokerImage} >
            <Image 
            src={props.broker.image}
            alt="" 
            height={150} 
            width={150}
            fill={false}
            className={styles.imageContainer}
            />
        </div>
        <div className={styles.brokerName}>
            {props.broker.name}
        </div>
        <div className={styles.brokerContact}>
            <FaWhatsapp size={40}/> 
            <span>
                {props.broker.phone}
            </span>
        </div>
        <div className={styles.brokerButton}>
            Entre em Contato
        </div>
    </div>;
}