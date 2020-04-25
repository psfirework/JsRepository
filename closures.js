//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
function sum(n) {
    return function (num) {
        return num + n;
    }
}

// Сделайте набор «готовых к употреблению» фильтров:
//     inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
//     Они должны использоваться таким образом:
//     arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
};

function inArray(arr) {
    return function (a) {
        return arr.includes(a);
    };
}

//У нас есть массив объектов, который нужно отсортировать:

let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];
//То есть, чтобы вместо функции, мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.
function byField(fieldName) {
    return function (a, b) {
        return (a[fieldName] > b[fieldName]) ? 1 : -1;
    }
};