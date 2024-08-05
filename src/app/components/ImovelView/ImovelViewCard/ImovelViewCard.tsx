"use client"
import { Property } from "@/app/interfaces/propertie";
import styles from "./ImovelViewStyles.module.scss"
import Image from "next/image";

interface ImovelViewCardProps {
    property: Property
    topPosition: number
}

export default function ImovelViewCard(props: ImovelViewCardProps){
    return <div className={styles.imovelViewCard}>
        <div className={styles.imovelImage}>
            <Image 
                
                src={props.property.imagePath}
                width={600}
                height={500}
                alt=""
                style={{
                    border: "4px solid #2D6295",
                    borderRadius: 20,
                }}
            />
        </div>
        <div 
            className={styles.infoCard}
            style={{top: props.topPosition}}
            >
            <h3>
                {props.property.city} - {props.property.state}
            </h3>
            <h3>
                {props.property.neighborhood}
            </h3>
            <h5>
                {props.property.type}, {props.property.size}
            </h5>
            <h5>
                {props.property.price}
            </h5>
        </div>
    </div>
}