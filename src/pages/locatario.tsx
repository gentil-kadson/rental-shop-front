import Header from "@/components/Header";
import Title from "@/components/Title";
import CreateItemModal from "@/components/CreateItemModal";

import styles from "../styles/locatario.module.css"

export default function Locatario() {
    return (
        <>
            <Header />

            <section className={styles.sectionMyItems}>
                <Title title="Meus itens" />
                
                <CreateItemModal />

            </section>

        </>
    )
}