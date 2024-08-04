import styles from "./SectionSpliter.module.scss";

interface SectionSpliterProps {
    height ?: number | undefined
    title ?: string  | undefined
    titleAlignRight ?: boolean | undefined
}

export default function SectionSpliter (props: SectionSpliterProps){
    return <div

         className={styles.sectionSpliter}
         style={{height: props.height}}
         >
        <h3 className={(props.titleAlignRight ?? false) ? styles.sectionTitleRight : styles.sectionTitle}>
            {props.title}
        </h3>
      
    </div>
} 