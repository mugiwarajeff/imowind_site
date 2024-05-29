"use client"

import { MouseEventHandler, useState } from "react";
import styles from "./ImoButton.module.scss";

interface ImoButtonProps {
    label: string
    onClick ?: MouseEventHandler<HTMLDivElement> | undefined
}

export default function ImoButton({label, onClick} : ImoButtonProps){
    const [isHovering, setIsHovering ] = useState<boolean>(false);

    function onMouseOver(){
        setIsHovering(true);
    }

    function onMouseLeave(){
        setIsHovering(false);
    }


    return <div 
        className={styles.button_container} 
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        >
        <button className={isHovering ? styles.hover_button: styles.normal_button}>
            {label}
        </button>
        <div className={isHovering ? styles.hover_button_selection_bar : styles.button_selection_bar}>

        </div>
    </div>
   

}