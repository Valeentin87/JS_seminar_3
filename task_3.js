// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let numbersArray = [];
let inputValue;
for (let index = 0; index < 3; index++) {
  inputValue = prompt("Введите очередное число с клавиатуры: ");
  if (Number(inputValue)) {
    numbersArray.push(inputValue);
  } else {
    alert("Вы ввели не число - перезапустите программу!!!");
    break;
  }
}
numbersArray = numbersArray.sort(function (a, b) {
  return a - b;
});
console.log("максимальное число в массиве: ", numbersArray[2]);
alert(`максимальное число в массиве: ${numbersArray[2]}`);
