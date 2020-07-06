const FunctionalCounter = (initialValue = 0) => {
    let value = initialValue;

    const increment = () => {
        value++;
    };

    const decrement = () => {
        value--;
    };

    const getValue = () => {
        return value;
    };

    const setValue = (valueToSet) => {
        value = valueToSet;
    };

    return {
        setValue,
        getValue,
        decrement,
        increment,
    }
};

const counter = FunctionalCounter();

counter.increment();
counter.increment();


console.log(counter.getValue());

function ES5Counter(counter = 0) {
    this.counter = counter;
}

ES5Counter.prototype.increment = function () {
    this.counter++;
};

ES5Counter.prototype.getCounter = function () {
    return this.counter;
};

ES5Counter.prototype.decrement = function () {
    this.counter--;
};

const counter2 = new ES5Counter(12);

console.log(counter2.getCounter());

class ES6Counter {
     counter = 0;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

    getCounter() {
        return this.counter;
    }
}

const es6Counter = new ES6Counter();


console.log(es6Counter.getCounter());



