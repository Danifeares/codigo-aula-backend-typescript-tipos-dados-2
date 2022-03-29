const json = JSON.stringify(['Guido', 'Vidal', 'Dani', 'Ruli']);

function converterJSON(info: string): unknown {
    return JSON.parse(info);
}

const jsonConvertido = converterJSON(json) as string[];

console.log(jsonConvertido[1]);

