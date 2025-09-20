// const number = Number(prompt("Введіть будь-яке число"));
// if(number === 10) {
//     alert('Вірно');
// }
// else {
//     alert('Невірно');
// }







// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if(min > 0 && min < 15) {
//     alert(`${min} входить в першу чверть`);
// }
// else if(min >=15 && min < 30) {
//     alert(`${min} входить в другу чверть`);
// }
// else if (min >= 30 && min < 45) {
//     alert(`${min} входить в третю чверть`);
// }
// else {
//     alert(`${min} входить в четверту чверть`);
// }


// const num = Number(prompt("Введіть одно число на вибір: 1, 2, 3, 4"));
// let result ="";
// switch (num) {
//     case 1:
//         result = "зима";
//         break;
// case 2:
//     result = "весна";
//     break;
//     case 3:
// result = "літо";
// break;
// case 4: 
// result = "осінь";
// break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно"
//         break;
// }
// console.log(result);


// const userMinutes= Number(prompt("Введіть кількість хвилин"));

// function formatTime(totalMinutes) {
// const hours = Math.floor(totalMinutes / 60);
// const modifiedHours = String(hours).padStart(2, "0");
// const minutes = totalMinutes % 60;
// const modifiedMinutes = String(minutes).padStart(2, "0");
// return `${modifiedHours}:${modifiedMinutes}`;
// }
// console.log(formatTime(userMinutes));
// function getNumbers(min, max) {
//     let sum = 0;
//     for(let i = max; i >= min; i--) {
//         console.log(i);
//         if(i % 2 === 0) {
//     sum+=i;
//    }
//     }
//    return sum;
// }
// console.log(getNumbers(30, 70));

function min(a, b) {
    if (typeof a !== "number"  || typeof b !== "number") {
        return "Not a number!";
    }
    return Math.min(a, b);
}
console.log(min(10, 4));
console.log(min(5, '0'));