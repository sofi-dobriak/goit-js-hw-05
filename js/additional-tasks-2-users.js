'use strict';

const users = [
    {
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 28,
        email: 'alice@gmail.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Bob',
        lastName: 'Smith',
        age: 42,
        email: 'bob@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Eva',
        lastName: 'Williams',
        age: 35,
        email: 'eva@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'David',
        lastName: 'Brown',
        age: 22,
        email: 'david@gmail.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Sophia',
        lastName: 'Davis',
        age: 29,
        email: 'sophia@gmail.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Michael',
        lastName: 'Miller',
        age: 50,
        email: 'michael@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Olivia',
        lastName: 'Wilson',
        age: 19,
        email: 'olivia@gmail.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Daniel',
        lastName: 'Thompson',
        age: 31,
        email: 'daniel@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Ava',
        lastName: 'Harris',
        age: 27,
        email: 'ava@gmail.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'James',
        lastName: 'Jackson',
        age: 38,
        email: 'james@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Emma',
        lastName: 'Taylor',
        age: 23,
        email: 'emma@example.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'William',
        lastName: 'Anderson',
        age: 45,
        email: 'william@gmail.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Mia',
        lastName: 'Martin',
        age: 29,
        email: 'mia@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Joseph',
        lastName: 'Clark',
        age: 33,
        email: 'joseph@poshta.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Charlotte',
        lastName: 'Rodriguez',
        age: 26,
        email: 'charlotte@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'John',
        lastName: 'Lopez',
        age: 31,
        email: 'john@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Amelia',
        lastName: 'Lee',
        age: 20,
        email: 'amelia@example.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Benjamin',
        lastName: 'Gonzalez',
        age: 40,
        email: 'benjamin@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Chloe',
        lastName: 'Hernandez',
        age: 24,
        email: 'chloe@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Daniel',
        lastName: 'Young',
        age: 37,
        email: 'daniel@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Olivia',
        lastName: 'Miller',
        age: 38,
        email: 'olivia@example.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'James',
        lastName: 'Jones',
        age: 29,
        email: 'james@poshta.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Sophia',
        lastName: 'Davis',
        age: 31,
        email: 'sophia@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'William',
        lastName: 'Wilson',
        age: 52,
        email: 'william@poshta.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Ava',
        lastName: 'Taylor',
        age: 19,
        email: 'ava@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Michael',
        lastName: 'Clark',
        age: 40,
        email: 'michael@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Emma',
        lastName: 'Lee',
        age: 27,
        email: 'emma@poshta.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Daniel',
        lastName: 'Martinez',
        age: 35,
        email: 'daniel@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Isabella',
        lastName: 'Hernandez',
        age: 42,
        email: 'isabella@poshta.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Liam',
        lastName: 'Garcia',
        age: 26,
        email: 'liam@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Mia',
        lastName: 'Rodriguez',
        age: 30,
        email: 'mia@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Noah',
        lastName: 'Lopez',
        age: 24,
        email: 'noah@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Charlotte',
        lastName: 'Perez',
        age: 29,
        email: 'charlotte@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Ethan',
        lastName: 'Turner',
        age: 37,
        email: 'ethan@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Amelia',
        lastName: 'White',
        age: 23,
        email: 'amelia@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Alexander',
        lastName: 'Jackson',
        age: 41,
        email: 'alexander@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Sofia',
        lastName: 'Brown',
        age: 33,
        email: 'sofia@example.com',
        isActive: true,
        gender: 'Female',
    },
];

// Знайти користувачів віком від 25 до 40 років.
// Знайти всіх користувачів із активним статусом.
// Порахувати кількість користувачів молодше 30 років.
// Відсортувати користувачів віком від старшого до молодшого.
// Знайти користувачів з електронною поштою на домені gmail.com.
// Знайти всіх жінок серед користувачів.
// Порахувати кількість неактивних користувачів.
// Відсортувати користувачів на прізвище в алфавітному порядку.
// Знайти користувача з найбільшим віком.
// Перевірити, чи є хоча б один користувач із прізвищем "Johnson".
// Створити новий масив, який містить лише імена користувачів.
// Створити масив з інформацією про користувачів у форматі JSON.
// Знайти індекс першого користувача під назвою "Jane".
// Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
// Порахувати загальну кількість користувачів.
// Знайти всіх користувачів з активним статусом та віком старше 25 років.
// Знайти користувачів із прізвищем, що починається на букву "S".
// Відсортувати користувачів за віком (від молодшого до старшого).
// Знайти всіх користувачів електронної пошти на домені yahoo.com.
// Знайти користувача з найменшим віком.
// Перевірити, чи є хоча б один користувач з ім'ям John.
// Створити новий масив, що містить лише прізвища користувачів.
// Створити масив з інформацією про користувачів як рядкових описів.
// Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років.
