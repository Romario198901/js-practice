// Завдання 1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
const styles = ["jazz", "blues"];
styles.push("rock-n-roll");
styles.splice(1, 1, "classic");
console.log(styles);

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}-${array[i]}`);
  }
}
logItems(styles);

// Завдання 2:
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//   const userLogin = prompt("Enter your login...");
//   if (array.includes(userLogin)) {
//     alert(`Welcome ${userLogin}`);
//   } else {
//     alert("User not found");
//   }
// }
// checkLogin(logins);

//Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
function caclculateAverage() {
    const args = Array.from(arguments);
    let sum = 0;
    for(const arg of args) {
        if(typeof arg === 'number') {
            sum += arg;
        }
    }
    return Math.round(sum / args.length);
}
console.log(caclculateAverage(5, 10, 19, 3, 4, 7, 12, 6, 15, 21));

//Завдання 4
// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
function getSumofNeighborNumbersFromArray(array) {
    const sumOFNumbers = [];
    for(let i = 0; i < array.length - 1; i++) {
        sumOFNumbers.push(array[i] + array[i+1]);
    }
    return sumOFNumbers;
}
console.log(getSumofNeighborNumbersFromArray(someArr));
// Завдання 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
function findSmallestNumber(numbers) {
    if(Array.isArray(numbers)) {
        const minNumber = Math.min(...numbers);
        return minNumber;
    }
}
console.log(findSmallestNumber(numbers));
// Завдання 6
// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
function findLongestWord(string) {
    const arrFromString = string.split(" ");
    let longestWord = "";
    for (const word of arrFromString) {
         if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("London is the capital of Great Britain"));
