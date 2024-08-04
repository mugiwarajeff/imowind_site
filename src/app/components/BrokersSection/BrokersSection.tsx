import BrokersInfo from "./BrokersInfo/BrokersInfo";
import styles from "./BrokersSection.module.scss";

export default function BrokersSection() {

    return <div className={styles.brokersInfo}>
        <h2 className={styles.sectionTitle}>
            Nossos Corretores
        </h2>
        <div>
            <BrokersInfo />
        </div>
    </div>
}