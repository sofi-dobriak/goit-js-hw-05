'use strict';

const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        genre: 'Fiction',
        price: 10.99,
        rating: 4.9,
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'Dystopian',
        price: 8.99,
        rating: 4.8,
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: 'Classic',
        price: 7.99,
        rating: 4.7,
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951,
        genre: 'Fiction',
        price: 6.99,
        rating: 4.6,
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        genre: 'Romance',
        price: 5.99,
        rating: 4.9,
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: 1937,
        genre: 'Fantasy',
        price: 12.99,
        rating: 4.8,
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        year: 1851,
        genre: 'Adventure',
        price: 9.99,
        rating: 4.5,
    },
    {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        year: 1869,
        genre: 'Historical',
        price: 14.99,
        rating: 4.9,
    },
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        year: 1866,
        genre: 'Philosophical',
        price: 11.99,
        rating: 4.8,
    },
    {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        year: 1880,
        genre: 'Philosophical',
        price: 13.99,
        rating: 4.9,
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        year: 1932,
        genre: 'Dystopian',
        price: 9.99,
        rating: 4.7,
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        year: 1847,
        genre: 'Romance',
        price: 7.99,
        rating: 4.8,
    },
    {
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        year: 1847,
        genre: 'Romance',
        price: 8.99,
        rating: 4.7,
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        year: 1890,
        genre: 'Gothic',
        price: 6.99,
        rating: 4.6,
    },
    {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        year: 1818,
        genre: 'Science Fiction',
        price: 7.99,
        rating: 4.7,
    },
    {
        title: 'Dracula',
        author: 'Bram Stoker',
        year: 1897,
        genre: 'Horror',
        price: 6.99,
        rating: 4.5,
    },
    {
        title: 'The Odyssey',
        author: 'Homer',
        year: -800,
        genre: 'Epic',
        price: 10.99,
        rating: 4.9,
    },
    {
        title: 'The Iliad',
        author: 'Homer',
        year: -750,
        genre: 'Epic',
        price: 9.99,
        rating: 4.8,
    },
    {
        title: 'Les Misérables',
        author: 'Victor Hugo',
        year: 1862,
        genre: 'Historical',
        price: 11.99,
        rating: 4.9,
    },
    {
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        year: 1844,
        genre: 'Adventure',
        price: 12.99,
        rating: 4.9,
    },
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        year: 1939,
        genre: 'Fiction',
        price: 8.99,
        rating: 4.7,
    },
    {
        title: 'Of Mice and Men',
        author: 'John Steinbeck',
        year: 1937,
        genre: 'Fiction',
        price: 7.99,
        rating: 4.6,
    },
    {
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        year: 1859,
        genre: 'Historical',
        price: 9.99,
        rating: 4.8,
    },
    {
        title: 'Great Expectations',
        author: 'Charles Dickens',
        year: 1861,
        genre: 'Fiction',
        price: 8.99,
        rating: 4.7,
    },
    {
        title: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        year: 1911,
        genre: 'Children',
        price: 6.99,
        rating: 4.7,
    },
    {
        title: 'Little Women',
        author: 'Louisa May Alcott',
        year: 1868,
        genre: 'Fiction',
        price: 7.99,
        rating: 4.8,
    },
    {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        year: 1877,
        genre: 'Romance',
        price: 10.99,
        rating: 4.9,
    },
    {
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        year: 1892,
        genre: 'Mystery',
        price: 9.99,
        rating: 4.8,
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year: 1954,
        genre: 'Fantasy',
        price: 20.99,
        rating: 4.9,
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        year: 1997,
        genre: 'Fantasy',
        price: 10.99,
        rating: 4.8,
    },
];

//!====================================== TASKS ======================================

// Знайти всі книги жанру 'Fantasy'.

function getBooksByGenre(books, userGenre) {
    const result = books.filter(book => book.genre === userGenre);
    return result;
}

// console.table(getBooksByGenre(books, 'Fiction'));

//------------------------------------------------------------------------------------

// Знайти всі книги, видані після 2000 року.

function getBooksByAfterYear(books, userYear) {
    return books.filter(book => book.year > userYear);
}

// console.table(getBooksByAfterYear(books, 1950));

//------------------------------------------------------------------------------------

// Знайти всі книги, автором яких є 'Harper Lee'.
// Знайти всі книги, автором яких є 'J.R.R. Tolkien'.

function getBooksByAuthor(books, userAuthor) {
    return books.filter(book => book.author === userAuthor);
}

// console.table(getBooksByAuthor(books, 'J.R.R. Tolkien'));

//------------------------------------------------------------------------------------

// Знайти всі книги з ціною меншою ніж 10 доларів.

function getBooksPriceLessThen(books, userPrice) {
    return books.filter(book => book.price < userPrice);
}

// console.table(getBooksPriceLessThen(books, 6));

//------------------------------------------------------------------------------------

