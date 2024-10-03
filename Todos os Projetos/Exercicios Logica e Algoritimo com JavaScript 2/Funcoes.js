// Lista de estudantes
const alunos = [
    {
        name: "Chestao Batista",
        nota1: 7.0,
        nota2: 4.0
    },
    {
        name: "Pedro Batista",
        nota1: 9.0,
        nota2: 9.0
    },
    {
        name: "Carlos Amorin",
        nota1: 7.0,
        nota2: 8.0
    },
    {
        name: "Diana Lopes",
        nota1: 6.0,
        nota2: 8.0
    }
];

function printAlunosmedia(aluno){
    return (`O Aluno ${aluno.name} possui a media de
        ${aluno.nota1 + ((aluno.nota2 / 100) / 2)}
        `)
}

for (let aluno of alunos) {
    let mediamessage = printAlunosmedia(aluno)
    alert(mediamessage)
}







