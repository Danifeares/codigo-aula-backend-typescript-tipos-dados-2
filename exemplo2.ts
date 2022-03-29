let algumaCoisa: number | string | boolean;

algumaCoisa = true;

const cadastroUsuarios = (usuarios: { nome: string } | { nome: string }[]) => {
    return usuarios;
}

const usuario = {
    nome: 'Guido'
}

const usuarios = [
    {
        nome: 'Ruli'
    },
    {
        nome: 'Diego'
    }
]

cadastroUsuarios(usuarios);