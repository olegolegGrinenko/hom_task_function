// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить). В користувача є 3 спроби,зробити двома способами через while і for. * це повинна бути функція(можливо і не одна).

//Variant 1
let count = 0;
while (true) {
  const result = Number(prompt("enter number "));
  count++;
  if (count > 3) {
    console.log("error");
    break;
  }
  if (result > 15 && result < 35 && result % 6 === 0) {
    console.log("welcome");
    break;
  } else {
    console.log("try again");
  }
}
console.log(count);

//variant #2
for (let i = 0; i < 4; i++) {
  const result = Number(prompt("enter number"));
  if (result > 15 && result < 35 && result % 6 === 0) {
    console.log("welcome");
    break;
  }
}
