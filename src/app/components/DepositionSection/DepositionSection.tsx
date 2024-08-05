import DepositionCard from "./DepositionCard/DepositionCard";
import styles from "./DepositionSection.module.scss";
import Deposition from "@/app/interfaces/deposition";
import depositionJson from "../../data/depositions.json";
import { RefObject } from "react";

interface DepositionSectionProps {
    depositionsRef: RefObject<HTMLDivElement>
}
export default function DepositionSection(props: DepositionSectionProps){
    const depositions : Deposition[] = depositionJson;
    return <div ref={props.depositionsRef} className={styles.depositionSection}>
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