function convert() {
    let newArray = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            newArray.push(parseInt(arguments[i]));
        } else if (typeof arguments[i] === 'number') {
            newArray.push('' + arguments[i]);
        }
    }
    return newArray;
}

convert();

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    let newArray = [];
    executeforEach(arr, function (el) {
        newArray.push(func(+el));
    });
    return newArray;
}

function filterArray(arr, func) {
    let newArray = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            newArray.push(+el);
        }
    });
    return newArray;
}

filterArray();

function flipOver(str) {
    let newArray = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newArray += str[i];
    }
    return newArray;
}

flipOver();

function makeListFromRange(range) {
    let newArray = [];
    for (let i = range[0]; i <= range[1]; i++) {
        newArray.push(i);
    }
    return newArray;
}

makeListFromRange();

const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];


function getArrayOfKeys(arr, key) {
    let newArray = [];
    executeforEach(arr, function (el) {
        newArray.push(el[key]);
    });
    return newArray;
}

getArrayOfKeys();

function substitute(arr) {
    let newArray = [];
    const TWEN = 20;
    const TEN = 10;
    mapArray(arr, function (el) {
        if (el < TWEN || el > TEN) {
            newArray.push('*');
        } else {
            newArray.push(el);
        }
    });
    return newArray;
}

substitute();

function getPastDay(currentDate, days) {
    let date = new Date(currentDate);
    let pastDate = new Date(date);

    pastDate.setDate(date.getDate() - days);
    return pastDate.getDate();
}

getPastDay();

function formatDate(time) {
    const TEN = 10;
    let min = time.getMinutes() < TEN ? '0' + time.getMinutes() : time.getMinutes(),
        hour = time.getHours() < TEN ? '0' + time.getHours() : time.getHours();

    return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${hour}:${min}`;
}

formatDate();