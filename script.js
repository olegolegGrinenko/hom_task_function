/*Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!! */

const enterNumber = function () {
  while (true) {
    //const num = prompt("enter number from 5 to 10");
    if (isNaN(Number(num)) || num === null || num === "" || num === " ") {
      console.log("error");
      continue;
    }
    if (Number(num >= 5 && Number(num <= 10)));
    {
      console.log(num);
      return;
    }
  }
};
console.log(enterNumber());

//Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.
//(* - це повинна бути функція)

const count = function (START, END) {
  START = 0;
  END = 100;
  for (let i = END; i >= START; i--) {
    if (i % 2 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};
console.log(count());

/*Створити функцію конструктор, яка описує користувача:
-ім'я
-прізвище
-вік
- метод, який логує ім'я та прізвище разом */

function UserInfo(name, surname, age, fullName) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    console.log(this.name + this.surname);
  };
}

const userInfo = new UserInfo("Oleg", "Grinenko", 24, "Oleg", "Grinenko");
console.log(userInfo);
userInfo.fullName();
