function addNewTarefa(){
  var List = document.getElementById("List");
  var text = document.getElementById("nome da tarefa").value;
  if(text.length === 0) {
    alert("Essa Tarefa Precisa Conter Mais de 1 Caracter");
    return;
  }
  var ListItem = document.createElement("li");
  ListItem.className = "list-item"
  
  const textElement = document.createTextNode(text);
  ListItem.appendChild(textElement)
  List.appendChild(ListItem)
}

function deleteTarefa(){
    var List = document.getElementById("List");
    List.innerHTML = "";
}

