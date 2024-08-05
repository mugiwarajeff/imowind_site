"use client"

import Deposition from "@/app/interfaces/deposition";
import styles from "./DepositionCard.module.scss";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

interface DepositionCardProps {
    deposition: Deposition
}

export default function DepositionCard(props: DepositionCardProps) {

    

    return <div className={styles.depositionCard}>
        <div className={styles.imageContainer}>
            <Image 
                alt=""
                src={props.deposition.imagePath}
                width={150}
                height={150}
                className={styles.imageItself}
            /> 
        </div>
        <div className={styles.nameContainer}>
           {props.deposition.name}
        </div>
        <div>
            <Rating 
                allowFraction={true}
                initialValue={props.deposition.value / 2}
                readonly={true} /> 
        </div>
        <div className={styles.textContainer}>
           {props.deposition.text}
        </div>
    </div>
}