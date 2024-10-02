function addNewTarefa(){
  // Obter o elemento ul
  var List = document.getElementById("List");
  // Obter o texto do input
  var text = document.getElementById("nome da tarefa").value;
  // isso verifica se o texto escrito no input tem mais de 1 caracter
  if(text.length === 0) {
    alert("Essa Tarefa Precisa Conter Mais de 1 Caracter");
    return;
  }
  // isso cria um lista de itens
  var ListItem = document.createElement("li");
  ListItem.className = "list-item"
  // iiso cria um texto na pagina e adiciona  na lista
  const textElement = document.createTextNode(text);
  ListItem.appendChild(textElement)
  List.appendChild(ListItem)
  document.getElementById("nome da tarefa").value ="";
}

function deleteTarefa(){
  // isso apaga todo texto criado na lista
    var List = document.getElementById("List");
    List.innerHTML = "";
}

