// Task 1. написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).Значення для перевірки функції вводить користувач.
let userInput = prompt("введите чиcлo: ");

if (
  isNaN(Number(userInput)) ||
  userInput === null ||
  userInput === "" ||
  userInput === " "
) {
  console.log("error");
}
function showOddEven(value) {
  if (userInput % 2 === 0) {
    return "odd";
  }
  return "even";
}
console.log(showOddEven()); 

// Task 2. написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

const getMaxCompare = function (val1 = 12, val2 = "hello") {
    if ((typeof val1 === typeof val2) && ((val1 > val2 || val2 > val1)) ) {
      return 
    }
    if ((val1 === typeof val2) || (val1 ===  val2)) {
      return null
    } 
    };
    console.log(getMaxCompare());