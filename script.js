//Task 1 Людина вводить номер місяця, ви виводите пору року
const mounth = prompt("Write a mounth : ");
switch (mounth) {
  case "1":
  case "2":
  case "12":
    console.log("winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("fall");
    break;
  default:
    console.log("404 try again");
    break;
}

//Task 1.1 Людина вводить номер місяця, ви виводите пору року
const mounth1 = prompt("Write a mounth : ");
if (mounth1 === "12" || mounth1 === "1" || mounth1 === "2") {
  console.log("winter");
} else if (mounth1 === "3" || mounth1 === "4" || mounth1 === "5") {
  console.log("spring");
} else if (mounth1 === "6" || mounth1 === "7" || mounth1 === "8") {
  console.log("summer");
} else if (mounth1 === "9" || mounth1 === "10" || mounth1 === "11") {
  console.log("fall");
} else {
  console.log("404 try again");
}

//Task 2 Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
const userAge = Number(prompt("Write an Age: "));
if (userAge === 0 && userAge <= 1) {
  console.log("baby");
} else if (userAge >= 2 && userAge <= 5) {
  console.log("kinder");
} else if (userAge >= 6 && userAge <= 11) {
  console.log("child");
} else if (userAge >= 12 && userAge <= 17) {
  console.log("teenager");
} else if (userAge >= 18 && userAge <= 64) {
  console.log("adult");
} else if (userAge >= 65 && userAge <= 99) {
  console.log("oldman");
} else if (userAge >= 100 && userAge <= 150) {
  console.log("super!");
} else {
  console.log("404 try again");
}

//Task 3 Людина вводить годину([0-23]), ви виводите привітання
const hour = Number(prompt("Write a hour : "));
if (hour === 7 ||
  hour === 8 ||
  hour === 9 || 
  hour === 10 
) {
  console.log("good morning");
} else if (
  hour === 11 ||
  hour === 12 ||
  hour === 13 ||
  hour === 14 ||
  hour === 15 ||
  hour === 16 ||
  hour === 17
) {
  console.log("good day");
} else if (
  hour === 18 ||
  hour === 19 ||
  hour === 20 ||
  hour === 21 ||
  hour === 22
) {
  console.log("good evening");
} else if (
  hour === 0 ||
  hour === 1 ||
  hour === 2 ||
  hour === 3 ||
  hour === 4 ||
  hour === 5 ||
  hour === 6
) {
  console.log("good night");
} else  {
  console.log("404 try again");
}

//Task 3.1 Людина вводить годину([0-23]), ви виводите привітання
const hour1 = prompt("Write a hour : ");
switch (hour1) {
  case "23":
  case "0":
  case "1":
  case "2":
  case "3":
  case "4":
  case "5":
  case "6":
    console.log("good night");
    break;
  case "7":
  case "8":
  case "9":
  case "10":
    console.log("good morning");
    break;
  case "11":
  case "12":
  case "13":
  case "14":
  case "15":
  case "16":
  case "17":
    console.log("good day");
    break;
  case "18":
  case "19":
  case "20":
  case "21":
  case "22":
    console.log("good evening");
    break;
  default:
    console.log("404 try again");
    break;
}