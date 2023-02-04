import TitleLogoAndP from "@/components/TitleLogoAndP";

import styles from "@/styles/Login.module.css";

export default function Login() {
    return(
        <div className={styles.body}>

          <TitleLogoAndP pText="Seu primeiro passo para uma viajem retrô."/>

            <div className={styles.divFormLogin}>

                <form className={styles.formLogin} action="">
                    
                    <label className={styles.labelsForm}>E-mail: </label> 
                    <input type="text" name="e-mail" className={styles.inputsForm}/>

                    <label className={styles.labelsForm}>Senha: </label> 
                    <input type="text" name="senha" className={styles.inputsForm}/>
                    
                    <p className={styles.pForm}>Ainda não tem conta? <a href="./cadastrar_usuario" className={styles.linkCadastrar}>Cadastre-se</a> </p>
                    
                    <input type="submit" value="Entrar" className={styles.buttonForm}/>

                </form>

            </div>
        </div>
    )
}