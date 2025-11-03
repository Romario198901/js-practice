// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector("body");
console.log(bodyElem);
// 2 - отримай елемент id="title" і виведи його в консоль;
const heading = document.querySelector("#title");
console.log(heading);
// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topics = document.querySelectorAll("[data-topic]");
console.log(topics);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

console.log(topics[0]);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(topics[topics.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log(heading.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const headings = document.querySelectorAll("h3");
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
headings.forEach((heading) => heading.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigation = document.querySelector('[data-topic="navigation"]');
console.log(navigation);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigation.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
navigation.querySelector("p").textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const manipulation = document.querySelector(`li[data-topic=${currentTopic}]`);
console.log(manipulation);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manipulation.style.backgroundColor = "blue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedHeading = document.querySelector(".completed");
console.log(completedHeading);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const el = completedHeading.closest("li");
el.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newParagraph = document.createElement("p");
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
const container = document.querySelector(".number-container");
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const markup = [];
for (let i = 0; i < 100; i++) {
  const divEl = document.createElement("div");
  divEl.classList.add("number");
  const randomNum = randomNumber();
  divEl.textContent = randomNum;
  if (randomNum % 2 === 0) {
    divEl.classList.add("even");
  } else {
    divEl.classList.add("odd");
  }
  markup.push(divEl);
}
container.append(...markup);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('.js-contact-form');
const input = document.querySelector('.js-username-input');
const checkbox = document.querySelector('.js-policy-checkbox');
const output = document.querySelector('.js-username-output');
input.addEventListener('input', () => {
  if(input.value.length < 6) {
    input.classList.add('error');
    output.textContent = 'Anonymous';
  }
  else {
    input.classList.remove('error');
    input.classList.add('success');
output.textContent = input.value;

  }
});
input.addEventListener('focus', () => {
  if(input.value.length === 0) {
    input.style.outline = '3px solid red';
  }
  else {
   input.style.outline = '3px solid green';
  }
});
input.addEventListener('blur', () => {
  if(input.value.length === 0) {
    input.style.outline = '3px solid red';
  }
  else {
   input.style.outline = '3px solid lime';
  }
});
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const userName = form.elements.userName.value.trim();
  const isAccepted = form.elements.accept.checked;

  if (userName === '' || !isAccepted) {
    console.log('Fill the fields');
    output.textContent = 'Anonymous';
    return;
  }

  const userData = {
    name: userName,
    accept: isAccepted
  };

  console.log(userData);
  output.textContent = userName;

  form.reset(); 
  output.textContent = 'Anonymous';
});
