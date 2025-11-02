// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector('body');
console.log(bodyElem);
// 2 - отримай елемент id="title" і виведи його в консоль;
const heading = document.querySelector('#title');
console.log(heading);
// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topics = document.querySelectorAll('li[data-topic]');
console.log(topics);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const topic = document.querySelector('li[data-topic');
console.log(topic);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(topics[topics.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const sibling = document.querySelector('#title').nextElementSibling;
console.log(sibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const headings = document.querySelectorAll('h3');
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
headings.forEach(heading => heading.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigation = document.querySelector('li[data-topic="navigation"]');
console.log(navigation);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigation.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const paragraph = navigation.querySelector('p');
paragraph.textContent = "Я змінив тут текст!"
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const manipulation = document.querySelector(`li[data-topic=${currentTopic}]`);
console.log(manipulation);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manipulation.style.backgroundColor = 'blue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedHeading = document.querySelector('.completed');
console.log(completedHeading);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const el = completedHeading.closest('li');
el.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newParagraph = document.createElement('p');
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
heading.append(newParagraph);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const liElem = document.createElement('li');
// const headingOFLiElem = document.createElement('h3');
// const descriptionOfLiElem = document.createElement('p');
// headingOFLiElem.textContent = "Властивість innerHTML";
// headingOFLiElem.classList.add('active');
// descriptionOfLiElem.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// liElem.prepend(headingOFLiElem);
// liElem.append(descriptionOfLiElem);
// list.append(liElem);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
list.insertAdjacentHTML(
  "beforeend",
  `
  <li>
    <h3 class="active">Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево — 
      це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
  </li>
  `
);

// 20 - очисти список
// list.innerHTML = '';

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).
const container = document.querySelector('.number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
