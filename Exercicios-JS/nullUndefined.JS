let valor // não Inicializada
console.log ( valor);

valor = null // Ausencia de valor
console.log( valor);

const produto = {}
console.log( produto.preco);
console.log( produto);
produto.preco = 3.50
console.log( produto);
produto.preco = undefined
console.log(!!produto.preco);
produto.preco = null
