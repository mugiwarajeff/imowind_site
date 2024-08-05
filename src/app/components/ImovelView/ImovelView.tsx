"use client"
import styles from "./ImovelView.module.scss";
import ImovelViewCard from "./ImovelViewCard/ImovelViewCard";
import ImovelViewOptions from "./ImovelViewOptions/ImovelViewOptions";
import propertiesJson from   "../../data/properties.json";
import { Property } from "@/app/interfaces/propertie";
import { RefObject, useEffect, useState } from "react";


interface ImovelViewProps {
    propertiesRef: RefObject<HTMLDivElement>
}


export default function ImovelView(props: ImovelViewProps) {
    const [selectedNeighbor, setSelectedNeighbor] = useState<string>("");

    const properties : Property[] = propertiesJson;

    const filteredProperties: Property[] = propertiesJson.filter((propertie) => {
        if(selectedNeighbor == ""){
            return true;
        }
        return propertie.neighborhood === selectedNeighbor;
    } );
    
    const [actualIndexCut, setActualIndexCut] = useState<number>(0);

    const [selectedProperties, setSelectedProperties] = useState<Property[]>(filteredProperties.slice(actualIndexCut, 5));
   

    const neighborhoodOptions = Array.from(new Set(properties.map((propertie) => propertie.neighborhood)));

    function handleMovePage(forward: boolean){
     
        let temporaryIndex = forward ? actualIndexCut + 5 : actualIndexCut - 5
    
        console.log(filteredProperties.length);
        console.log(temporaryIndex);
        console.log(selectedNeighbor)


        if(temporaryIndex < 0){
            temporaryIndex = 0;
        }
       
        
        if(temporaryIndex + 1 > filteredProperties.length){
            temporaryIndex = 0;
        }

        setActualIndexCut(temporaryIndex);
        setSelectedProperties(filteredProperties.slice(actualIndexCut, actualIndexCut + 5));        
    }

    useEffect(() => {
        setSelectedProperties(filteredProperties.slice(actualIndexCut, actualIndexCut + 5));       
    }, [selectedNeighbor])


    return <div ref={props.propertiesRef} className={styles.imovelView}>
        <div className={styles.backgroundSquare}>

        </div>
        
        <div className={styles.imovelCards}>
        {
            selectedProperties.slice(0, 2).map(
                (property) => 
                <div key={properties.indexOf(property)} className={styles.spaces4}>
                    <ImovelViewCard 
                    property={property}
                    topPosition={230}/>
                </div> )
        }
        <div className={styles.spaces2}>
                <ImovelViewOptions 
                setPageIndex={setActualIndexCut}
                options={neighborhoodOptions} 
                selectedValue={selectedNeighbor}
                handleMovePage={handleMovePage}
                setSelectedValue={setSelectedNeighbor}/>
            </div>
        {
            selectedProperties.slice(2, 5).map(
                (property) => 
                <div  key={properties.indexOf(property)} className={styles.spaces3}>
                    <ImovelViewCard 
                    property={property}
                    topPosition={150}/>
                </div> )
        }
        
        </div>
    </div>
}