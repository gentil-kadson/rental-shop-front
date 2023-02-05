import api from "@/services/api";

export interface EnderecoForm {
    id?: number;
    logradouro: string,
    cidade: string,
    estado: string,
    pais: string,
}

export const postCadastrarEndereco = async ({
    logradouro,
    cidade,
    estado, 
    pais
} : EnderecoForm) => {
    try {
        return await api.post<EnderecoForm>("enderecos/", {logradouro, cidade, estado, pais});
    } catch (error) {
        console.log(error) 
    }
}