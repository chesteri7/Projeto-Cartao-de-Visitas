function tratarErroElancar(erro) {
    throw new Error("...")
}

function ImprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUppercase() + "!!!")
    } catch (e) {
        tratarErroElancar(e)
    }

}

const obj = { nome: "Roberto" }
ImprimirNomeGritado(obj)