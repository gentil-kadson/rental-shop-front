import ButtonPrimary from "@/components/ButtonPrimary";
import Header from "@/components/Header";
import { Plus } from "phosphor-react";

import styles from "./styles.module.css"

export default function Locador() {
    return (
        <>
            <Header /> 

            <h1 className={styles.title}>Itens disponíveis</h1>

            <ButtonPrimary 
                title="Cadastrar item"
                icon={<Plus />}
            />
        </>
    )
}