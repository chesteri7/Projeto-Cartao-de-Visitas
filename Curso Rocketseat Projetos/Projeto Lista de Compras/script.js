// Seleciona os elementos da DOM
const newItemInput = document.getElementById('new-item');
const addButton = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list');
const alertBox = document.getElementById('alert');
const closeAlertButton = document.getElementById('close-alert');

// Função para adicionar um novo item à lista
function addItem() {
    const itemText = newItemInput.value.trim();

    if (itemText === '') {
        alert('Por favor, insira um item.');
        return;
    }

    // Cria o elemento da lista
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    listItem.innerHTML = `
        <input type="checkbox">
        <span>${itemText}</span>
        <button class="delete-button">&#128465;</button>
    `;

    // Adiciona o evento de remoção ao botão
    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => removeItem(listItem));

    // Adiciona o item à lista
    shoppingList.appendChild(listItem);

    // Limpa o campo de entrada
    newItemInput.value = '';
}

// Função para remover um item da lista
function removeItem(item) {
    shoppingList.removeChild(item);
    showAlert();
}

// Função para mostrar o alerta
function showAlert() {
    alertBox.classList.remove('hidden');

    // Esconde o alerta automaticamente após 3 segundos
    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, 3000);
}

// Fecha o alerta manualmente
closeAlertButton.addEventListener('click', () => {
    alertBox.classList.add('hidden');
});

// Adiciona o item quando o botão é clicado
addButton.addEventListener('click', addItem);

// Adiciona o item ao pressionar Enter no campo de texto
newItemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});
