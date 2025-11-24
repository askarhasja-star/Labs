Тема: Коллекции и работы со структурами данных
Цель работы: Освоить использование встроенных коллекций языка JavaScript (массивы, множества, словари,
карты) и научиться применять их для хранения, обработки и фильтрации данных
акрепить навыки оптимизации кода при работе с динамическими структурами данных.
Краткое описание функционала: С помощью приложения можно добавлять элементы в коллекцию, удалять элементы, искать элемент по названию. Позволяет смотреть на все элементы в магазине электроники.
Структура проекта:
index.html
README.md
Листинг кода:
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Магазин электроники</title>
<style>
  body{
    font-family: Arial, sans-serif;
    background:#eef2f7;
    padding:20px;
  }
  .container{
    background:white;
    padding:20px;
    border-radius:10px;
    max-width:700px;
    margin:auto;
  }
  input, select, button{
    padding:8px;
    margin:5px;
  }
  .item{
    border:1px solid #ccc;
    padding:10px;
    border-radius:6px;
    margin:5px 0;
    background:#f8f9fa;
  }
</style>
</head>
<body>
<div class="container">
  <h2>Магазин электроники — Работа с коллекциями</h2>

  <h3>Добавить товар</h3>
  <input id="name" placeholder="Название">
  <input id="price" type="number" placeholder="Цена">
  <input id="category" placeholder="Категория">
  <button onclick="addItem()">Добавить</button>

  <h3>Поиск товара</h3>
  <input id="search" placeholder="Введите название">
  <button onclick="searchItem()">Найти</button>

  <h3>Сортировка</h3>
  <select id="sortField">
    <option value="name">По названию</option>
    <option value="price">По цене</option>
    <option value="category">По категории</option>
  </select>
  <button onclick="sortItems()">Сортировать</button>

  <h3>Все товары</h3>
  <div id="list"></div>
</div>

<script>
  let items = [];                 
  let itemsMap = new Map();       
  let categories = new Set();     
  let nextId = 1;                 

  function addItem() {
    const name = document.getElementById('name').value.trim();
    const price = Number(document.getElementById('price').value);
    const category = document.getElementById('category').value.trim();

    if(!name || !price || !category){
      alert("Заполните все поля!");
      return;
    }

    const item = {
      id: nextId++,
      name,
      price,
      category
    };

    items.push(item);         
    itemsMap.set(item.id, item);  
    categories.add(category);     

    showItems();
  }

  function showItems(list = items) {
    const container = document.getElementById('list');
    container.innerHTML = "";

    list.forEach(item => {
      const div = document.createElement('div');
      div.className = "item";
      div.innerHTML = `
        <b>${item.name}</b> — ${item.price} тг (${item.category})
        <br>
        <button onclick="deleteItem(${item.id})">Удалить</button>
      `;
      container.appendChild(div);
    });
  }

  function deleteItem(id) {
    items = items.filter(item => item.id !== id); 
    itemsMap.delete(id);                          
    showItems();
  }

  function searchItem() {
    const text = document.getElementById('search').value.trim().toLowerCase();
    const found = items.filter(item =>
      item.name.toLowerCase().includes(text)
    );
    showItems(found);
  }

  function sortItems() {
    const field = document.getElementById('sortField').value;

    items.sort((a, b) => {
      if (field === "price") return a.price - b.price;
      return a[field].localeCompare(b[field]);
    });

    showItems();
  }

  showItems();
</script>

</body>
</html>
Скриншот работы программы: ![Скриншот приложения](./screenshots/Screenshot%20(1).png) ![Скриншот приложения](./screenshots/Screenshot%20(2).png) ![Скриншот приложения](./screenshots/Screenshot%20(3).png)
Ссылка на репозитории: https://github.com/askarhasja-star/Labs