// Знайти всі книги з рейтингом 4.8 і вище.

function getBooksByRatingMoreThan(books, userRating) {
    return books.filter(book => book.rating >= userRating);
}

// console.table(getBooksByRatingMoreThan(books, 4.8));

//------------------------------------------------------------------------------------

// Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.

function getBooksByGenreAndPriceLessThan(books, userGenre, userPrice) {
    const result = books.filter(book => {
        const genre = book.genre === userGenre;
        const price = book.price < userPrice;

        return genre && price;
    });

    return result;
}

// console.table(getBooksByGenreAndPriceLessThan(books, 'Romance', 8));

//------------------------------------------------------------------------------------

// Знайти всі книги, видані до 1900 року.

function getBooksByBeforeYear(books, userYear) {
    return books.filter(book => book.year < userYear);
}

// console.table(getBooksByBeforeYear(books, 1900));

//------------------------------------------------------------------------------------

// Знайти всі книги, що містять слово 'and' у назві.

function getBooksByWord(books, userWord) {
    return books.filter(book => book.title.includes(userWord));
}

// console.table(getBooksByWord(books, 'and'));

//------------------------------------------------------------------------------------

// Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.

function getBooksByRatingMoreThan(books, userGenre, userRating) {
    const result = books.filter(book => {
        const genre = book.genre === userGenre;
        const rating = book.rating > userRating;

        return genre && rating;
    });

    return result;
}

// console.table(getBooksByRatingMoreThan(books, 'Historical', 4.7));

//!==================================================================================

// Знайти першу книгу жанру 'Fantasy'.

function getFirstBookByGenre(books, userGenre) {
    return books.find(book => book.genre === userGenre);
}

// console.table(getFirstBookByGenre(books, 'Fantasy'));

//------------------------------------------------------------------------------------

// Знайти першу книгу, видану після 1950 року.

function getFirstBookByAfterYear(books, userYear) {
    return books.find(book => book.year > userYear);
}

// console.table(getFirstBookByAfterYear(books, 1950));

//------------------------------------------------------------------------------------

// Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.

function getFirstBookByAuthor(books, userAuthor) {
    return books.find(book => book.author === userAuthor);
}

// console.table(getFirstBookByAuthor(books, 'J.R.R. Tolkien'));

//------------------------------------------------------------------------------------

// Знайти першу книгу з ціною меншою ніж 10 доларів.

function getFirstBookByPriceLessThan(books, userPrice) {
    return books.find(book => book.price < userPrice);
}

// console.table(getFirstBookByPriceLessThan(books, 10));

//------------------------------------------------------------------------------------

// Знайти першу книгу з рейтингом 4.8 і вище.

function getFirstBookByRatinMoreThan(books, userRating) {
    return books.find(book => book.rating >= userRating);
}

// console.table(getFirstBookByRatinMoreThan(books, 4.8));

//------------------------------------------------------------------------------------

// Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.

function getFirstBookByGenreAndPriceLessThan(books, userGenre, userPrice) {
    const result = books.find(book => {
        const genre = book.genre === userGenre;
        const price = book.price < userPrice;

        return genre && price;
    });

    return result;
}

// console.table(getFirstBookByGenreAndPriceLessThan(books, 'Romance', 8));

//------------------------------------------------------------------------------------

// Знайти першу книгу, видану до 1900 року.

function getFistBookByBeforeYear(books, userYear) {
    return books.find(book => book.year < userYear);
}

// console.table(getFistBookByBeforeYear(books, 1900));

//------------------------------------------------------------------------------------

// Знайти першу книгу, що містить слово 'and' у назві.

function getFirstBookByWord(books, userWord) {
    return books.find(book => book.title.includes(userWord));
}

// console.table(getFirstBookByWord(books, 'and'));

//------------------------------------------------------------------------------------

// Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

function getFirstBookByRatingMoreThan(books, userRating) {
    return books.find(book => book.rating >= userRating);
}

// console.table(getFirstBookByRatingMoreThan(books, 4.7));

//!==================================================================================

// Чи є в масиві хоча б одна книга жанру 'Fantasy'?

function isAnyBookByGenre(books, userGenre) {
    return books.some(book => book.genre === userGenre);
}

// console.log(isAnyBookByGenre(books, 'Fantasy'));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга, видана після 1950 року?

function isAnyBookByAfterYear(books, userYear) {
    return books.some(book => book.year > userYear);
}

// console.log(isAnyBookByAfterYear(books, 1950));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?

function isAnyBookByAuthor(books, userAuthor) {
    return books.some(book => book.author === userAuthor);
}

// console.log(isAnyBookByAuthor(books, 'J.R.R. Tolkien'));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?

function isAnyBookByPriceLessThan(books, userPrice) {
    return books.some(book => book.price < userPrice);
}

// console.log(isAnyBookByPriceLessThan(books, 10));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?

