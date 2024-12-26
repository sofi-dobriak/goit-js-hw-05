'use strict';

//Task 1
//Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна обчислити суму чисел у масиві та передати результат у колбек.

console.log('Task #1');

function sumArray(numbers, callback) {
    return callback(numbers);
}

function getSum(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

// console.log(sumArray([5, 10, 15], getSum));
// console.log(sumArray([50, 10, 7], getSum));

//Task 2
//Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.

console.log(' ');
console.log('Task #2');

function doubleArray(numbers, callback) {
    return callback(numbers);
}

function getDouble(numbers) {
    const doubleArray = [];

    for (let number of numbers) {
        doubleArray.push(number * 2);
    }

    return doubleArray;
}

// console.log(doubleArray([5, 10, 15], getDouble));

//Task 3
//Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.

console.log(' ');
console.log('Task #3');

function filterWords(words, condition, callback) {
    const filterWords = [];

    for (const word of words) {
        if (condition(word)) {
            filterWords.push(word);
        }
    }
    return callback(filterWords);
}

function isLongString(word) {
    return word.length > 4;
}

function logWords(filterWords) {
    return filterWords;
}

const words = ['short', 'supercalifragilisticexpialidocious', 'longword', 'tiny', 'elephant'];

// console.log(filterWords(words, isLongString, logWords));

//Task 4
//Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.

console.log(' ');
console.log('Task #4');

function capitalizeStrings(strings, callback) {
    const result = [];

    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i].charAt(0).toUpperCase() + strings[i].slice(1));
    }

    return callback(result);
}

function logArray(array) {
    return array;
}

const stringsArray = ['short', 'longword', 'tiny', 'elephant'];
// console.log(capitalizeStrings(stringsArray, logArray));

//Task 5
//Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.

console.log(' ');
console.log('Task #5');

function sortNumbers(numbers, callback) {
    const result = numbers.toSorted((a, b) => a - b);
    return callback(result);
}

function logNumbers(numbers) {
    return numbers;
}

// console.log(sortNumbers([5, 7, 13, 25, 33, 8], logNumbers));

//Task 6
//Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.

console.log(' ');
console.log('Task #6');

function findMax(numbers, callback) {
    const maxNumber = Math.max(...numbers);
    return callback(maxNumber);
}

function logMaxNumber(number) {
    return number;
}

// console.log(findMax([5, 7, 13, 25, 33, 8], logMaxNumber));

//Task 7
//Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.

console.log(' ');
console.log('Task #7');

function checkEven(numbers, callback) {
    for (const number of numbers) {
        if (number % 2 === 0) {
            return callback(true);
        }
    }

    return callback(false);
}

function logEvenArray(evenArray) {
    return evenArray;
}

// console.log(checkEven([5, 7, 13, 25, 33], logEvenArray));
// console.log(checkEven([2, 4, 6, 8], logEvenArray));

//Task 8
//Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.

console.log(' ');
console.log('Task #8');

function concatStrings(strings, separator, callback) {
    const joinString = strings.join(separator);
    return callback(joinString);
}

function logJoinStrings(joinString) {
    return joinString;
}

// console.log(concatStrings(['short', 'longword', 'tiny', 'elephant'], '-', logJoinStrings));

//Task 9
//Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.

console.log(' ');
console.log('Task #9');

function parseNumbers(strings, callback) {
    const numbersArray = [];

    for (const string of strings) {
        numbersArray.push(Number(string));
    }

    return callback(numbersArray);
}
function logNumbersArray(numbersArray) {
    return numbersArray;
}

// console.log(parseNumbers(['5', '250', '34', '97'], logNumbersArray));

//Task 10
//Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.

console.log(' ');
console.log('Task #10');

function countCharacters(strings, callback) {
    let sum = 0;

    for (const string of strings) {
        sum += Number(string.length);
    }

    return callback(sum);
}

function logTotalCountSymbols(sum) {
    return sum;
}

// console.log(countCharacters(['short', 'longword', 'tiny', 'elephant'], logTotalCountSymbols));

//Task 11
/*Напишіть такі функції:

createProduct(obj, callback) - приймає об'єкт товару без id, а також колбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id і викликає колбек, передаючи йому створений об'єкт.
logProduct(product) - колбек, що приймає об'єкт продукту і логірує його в консоль
logTotalPrice(product) - колбек, що приймає об'єкт продукту і логірує загальну вартість товару в консоль*/

console.log(' ');
console.log('Task #11');

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(), //як варіант такий id
//         ...obj,
//     };

//     return callback(product);
// }

