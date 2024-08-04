import styles from  "./ImovelViewOptions.module.scss";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"

export default function ImovelViewOptions(){

    return <div className={styles.imovelViewOptions}>
        <div className={styles.selection}>
            <select name="" id="">
                <option value="Vargem Pequena">Vargem Pequena</option>
                <option value="Vargem Pequena">Vargem Pequena</option>
                <option value="Vargem Pequena">Vargem Pequena</option>
            </select>
        </div>
        <div className={styles.arrowButtons}>
            <IoIosArrowDropleft size={80} color="white"/>
            <IoIosArrowDropright size={80} color="white"/>
        </div>
        <div className={styles.buttonTitle}>
            Consultar imovel
        </div>
    </div>
}