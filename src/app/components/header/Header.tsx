import styles from "./Header.module.scss";
import Image from "next/image";
export default function Header(){


    return <div className={styles.header}>
        <div>
            <Image src="imowind_logo_header"/>
        </div>
        <div>
            botoes
        </div>
    </div>
}