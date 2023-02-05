import TitleLogoAndP from "@/components/TitleLogoAndP";
import styles from "@/styles/CadastroUsuario.module.css";

export default function CadastrarUsuario() {
    return(
        <div className={styles.body}>

          <TitleLogoAndP pText="Pegue o seu ingresso para viajar em poucos passos (ou bits...)"/>

            <div className={styles.divFormLogin}>

                <form action="">
                    
                    <div className={styles.formLoginLeft}>

                        <label className={styles.labelsForm}>Nome: </label> 
                        <input type="text" name="nome" className={styles.inputsForm}/>

                        <label className={styles.labelsForm}>CPF/CNPJ: </label> 
                        <input type="text" name="cpfcnpj" className={styles.inputsForm}/>

                        <label className={styles.labelsForm}>E-mail: </label> 
                        <input type="text" name="e-mail" className={styles.inputsForm}/>

                        <label className={styles.labelsForm}>Senha: </label> 
                        <input type="text" name="senha" className={styles.inputsForm}/>

                        <label className={styles.labelsForm}>Tipo de conta: </label> 
                        <select name="tipodeconta" className={styles.inputsForm}>
                            <option value="locador">Locador</option>
                            <option value="locatario">Locatário</option>
                        </select>
                    
                    </div>

                    <div className={styles.formLoginRight}>

                        <label className={styles.labelsForm}>Logradouro: </label> 
                        <input type="text" name="logradouro" className={styles.inputsForm}/>

                        <label className={styles.labelsForm}>Cidade: </label> 
                        <input type="text" name="cidade" className={styles.inputsForm}/>

                        <label className={styles.labelsForm}>Estado: </label> 
                        <input type="text" name="estado" className={styles.inputsForm}/>

                        <label className={styles.labelsForm}>País: </label> 
                        <input type="text" name="pais" className={styles.inputsForm}/>
                        
                    </div>

                    <div className={styles.formLoginButton}>

                    <input type="submit" value="Cadastrar" className={styles.buttonForm}/>

                    </div>

                </form>

            </div>
        </div>
    )
}