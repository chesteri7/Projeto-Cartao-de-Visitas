// Armazenando uma função dentro de uma Variavel
const ImprimirSoma = function(a,b){
console.log(a+b);
}

ImprimirSoma(2, 3);

// Armazenando uma Função Arrow em uma Variavel

const soma = (a,b) => {
    return a+b
}

console.log(soma(2,3));

// Retorno Implicito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3));

