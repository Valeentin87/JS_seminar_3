// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
let thirdDegree = (value) => {
  return value ** 3;
};
console.log(thirdDegree(2));
console.log(thirdDegree(3));
console.log('2^3 степени + 3 ^ 3 степени равно: ', thirdDegree(2) + thirdDegree(3));
