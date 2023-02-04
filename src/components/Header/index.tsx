import Image from "next/image";
import { MagnifyingGlass, ShoppingCartSimple, User } from "phosphor-react"

import styles from "./index.module.css"

export default function Header() {
    return (

        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Image 
                        src="/logo.svg"
                        alt="Imagem de um console retrô na cor preta."
                        width={79}
                        height={79}
                    />

                    <div className={styles.inputIconContainer}>
                        <MagnifyingGlass className={styles.searchIcon} size={32} />

                        <input 
                            type="text" 
                            className={styles.input} 
                            placeholder="Buscar item"    
                        />
                    </div>

                </div>
                
                <div className={styles.container}>
                    <button className={styles.secondaryButton}>
                        <ShoppingCartSimple size={32} color="#FFF" />
                        Carrinho
                    </button>

                    <button className={`${styles.userButton} ${styles.secondaryButton}`}>
                        Kadson
                        <User size={32} />
                    </button>
                </div>

            </header>


        
        </>
    )
}