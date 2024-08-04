"use client"
import Image from "next/image";
import styles from "./ImovelCard.module.scss";
import { useEffect, useState } from "react";

interface ImovelCardProps {
    imagePath: string
}

export default function ImovelCard(props: ImovelCardProps){

    const [ screenWidth, setScreenWidth ] = useState<number | undefined >(undefined)

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    })
 
    
    return <div className={styles.imovelCard}>
        <div className={styles.imovelImage}>
            <Image 
                src={props.imagePath}
                width={screenWidth ?? 0}
                height={500}
                alt=""
            />
        </div>
        
        <div className={styles.infoCard}>
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