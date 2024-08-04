import { IoArrowBackCircleOutline,  IoArrowForwardCircleOutline } from "react-icons/io5"
import style from "./BrokersNavigator.module.scss";


interface BrokersNavigatorProps {
    selectedIndex: number
    totalItens: number
    navigationHandler: (index: number) => void 
}


export default function BrokersNavigator(props: BrokersNavigatorProps){

    return <div className={style.brokersNavigator}>

        <IoArrowBackCircleOutline size={80} color="#2D6295" onClick={
        () => 
            props.navigationHandler(props.selectedIndex - 1)
        }/> 
        <span>
            {props.selectedIndex}/{props.totalItens}
        </span>
        <IoArrowForwardCircleOutline 
            size={80} 
            color="#2D6295"
            onClick={
                () => 
                    props.navigationHandler(props.selectedIndex + 1)
                } />

    </div>
}