type Email = string;

type Endereco = {
    rua: string,
    cep: string,
    cidade: string
}

type Usuario = {
    nome: string,
    idade: number,
    email: Email,
    cpf: string,
    endereco: Endereco
}

const cadastro = (info: Usuario) => {
    info.endereco
}
