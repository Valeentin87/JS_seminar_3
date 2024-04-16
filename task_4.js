/*Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/
function sum(firstValue, secondValue) {
    return Number(firstValue) + Number(secondValue);
}

function subtraction(firstValue, secondValue) {
    if (secondValue > firstValue) {
        return secondValue - firstValue;
    }
    return firstValue - secondValue;
}

function divide(firstValue, secondValue) {
    return firstValue / secondValue;
}

function multyply(firstValue, secondValue) {
    return firstValue * secondValue;
}
first = prompt('введите первое значение: ');
second = prompt('введите второе значение: ')
console.log(`сумма равна: ${sum(first,second)}
разность равна:  ${subtraction(first,second)}
произведение равно: ${multyply(first, second)}
частное равно: ${divide(first, second)}`);