// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
let data = prompt("Введите с клавиатуры число: ");
if (!Number(data)) {
  alert("Значение задано не верно");
}
let nalog = (salary) => {
  let resultSalary = salary - 0.13 * salary;
  console.log(
    `Размер заработной платы за вычетом налогов равен: ${resultSalary}`
  );
}

nalog(data);
