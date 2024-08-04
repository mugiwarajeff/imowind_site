import styles from "./ImovelView.module.scss";
import ImovelViewCard from "./ImovelViewCard/ImovelViewCard";
import ImovelViewOptions from "./ImovelViewOptions/ImovelViewOptions";

export default function ImovelView() {

    return <div className={styles.imovelView}>
        <div className={styles.backgroundSquare}>

        </div>
        <div className={styles.imovelCards}>
            <div className={styles.spaces4}>
               <ImovelViewCard 
               imagePath="/images/tangarasimagem.jpeg"
               topPosition={230}/>
            </div>
            <div className={styles.spaces4}>
                <ImovelViewCard 
                    imagePath="/images/tangarasimagem.jpeg"
                    topPosition={230}/>

            </div>
            <div className={styles.spaces2}>
                <ImovelViewOptions />
            </div>
            <div className={styles.spaces3}>
                <ImovelViewCard 
                    imagePath="/images/tangarasimagem.jpeg"
                    topPosition={150}/>

            </div>
            <div className={styles.spaces3}>
                <ImovelViewCard 
                imagePath="/images/tangarasimagem.jpeg"
                topPosition={150}/>

            </div>
            <div className={styles.spaces3}>
                <ImovelViewCard 
                    imagePath="/images/tangarasimagem.jpeg"
                    topPosition={150}/>

            </div>
        </div>
    </div>
}