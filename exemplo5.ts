const cadastro = (numero: string | number) => {
    let resultado: string | number;

    if (typeof numero === 'string') {
        resultado = numero.toUpperCase();
    } else {
        resultado = numero.toFixed(2);
    }

    console.log(resultado);
}

cadastro('Guido')
cadastro((2500 / 100))