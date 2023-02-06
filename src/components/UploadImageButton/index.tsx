import { Upload } from "phosphor-react";

import styles from "./styles.module.css"

export default function UploadImageButton() {
    return (
        <>
            <button className={styles.button}>
                <Upload size={20} />
                Adicionar imagem
            </button>
        </>
    )
}