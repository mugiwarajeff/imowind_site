import DepositionCard from "./DepositionCard/DepositionCard";
import styles from "./DepositionSection.module.scss";
import Deposition from "@/app/interfaces/deposition";
import depositionJson from "../../data/depositions.json";


export default function DepositionSection(){
    const depositions : Deposition[] = depositionJson;
    return <div className={styles.depositionSection}>
        <h2 className={styles.title}>    
            Depoimentos
        </h2>
        <div className={styles.cardsContainer}>
            {
            depositions.map( 
                (deposition) => 
                    <DepositionCard key={depositions.indexOf(deposition)} deposition={deposition}/>)
            }
            
        </div>
    </div>
}