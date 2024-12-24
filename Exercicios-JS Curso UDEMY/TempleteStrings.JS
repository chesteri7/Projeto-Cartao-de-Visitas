const nome = "Rebeca"
const concatenacao = "ola " + nome + "!"
const template = `
ola
${nome}! `
console.log ( concatenacao, template)

// Expressões...
console.log ( `1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)
