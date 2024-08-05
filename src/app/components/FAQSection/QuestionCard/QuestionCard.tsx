"use client"
import Question from "@/app/interfaces/question";
import { useState } from "react"
import styles from "./QuestionCard.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface QuestionCardProps  {
    question: Question;
}
export default function QuestionCard(props: QuestionCardProps){
   
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <div className={`${styles.questionCard} ${isOpen ? styles.expandedSize : styles.normalSize}`}>   
        <div className={`${styles.questionContainer}`}>
            <span className={styles.questionTitle}>
                {props.question.question}
            </span>
            {
                isOpen ? 
                <AiOutlineMinus 
                    size={80}
                    className={styles.iconAjusts}
                    onClick={() => setIsOpen(false)}
                    /> 
                    :     
                <AiOutlinePlus 
                    size={80}
                    className={styles.iconAjusts}
                    onClick={() => setIsOpen(true)}/>
            }
        </div>     
        
        <p className={!isOpen ? styles.hiddenVisibility : styles.answerText}>
            {props.question.answer}
        </p>
    
    </div>
}