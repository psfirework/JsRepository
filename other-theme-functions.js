//Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
function makeCounter() {
    let count = 0;

    function counter() {
        return count++
    }

    counter.set = function (c) {
        return count = c;
    };
    counter.decrease = function () {
        return count--;
    };
    return counter;
}

//Напишите функцию sum, которая бы работала следующим образом:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// эту я частично смотрела в лерне, бо она очень странная

function sum(a) {
    function f(b) {
        a += b;
        return f;
    }

    f.toString = function () {
        return a;
    };

    return f;
}

//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
    let inteval = setInterval(function () {
        (from === to) ? clearInterval(inteval) : console.log(from);
        from++;
    }, 1000)
}

function printNumbersTimeout(from, to) {
    let timer = setTimeout(function time() {
        console.log(from);
        timer = setTimeout(time, 1000);
        if (from === to) {
            clearInterval(timer)
        }
        from++;
    }, 1000);
}
printNumbersTimeout(2,6)
