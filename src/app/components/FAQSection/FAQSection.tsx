import styles from "./FAQSection.module.scss";
import questionsJson from "../../data/questions.json";
import Question from "@/app/interfaces/question";
import QuestionCard from "./QuestionCard/QuestionCard";
import { RefObject } from "react";


interface FaqSectionProps {
    faqRef: RefObject<HTMLDivElement>
}
export default function FAQSection(props: FaqSectionProps) {

    const questions: Question[] = questionsJson;

    return <div ref={props.faqRef} className={styles.facSection}>
        <h2 className={styles.title}>
            FAQ <br />
            Perguntas Frequentes
        </h2>
        <div className={styles.questionsContainer}>
            {
                questions.map((question) => <QuestionCard 
                    key={questions.indexOf(question)} 
                    question={question}/>)
            }
        </div>
        
    </div>
}