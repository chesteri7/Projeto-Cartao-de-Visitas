// Função sem Retorno

function ImprimirSoma( a, b){
    console.log( a+b)
}

ImprimirSoma(2, 3);
ImprimirSoma(2);
ImprimirSoma(2, 10, 5, 4, 7);
ImprimirSoma();

// Função com Retorno
function soma(a,b=1){
    return a+b
}
console.log(soma(2,3));
console.log(soma(2));
console.log(soma());