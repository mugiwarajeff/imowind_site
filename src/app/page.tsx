import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import SectionSpliter from "./components/SectionSpliter/SectionSpliter";
import ImovelView from "./components/ImovelView/ImovelView";



export default function Home() {
  return (
   
      <main className={styles.page}>
        <Header/>
        <SectionSpliter/>
        <ImovelView isCard={false}/>
      </main>
    
   
  );
}
