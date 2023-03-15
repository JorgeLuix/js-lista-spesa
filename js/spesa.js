const shoppingList = [
    'Birra', 
    'Coca-Cola', 
    'Prosciuto', 
    'Formaggio', 
    'Arance',
    'Caffe',
    'Biscotti'
];

const shoppingContainer = document.getElementById('ListaSpesa');

let i = 0;

while (i < shoppingList.length) {
  const listItem = document.createElement('li');
  listItem.innerText = shoppingList[i];
  shoppingContainer.appendChild(listItem);
  i++;
}
