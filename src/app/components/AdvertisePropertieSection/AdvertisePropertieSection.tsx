import { RefObject } from "react";
import styles from "./AdvertisePropertieSection.module.scss";

interface AdvertisePropertieSectionProps {
    advertiseRef: RefObject<HTMLDivElement>,
}
export default function AdvertisePropertieSection (props: AdvertisePropertieSectionProps){

    return <div ref={props.advertiseRef} className={styles.advertisePropertieSection}>
        <h2 className={styles.title}>
            Anuncie seu Imóvel
        </h2>
        <p className={styles.textContainer}>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Quas numquam recusandae 
            ut culpa quis porro quo corrupti repellendus 
            debitis! Doloribus tenetur culpa inventore quia 
            soluta asperiores consequatur, quos minima quisquam.
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Quas numquam recusandae 
            ut culpa quis porro quo corrupti repellendus 
            debitis! Doloribus tenetur culpa inventore quia 
            soluta asperiores consequatur, quos minima quisquam.
        </p>

        <div className={styles.buttonContainer}>
            <button>
                Anuncie Aqui
            </button>
        </div>
    </div>
}