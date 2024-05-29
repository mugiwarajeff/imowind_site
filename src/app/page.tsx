import styles from "./page.module.scss";
import Header from "./components/header/Header";
import SectionSpliter from "./components/SectionSpliter/SectionSpliter";


export default function Home() {
  return (
   
      <main className={styles.page}>
        <Header/>
        <SectionSpliter/>
      </main>
    
   
  );
}
