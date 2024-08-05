import { RefObject } from "react";
import BrokersInfo from "./BrokersInfo/BrokersInfo";
import styles from "./BrokersSection.module.scss";

interface BrokersSectionProps{
    brokersRef: RefObject<HTMLDivElement>
}

export default function BrokersSection(props: BrokersSectionProps) {

    return <div ref={props.brokersRef} className={styles.brokersInfo}>
        <h2 className={styles.sectionTitle}>
            Nossos Corretores
        </h2>
        <div>
            <BrokersInfo />
        </div>
    </div>
}