function isAnyBookByRatingMoreThan(books, userRating) {
    return books.some(book => book.rating >= userRating);
}

// console.log(isAnyBookByRatingMoreThan(books, 4.8));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?

function isAnyBookByGenreAndPriceLessThan(books, userGenre, userPrice) {
    const result = books.some(book => {
        const genre = book.genre === userGenre;
        const price = book.price < userPrice;

        return genre && price;
    });

    return result;
}

// console.log(isAnyBookByGenreAndPriceLessThan(books, 'Romance', 8));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга, видана до 1900 року?

function isAnyBookByBeforeYear(books, userYear) {
    return books.some(book => book.year < userYear);
}

// console.log(isAnyBookByBeforeYear(books, 1900));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?

function isAnyBookByWord(books, userWord) {
    return books.some(book => book.title.includes(userWord));
}

// console.log(isAnyBookByWord(books, 'and'));

//------------------------------------------------------------------------------------

// Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?

function isAnyBookByGenreAndRatingMoreThan(books, userGenre, userRating) {
    const result = books.some(book => {
        const genre = book.genre === userGenre;
        const rating = book.rating >= userRating;

        return genre && rating;
    });

    return result;
}

// console.log(isAnyBookByGenreAndRatingMoreThan(books, 'Historical', 4.7));

//!==================================================================================

// Чи всі книги в масиві мають рейтинг 4.5 і вище?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві коштують менше 20 доларів?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві видані після 1950 року?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві є жанру 'Fiction'?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві видані до 2000 року?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві мають слово 'the' у назві?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві мають рейтинг вище 4.0?

//------------------------------------------------------------------------------------

// Чи всі книги в масиві є жанру 'Adventure'?

// //!==================================================================================

// Отримати масив назв всіх книжок.

//------------------------------------------------------------------------------------

// Отримати масив авторів всіх книжок.

//------------------------------------------------------------------------------------

// Створити масив об'єктів, які містять лише назву та автора кожної книжки.

//------------------------------------------------------------------------------------

// Створити масив цін всіх книжок з подвоєною вартістю.

//------------------------------------------------------------------------------------

// Створити масив років видання всіх книжок з доданими 5 роками до кожного.

//------------------------------------------------------------------------------------

// Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках (помножений на 10).

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

//------------------------------------------------------------------------------------

// Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.

//------------------------------------------------------------------------------------

// Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.

//------------------------------------------------------------------------------------

// Створити масив назв книжок, які видані після 2000 року.

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic, що дорівнює true, якщо книжка видана до 1950 року.

//------------------------------------------------------------------------------------

// Отримати масив жанрів всіх книжок у верхньому регістрі.

//------------------------------------------------------------------------------------

// Створити масив назв книжок, де всі слова в назві починаються з великої літери.

//------------------------------------------------------------------------------------

// Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.

//------------------------------------------------------------------------------------

// Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).

//------------------------------------------------------------------------------------

// Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок "Ця книга від автора [author] була видана у [year] році".

//------------------------------------------------------------------------------------

// Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі.

//!==================================================================================

// Відсортувати книги за роком видання від найдавнішого до найновішого.

//------------------------------------------------------------------------------------

// Відсортувати книги за ціною від найнижчої до найвищої.

//------------------------------------------------------------------------------------

// Відсортувати книги за рейтингом від найнижчого до найвищого.

//------------------------------------------------------------------------------------

// Відсортувати книги за назвою у алфавітному порядку (від А до Я).

//------------------------------------------------------------------------------------

// Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).

//------------------------------------------------------------------------------------

// Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за назвою у зворотньому алфавітному порядку.

//------------------------------------------------------------------------------------

// Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою назвою за автором у зворотньому алфавітному порядку.

//------------------------------------------------------------------------------------

// Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше 10 доларів, потім решту.

//------------------------------------------------------------------------------------

// Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають рейтинг 4.8 і вище, потім решту.

//------------------------------------------------------------------------------------

// Відсортувати книги спочатку за жанром, а потім за роком видання.

// ========================================================================

// Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом від найвищого до найнижчого, повернути лише назви.

//------------------------------------------------------------------------------------

// Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за роком видання від найдавнішого до найновішого та вивести перші 5 книг.

//------------------------------------------------------------------------------------

// Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною від найнижчої до найвищої та вивести назви книг.

//------------------------------------------------------------------------------------

// Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у зворотньому алфавітному порядку та вивести авторів унікальних книг.

//------------------------------------------------------------------------------------

// Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та відсортувати їх за рейтингом від найвищого до найнижчого.

//------------------------------------------------------------------------------------

// Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від найвищого до найнижчого та вивести першу книгу.

//------------------------------------------------------------------------------------

// Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останню книгу.

//------------------------------------------------------------------------------------

// Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за рейтингом від найвищого до найнижчого та вивести середній рейтинг.

//------------------------------------------------------------------------------------

// Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останні 3 книги.
