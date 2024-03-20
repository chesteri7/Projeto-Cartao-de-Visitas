const pessoa ={
    nome: "Chestao",
    idade: 37,
    endereco:{
        logradouro: " Rua arroio campo bom",
        numero: 65
    }

}
const { nome, idade} = pessoa
console.log( nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)
