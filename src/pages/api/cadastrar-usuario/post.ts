import api from "@/services/api";

export interface UsuarioForm {
    id?: number;
    nome: string,
    cpf_cnpj: string,
    tipo: string,
    email: string,
    senha: string,
    logado: boolean,
    endereco?: number;
}

export const postCadastrarUsuario = async ({
    nome,
    cpf_cnpj,
    tipo,
    email,
    senha,
    logado,
    endereco
} : UsuarioForm) => {
    try {
        return await api.post<UsuarioForm>("usuarios/", {nome, cpf_cnpj, tipo, email, senha, logado, endereco});
    } catch (error) {
        console.log(error) 
    }
}