// function logProduct(product) {
//     console.log(product);
// }

// function logTotalPrice(product) {
//     const totalPrice = product.price * product.quantity;
//     console.log(`Total price: ${totalPrice}$`);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//Task 12
/*Додайте об'єкту account методи withdraw(amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр - це сума операції, а другий і третій - колбеки.

Метод withdraw викликає onError, якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

Метод deposit викликає onError, якщо amount більша за TRANSACTION_LIMIT або менша чи дорівнює нулю, і onSuccess в іншому випадку.*/

console.log(' ');
console.log('Task #12');

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//             return onError(`Withdrawal is not possible`);
//         } else {
//             onSuccess('Withdrawal is success');
//         }
//     },

//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT || amount <= 0) {
//             return onError(`Deposit is not possible`);
//         } else {
//             return onSuccess('Deposit is success');
//         }
//     },
// };

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//Task 13
/*Напишіть функцію each(array, callback), яка першим параметром очікує на масив, а другим - на функцію, яка застосується до кожного елемента масиву. Функція each має повернути новий масив, елементами якого будуть результати виклику коллбека.*/

console.log(' ');
console.log('Task #13');

// function each(array, callback) {
//     const result = [];

//     for (const item of array) {
//         result.push(callback(item));
//     }

//     return result;
// }

// function multiply(value) {
//     return value * 2;
// }

// function subtraction(value) {
//     return value - 2;
// }

// function sqrt(value) {
//     return Math.sqrt(value);
// }

// function ceil(value) {
//     return Math.ceil(value);
// }

// function floor(value) {
//     return Math.floor(value);
// }

// console.log(each([64, 49, 36, 25, 16], multiply));
// console.log(each([64, 49, 36, 25, 16], subtraction));
// console.log(each([64, 49, 36, 25, 16], sqrt));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], ceil));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], floor));

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }) приклал інлайнової коллбек функції

//Task 14
/*Виконайте рефакторинг коду, використовуючи стрілочні функції.*/

console.log(' ');
console.log('Task #14');

const createProduct = (partialProduct, callback) => {
    const product = { id: Date.now(), ...partialProduct };
    callback(product);
};

const logProduct2 = product => console.log(product);

const logTotalPrice2 = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct2);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice2);

//Task 15
/*Виконайте рефакторинг коду, використовуючи стрілочні функції.*/

console.log(' ');
console.log('Task #15');

const TRANSACTION_LIMIT = 1000;

const account = {
    username: 'Jacob',
    balance: 400,

    withdraw(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
        } else if (amount > this.balance) {
            onError(`Amount can't exceed account balance of ${this.balance} credits`);
        } else {
            this.balance -= amount;
            onSuccess(`Account balance: ${this.balance}`);
        }
    },

    deposit(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
        } else if (amount <= 0) {
            onError(`Amount must be more than 0 credits`);
        } else {
            this.balance += amount;
            onSuccess(`Account balance: ${this.balance}`);
        }
    },
};

const handleSuccess = message => console.log(`✅ Success! ${message}`);

const handleError = message => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

//Task 16
/*Виконайте рефакторинг коду, використовуючи стрілочні функції.*/

console.log(' ');
console.log('Task #16');

const each = (array, callback) => {
    const newArr = [];
    for (const el of array) {
        newArr.push(callback(el));
    }
    return newArr;
};

console.log(
    each([64, 49, 36, 25, 16], value => {
        return value * 2;
    })
);
console.log(
    each([64, 49, 36, 25, 16], value => {
        return value - 10;
    })
);
console.log(
    each([64, 49, 36, 25, 16], value => {
        return Math.sqrt(value);
    })
);
console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
        return Math.ceil(value);
    })
);
console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
        return Math.floor(value);
    })
);

//Task 17
/*Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.*/

console.log(' ');
console.log('Task #17');

const logItems = items => {
    items.forEach((item, index) => {
        console.log(`${index + 1} - ${item}`);
    });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//Task 18
/*Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.*/

console.log(' ');
console.log('Task #18');

const printContactsInfo = ({ names, phones }) => {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    // for (let i = 0; i < nameList.length; i += 1) {
    //     console.log(`${nameList[i]}: ${phoneList[i]}`);
    // }

    nameList.forEach((name, index) => {
        console.log(`${name}: ${phoneList[index]}`);
    });
};

printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
});

//Task 19
/*Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.*/

console.log(' ');
console.log('Task #19');

const calculateAverage = (...args) => {
    let total = 0;

    args.forEach(number => {
        total += number;
    });

    return total / args.length;
};

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
