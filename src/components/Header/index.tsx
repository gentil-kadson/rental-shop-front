import Image from "next/image";
import { MagnifyingGlass, User } from "phosphor-react"

import styles from "./styles.module.css"

export default function Header() {
    return (

        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Image 
                        src="/logo.svg"
                        alt="Imagem de um console retrô na cor preta."
                        width={52}
                        height={52}
                    />

                    <div className={styles.inputIconContainer}>
                        <MagnifyingGlass className={styles.searchIcon} size={20} />

                        <input 
                            type="text" 
                            className={styles.input} 
                            placeholder="Buscar item"    
                        />
                    </div>

                </div>
                
                <div className={styles.container}>
                    {/* <button className={styles.secondaryButton}>
                        <ShoppingCartSimple color="#FFF" size={20} />
                        Carrinho
                    </button> */}

                    <button className={`${styles.userButton} ${styles.secondaryButton}`}>
                        Kadson
                        <User size={20} />
                    </button>
                </div>

            </header>


        
        </>
    )
}