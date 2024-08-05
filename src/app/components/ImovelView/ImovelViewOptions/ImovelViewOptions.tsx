import { Dispatch, SetStateAction } from "react";
import styles from  "./ImovelViewOptions.module.scss";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"

interface ImovelViewOptionsProps {
    options: string[],
    selectedValue: string,
    setSelectedValue: Dispatch<SetStateAction<string>>,
    setPageIndex: Dispatch<SetStateAction<number>>
    handleMovePage: (forward: boolean) => void
}

export default function ImovelViewOptions(props: ImovelViewOptionsProps){

    return <div className={styles.imovelViewOptions}>
        <div className={styles.selection}>
            <select 
                name="neighborhood" 
                id="neighborhood" 
                value={props.selectedValue}
                onChange={(event) => {
                    props.setSelectedValue(event.target.value);
                    props.setPageIndex(0);

                }}
                >
                {props.options.map((option) => <option 
                    key={props.options.indexOf(option)} 
                    value={option}>{option}
                    </option>)}
            </select>
        </div>
        <div className={styles.arrowButtons}>
            <IoIosArrowDropleft 
                size={80} 
                color="white"
                onClick={() => props.handleMovePage(false)}/>
            <IoIosArrowDropright 
                size={80} 
                color="white"
                onClick={() => props.handleMovePage(true)}/>
        </div>
        <div className={styles.buttonTitle}>
            Consultar imovel
        </div>
    </div>
}