/*Написати функцію, яка повертає об'єкт родина з властивостями, які мають вигляд:
ключ - ім'я члена родини, а значення - хто із членів родини
(мінімум родина з 3 осіб)
Інформацію про особу запитувати у користувача.
Вивести отриманий об'єкт за допомогою for..in */

const createFamily = function () {
  const family = {};
  for (let i = 0; i < 3; i++) {
    const key = prompt("введіть ім'я члена родини");
    const keyValue = prompt("введіть ким з членів родини є");
    if (
      key !== "" &&
      key !== " " &&
      key !== null &&
      keyValue !== "" &&
      keyValue !== " " &&
      keyValue !== null
    ) {
      family[key] = keyValue;
    } 
    else console.log("try again");
  ;
  }
  return family;
};

const userFamily = createFamily();
for (const key in userFamily) {
  console.log(`${key} : ${userFamily[key]}`);
}
