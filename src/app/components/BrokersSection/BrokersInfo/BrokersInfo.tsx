"use client"

import SectionSpliter from "../../SectionSpliter/SectionSpliter";
import BrokerCard from "../BrokerCard/BrokerCard";
import BrokersNavigator from "../BrokersNavigator/BrokersNavigator";
import styles from "./BrokersInfo.module.scss";
import brokersJson from "../../../data/brokers.json";
import { Broker } from "@/app/interfaces/broker";
import { useState } from "react";

export default function BrokersInfo() {

    const brokers: Broker[] = brokersJson;

    const [currentBroker, setCurrentBroker ] = useState<Broker>(brokers[0]);


    function handleBrokerNavigation(index: number){
        
        const arrayNumber: number = index - 1;
      

        if(arrayNumber > brokers.length - 1 ){
            setCurrentBroker(brokers[0])
            return;
        } 

        if(arrayNumber < 0){

            setCurrentBroker(brokers[brokers.length - 1])
            return;
        }

        const nextBroker = brokers[arrayNumber];

        setCurrentBroker(nextBroker);
    }



    return <div className={styles.brokersInfo}>
        <div className={styles.aboutContainer}>
            <SectionSpliter title="Sobre mim"/>
            <div className={styles.textContainer}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Officia quas, voluptatum, recusandae,  
                    dolor quidem fugit cupiditate repudiandae 
                    aut odio quod suscipit ipsa repellendus 
                    adipisci velit quae! Ab, quam laboriosam! Sequi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Officia quas, voluptatum, recusandae,  
                    dolor quidem fugit cupiditate repudiandae 
                    aut odio quod suscipit ipsa repellendus 
                    adipisci velit quae! Ab, quam laboriosam! Sequi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Officia quas, voluptatum, recusandae,  
                    dolor quidem fugit cupiditate repudiandae 
                    aut odio quod suscipit ipsa repellendus 
                    adipisci velit quae! Ab, quam laboriosam! Sequi.
                </p>
            </div>
        </div>
        <div className={styles.cardContainer}>
           
            <BrokerCard broker={currentBroker} />

            <BrokersNavigator 
                selectedIndex={brokers.indexOf(currentBroker) + 1} 
                totalItens={brokers.length}
                navigationHandler={handleBrokerNavigation}/>
        </div>
    </div>
}