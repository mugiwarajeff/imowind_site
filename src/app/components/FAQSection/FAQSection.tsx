import styles from "./FAQSection.module.scss";
import questionsJson from "../../data/questions.json";
import Question from "@/app/interfaces/question";
import QuestionCard from "./QuestionCard/QuestionCard";

export default function FAQSection() {

    const questions: Question[] = questionsJson;

    return <div className={styles.facSection}>
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