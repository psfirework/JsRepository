// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
class WorkerEs6 {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.days * this.rate;
    }
}

function WorkerEs5(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function () {
        return this.days * this.rate;
    }
}

//Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
class WorkerEs6Get {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getRate() {
        return this._rate;
    }

    getDays() {
        return this._days;
    }

    getSalary() {
        return this._days * this._rate;
    }
}

function WorkerEs5Get(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;

    this.getName = function () {
        return this._name;
    };
    this.getSurname = function () {
        return this._surname;
    };
    this.getRate = function () {
        return this._rate;
    };
    this.getDays = function () {
        return this._days;
    };
    this.getSalary = function () {
        return this._days * this._rate;
    };
}

//Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
// Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

class WorkerEs6Set {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getRate() {
        return this._rate;
    }

    getDays() {
        return this._days;
    }

    getSalary() {
        return this._days * this._rate;
    }

    setRate(n) {
        this._rate = n;
    }

    setDays(n) {
        this._days = n;
    }
}

function WorkerEs5Set(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;

    this.getName = function () {
        return this._name;
    };
    this.getSurname = function () {
        return this._surname;
    };
    this.getRate = function () {
        return this._rate;
    };
    this.getDays = function () {
        return this._days;
    };
    this.getSalary = function () {
        return this._days * this._rate;
    };
    this.setRate = function (n) {
        this._rate = n;
    };
    this.setDays = function (n) {
        this._days = n;
    }
}

//Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву каждого слова этой строки.
class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords (str) {
        return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
}

function  MyStringEs5() {
    this.reverse = function (str) {
        return str.split("").reverse().join("");
    };

    this.ucFirst = function (str) {
        return str[0].toUpperCase() + str.slice(1);
    };
    this.ucWords = function  (str) {
        return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    };
}
//Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром
// принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true,
// если не является - то false. Кроме того, класс будет иметь следующие методы:
// метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:
class Validator {
    isEmail(email){
        return /^[a-zA-Z0-9._\-]+@[a-z]+\.[a-z]{2,3}$/.test(email);
    }
    isDomain(domain){
        return /^[a-zA-Z0-9._\-]+\.[a-z]{3}$/.test(domain);
    }
    isDate(date){
        return /^\d\d\.\d\d\.\d\d\d\d$/.test(date);
    }
    isPhone(phone){
        return /^\+\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d$/.test(phone);
    }
}

