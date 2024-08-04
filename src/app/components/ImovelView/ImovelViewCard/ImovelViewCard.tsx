"use client"
import styles from "./ImovelViewStyles.module.scss"
import Image from "next/image";

interface ImovelViewCardProps {
    imagePath: string
    topPosition: number
}

export default function ImovelViewCard(props: ImovelViewCardProps){
    return <div className={styles.imovelViewCard}>
        <div className={styles.imovelImage}>
            <Image 
                
                src={props.imagePath}
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
                Rio de Janeiro
            </h3>
            <h3>
                Vargem Pequena
            </h3>
            <h5>
                Casa em condominio a venda, 180m2
            </h5>
            <h5>
                R$2.340.000,00
            </h5>
        </div>
    </div>
}