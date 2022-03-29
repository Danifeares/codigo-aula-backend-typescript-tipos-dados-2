let nome: 'guido';
nome = 'guido';

type Transacao = {
    numero: number,
    validade: string,
    cvv: number,
    nome: string,
    tipo: 'credito' | 'debito'
}

const transacao = (transacao: Transacao) => {
    transacao.tipo = 'debito'
}