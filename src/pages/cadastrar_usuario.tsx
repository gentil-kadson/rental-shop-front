import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import { EnderecoForm, postCadastrarEndereco } from "./api/cadastrar-endereco/post";
import { postCadastrarUsuario, UsuarioForm } from "./api/cadastrar-usuario/post";

import TitleLogoAndP from "@/components/TitleLogoAndP";

import styles from "@/styles/CadastroUsuario.module.css";

export default function CadastrarUsuario() {

    const router = useRouter()

    const [nome, setNome] = useState<string>('');
    const [cpfcnpj, setCpfcnpj] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [tipodeconta, setTipodeconta] = useState<string>('1');
    const [logradouro, setLogradouro] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [pais, setPais] = useState<string>('');


    async function handleCreateUsuario (event : FormEvent) {
        event.preventDefault()
        
        try {
            const bodyEnderecoForm : EnderecoForm = {
                logradouro: logradouro,  
                cidade: cidade,
                estado: estado,
                pais: pais,
            }
    
            const dataEndereco = await postCadastrarEndereco(bodyEnderecoForm)
            
            setLogradouro('')
            setCidade('')
            setEstado('')
            setPais('')
    
            const bodyUsuario : UsuarioForm = {
                nome: nome,  
                cpf_cnpj: cpfcnpj,
                tipo: tipodeconta,
                email: email,
                senha: senha,
                logado: false,
                endereco: dataEndereco?.data.id,
            }
            await postCadastrarUsuario(bodyUsuario)
    
            setNome('')
            setCpfcnpj('')
            setEmail('')
            setSenha('')
            
            alert("Usuário cadastrado com sucesso!")
        } catch (error) {
            alert(error)
        } finally {
            router.push('./login')
        }

    }

    return(
        <div className={styles.body}>

          <TitleLogoAndP pText="Pegue o seu ingresso para viajar em poucos passos (ou bits...)"/>

            <div className={styles.divFormLogin}>

                <form onSubmit={handleCreateUsuario}>
                    
                    <div className={styles.formLoginLeft}>

                        <label className={styles.labelsForm}>Nome: </label> 
                        <input 
                          type="text" 
                          name="nome" 
                          required={true} 
                          onChange={event => setNome(event.target.value)} 
                          className={styles.inputsForm} 
                          value={nome}
                        />

                        <label className={styles.labelsForm}>CPF/CNPJ: </label> 
                        <input 
                          type="text" 
                          name="cpfcnpj" 
                          required={true} 
                          onChange={event => setCpfcnpj(event.target.value)} 
                          className={styles.inputsForm} 
                          value={cpfcnpj}
                        />

                        <label className={styles.labelsForm}>E-mail: </label> 
                        <input 
                          type="text" 
                          name="email" 
                          required={true} 
                          onChange={event => setEmail(event.target.value)} 
                          className={styles.inputsForm} 
                          value={email}
                        />

                        <label className={styles.labelsForm}>Senha: </label> 
                        <input 
                          type="password" 
                          name="senha" 
                          required={true} 
                          onChange={event => setSenha(event.target.value)} 
                          className={styles.inputsForm} 
                          value={senha}
                        />

                        <label className={styles.labelsForm}>Tipo de conta: </label> 
                        <select 
                          name="tipodeconta" 
                          className={styles.inputsForm} 
                          onChange={event => setTipodeconta(event.target.value)}
                        >
                            <option value="1">Locador</option>
                            <option value="2">Locatário</option>
                        </select>
                    
                    </div>

                    <div className={styles.formLoginRight}>

                        <label className={styles.labelsForm}>Logradouro: </label> 
                        <input 
                          type="text" 
                          name="logradouro" 
                          required={true} 
                          onChange={event => setLogradouro(event.target.value)} 
                          className={styles.inputsForm} 
                          value={logradouro}
                        />

                        <label className={styles.labelsForm}>Cidade: </label> 
                        <input 
                          type="text" 
                          name="cidade" 
                          required={true} 
                          onChange={event => setCidade(event.target.value)}  
                          className={styles.inputsForm} 
                          value={cidade}
                        />

                        <label className={styles.labelsForm}>Estado: </label> 
                        <input 
                          type="text" 
                          name="estado" 
                          required={true} 
                          onChange={event => setEstado(event.target.value)} 
                          className={styles.inputsForm} 
                          value={estado}
                        />

                        <label className={styles.labelsForm}>País: </label> 
                        <input 
                          type="text" 
                          name="pais" 
                          required={true} 
                          onChange={event => setPais(event.target.value)} 
                          className={styles.inputsForm} 
                          value={pais}
                        />
                        
                    </div>

                    <div className={styles.formLoginButton}>

                        <input 
                          type="submit" 
                          value="Cadastrar"
                          className={styles.buttonForm}
                        />

                    </div>

                </form>

            </div>
        </div>
    )
}