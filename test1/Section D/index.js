let list = [];
const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const listElement = document.getElementById("list");
const deleteBtn = document.getElementById("delete-btn");

addBtn.addEventListener("click", addItem);
deleteBtn.addEventListener("click", deleteItem);

function addItem() {
  const item = itemInput.value.trim();
  if (item) {
    list.push(item);
    renderList();
    itemInput.value = "";
  }
}

function deleteItem() {
  list.pop();
  renderList();
}

function renderList() {
  listElement.innerHTML = "";
  list.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${item}`;
    listElement.appendChild(listItem);
  });
}
