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

// Знайти всі книги, видані після 1950 року.

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

// console.table(getBooksByAuthor(books, 'Harper Lee'));
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

function isAnyBookHasWord(books, userWord) {
    return books.some(book => book.title.includes(userWord));
}

// console.log(isAnyBookHasWord(books, 'and'));

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
// Чи всі книги в масиві мають рейтинг вище 4.0?

function isAllBooksByRatinMoreThan(books, userRating) {
    return books.every(book => book.rating >= userRating);
}

// console.log(isAnyBookByGenreAndRatingMoreThan(books, 4.5));
// console.log(isAnyBookByGenreAndRatingMoreThan(books, 4.0));

//------------------------------------------------------------------------------------

// Чи всі книги в масиві коштують менше 20 доларів?

function isAllBooksByPriceLessThan(books, userPrice) {
    return books.every(book => book.price < userPrice);
}

// console.log(isAllBooksByPriceLessThan(books, 20));

//------------------------------------------------------------------------------------

// Чи всі книги в масиві видані після 1950 року?

function isAllBookByAfterYear(books, userYear) {
    return books.every(book => book.year > userYear);
}

// console.log(isAllBookByAfterYear(books, 1950));

//------------------------------------------------------------------------------------

// Чи всі книги в масиві є жанру 'Fiction'?
// Чи всі книги в масиві є жанру 'Adventure'?

function isAllBooksByGenre(books, userGenre) {
    return books.every(book => book.genre === userGenre);
}

// console.log(isAllBooksByGenre(books, 'Fiction'));
// console.log(isAllBooksByGenre(books, 'Adventure'));

//------------------------------------------------------------------------------------

// Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?

function isAllBookByFirstLetterAuthorName(books, firstLetter) {
    return books.every(book => book.author[0] === firstLetter);
}

// console.log(isAllBookByFirstLetterAuthorName(books, 'J'));

//------------------------------------------------------------------------------------

// Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?

function isAllBooksByGenreAndPriceLessThan(books, userGenre, userPrice) {
    const result = books.every(book => {
        const genre = book.genre === userGenre;
        const price = book.price < userPrice;

        return genre && price;
    });

    return result;
}

// console.log(isAllBooksByGenreAndPriceLessThan(books, 'Romance', 15));

//------------------------------------------------------------------------------------

// Чи всі книги в масиві видані до 2000 року?

function isAllBooksBeforeYear(books, userYear) {
    return books.every(book => book.year < userYear);
}

// console.log(isAllBooksBeforeYear(books, 2020));

//------------------------------------------------------------------------------------

// Чи всі книги в масиві мають слово 'the' у назві?

function isAllBookHasWord(books, userWord) {
    return books.every(book => book.title.includes(userWord));
}

// console.log(isAllBookHasWord(books, 'the'));

// //!==================================================================================

// Отримати масив назв всіх книжок.

function getAllTitles(books) {
    const titles = books.map(book => book.title);
    return titles;
}

// console.table(getAllTitles(books));

//------------------------------------------------------------------------------------

// Отримати масив авторів всіх книжок.

function getAllAuthors(books) {
    const authors = books.map(book => book.author);
    return authors;
}

// console.table(getAllAuthors(books));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, які містять лише назву та автора кожної книжки.

function getTitleAndAuthor(books) {
    const titleAuthor = books.map(book => {
        return {
            title: book.title,
            author: book.author,
        };
    });

    return titleAuthor;
}

// console.table(getTitleAndAuthor(books));

//------------------------------------------------------------------------------------

// Створити масив цін всіх книжок з подвоєною вартістю.

function getBooksWithІncreasedPrice(books, increaseValue) {
    const doublePrice = books.map(book => {
        const copy = { ...book };
        copy.price *= increaseValue;

        return copy;
    });

    return doublePrice;
}

// console.table(getBooksWithІncreasedPrice(books, 2));

//------------------------------------------------------------------------------------

// Створити масив років видання всіх книжок з доданими 5 роками до кожного.

function getBooksWithAddYear(books, years) {
    const addYear = books.map(book => {
        const copy = { ...book };
        copy.year += years;

        return copy;
    });

    return addYear;
}

// console.table(getBooksWithAddYear(books, 5));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках.

function getBooksTitleAndPercentRating(books, maxRating) {
    const titleRating = books.map(book => {
        const copy = { ...book };

        return {
            title: copy.title,
            rating: Number(((copy.rating / maxRating) * 100).toFixed(0)),
        };
    });

    return titleRating;
}

// console.table(getBooksTitleAndPercentRating(books, 5));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

function getUpperTitle(books) {
    const upperTitle = books.map(book => {
        const copy = { ...book };
        copy.title = copy.title.toUpperCase();

        return copy;
    });

    return upperTitle;
}

// console.table(getUpperTitle(books));

//------------------------------------------------------------------------------------

// Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".

function getTitleAuthorArray(books) {
    const titleAuthorArray = books.map(book => {
        const copy = { ...book };

        return `${copy.title} — ${copy.author}`;
    });

    return titleAuthorArray;
}

// console.log(getTitleAuthorArray(books));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.

function getDiscountField(books, discount) {
    const discountField = books.map(book => {
        const copy = { ...book };
        copy.discountPrice = Number((copy.price * discount).toFixed(0));

        return copy;
    });

    return discountField;
}

// console.table(getDiscountField(books, 0.9));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.

function getTitleAndPriceWithTax(books, tax) {
    const addTax = books.map(book => {
        const copy = { ...book };
        copy.price = Number((copy.price * tax).toFixed(2));

        return {
            title: copy.title,
            price: copy.price,
        };
    });

    return addTax;
}

// console.table(getTitleAndPriceWithTax(books, 1.15));

//------------------------------------------------------------------------------------

// Створити масив назв книжок, які видані після 1950 року.

function getBooksTitlesAfterYear(books, userYear) {
    const titles = books.filter(book => book.year > userYear).map(book => book.title);

    return titles;
}

// console.table(getBooksTitlesAfterYear(books, 1950));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic, що дорівнює true, якщо книжка видана до 1950 року.

function getBookAfterYearWithIsClassic(books, userYear) {
    const newBooks = books.map(book => ({
        ...book,
        isClassic: book.year < userYear,
    }));

    return newBooks;
}

// console.table(getBookAfterYearWithIsClassic(books, 1950));

//------------------------------------------------------------------------------------

// Отримати масив жанрів всіх книжок у верхньому регістрі.

function getUpperGenre(books) {
    const upperGenre = books.map(book => {
        const copy = { ...book };
        return copy.genre.toUpperCase();
    });

    return upperGenre;
}

// console.table(getUpperGenre(books));

//------------------------------------------------------------------------------------

// Створити масив назв книжок, де всі слова в назві починаються з великої літери.

function getTitleUpperEachWords(books) {
    return books.filter(book => {
        const words = book.title.split(' ');
        return words.every(word => word.charAt(0) === word.charAt(0).toUpperCase());
    });
}

// console.table(getTitleUpperEachWords(books));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.

function getAuthorAndYear(books) {
    return books.map(book => {
        const copy = { ...book };

        return {
            author: copy.author,
            year: copy.year,
        };
    });
}

// console.table(getAuthorAndYear(books));

//------------------------------------------------------------------------------------

// Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).

function getEuroPrice(books, courseEuro) {
    return books.map(book => {
        const copy = { ...book };

        copy.price = Number((copy.price * courseEuro).toFixed(2));
        return copy;
    });
}

// console.table(getEuroPrice(books, 0.85));

//------------------------------------------------------------------------------------

// Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".

function addString(books, string) {
    return books.map(book => {
        const copy = { ...book };
        return copy.title + string;
    });
}

// console.log(addString(books, ' (Special Edition)'));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.

function cutTitle(books) {
    return books.map(book => {
        const copy = { ...book };
        copy.shortTitle = copy.title.split(' ')[0];

        return copy;
    });
}

// console.table(cutTitle(books));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок "Ця книга від автора [author] була видана у [year] році".

function addDescription(books) {
    return books.map(book => {
        const copy = { ...book };
        copy.description = `Ця книга від автора ${copy.author} була видана у ${copy.year} році`;

        return copy;
    });
}
// console.table(addDescription(books));

//------------------------------------------------------------------------------------

// Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі.

function getTitleAndLowerGenre(books) {
    return books.map(book => {
        const copy = { ...book };
        copy.genre = copy.genre.toLowerCase();

        return {
            title: copy.title,
            genre: copy.genre,
        };
    });
}

// console.table(getTitleAndLowerGenre(books));

//!==================================================================================

// Відсортувати книги за роком видання від найдавнішого до найновішого.

function sortFromOldYear(books) {
    return books.toSorted((a, b) => a.year - b.year);
}

// console.table(sortFromOldYear(books));

//------------------------------------------------------------------------------------

// Відсортувати книги за ціною від найнижчої до найвищої.

function sortByPriceFromSmall(books) {
    return books.toSorted((a, b) => a.price - b.price);
}

// console.table(sortByPriceFromSmall(books));

//------------------------------------------------------------------------------------

// Відсортувати книги за рейтингом від найнижчого до найвищого.

function sortByRatingFromSmall(books) {
    return books.toSorted((a, b) => a.rating - b.rating);
}

// console.table(sortByRatingFromSmall(books));

//------------------------------------------------------------------------------------

// Відсортувати книги за назвою у алфавітному порядку (від А до Я).

function sortByTitleAlphabet(books) {
    return books.toSorted((a, b) => a.title.localeCompare(b.title));
}

// console.table(sortByAlphabet(books));

//------------------------------------------------------------------------------------

// Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).

function sortByAuthorReverseAlphabet(books) {
    return books.toSorted((b, a) => a.author.localeCompare(b.author));
}

// console.table(sortByAuthorReverseAlphabet(books));

//------------------------------------------------------------------------------------

// Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за назвою у зворотньому алфавітному порядку.

function sortByGenreAlphabetAndTitleReverseAlphabet(books) {
    return books.toSorted((a, b) => {
        const genreSort = a.genre.localeCompare(b.genre);

        if (genreSort !== 0) {
            return genreSort;
        }

        return b.title.localeCompare(a.title);
    });
}

// console.table(sortByGenreAlphabetAndTitleReverseAlphabet(books));

//------------------------------------------------------------------------------------

// Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою назвою за автором у зворотньому алфавітному порядку.

function sortByTitleAlphabetAndAuthorReverseAlphabet(books) {
    return books.toSorted((a, b) => {
        const titleSort = a.title.localeCompare(b.title);

        if (titleSort !== 0) {
            return titleSort;
        }

        return (a, b) => b.author.localeCompare(a.author);
    });
}

// console.table(sortByTitleAlphabetAndAuthorReverseAlphabet(books));

//------------------------------------------------------------------------------------

// Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше 10 доларів, потім решту.

function sortByPriceFromSmall(books, userPrice) {
    return books.toSorted((a, b) => {
        if (a.price < userPrice && b.price >= userPrice) return -1;
        if (a.price >= userPrice && b.price < userPrice) return 1;

        return a.price - b.price;
    });
}

// console.table(sortByPriceFromSmall(books, 10));

//------------------------------------------------------------------------------------

// Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають рейтинг 4.8 і вище, потім решту.

function sortByRatingFromBigger(books, userRating) {
    return books.toSorted((a, b) => {
        if (a.rating >= userRating && b.rating < userRating) return -1;
        if (a.rating < userRating && b.rating >= userRating) return 1;

        return b.rating - a.rating;
    });
}

// console.table(sortByRatingFromBigger(books, 4.8));

//------------------------------------------------------------------------------------

// Відсортувати книги спочатку за жанром, а потім за роком видання.

function sotyByGenreAndYear(books) {
    return books.toSorted((a, b) => {
        const genreSort = a.genre.localeCompare(b.genre);

        if (genreSort !== 0) {
            return genreSort;
        }

        return a.year - b.year;
    });
}

// console.table(sotyByGenreAndYear(books));

//!==================================================================================

// Отримати всі книги, видані після 1950 року та відсортувати їх за рейтингом від найвищого до найнижчого, повернути лише назви.

function getTitleAfterYearByRating(books, userYear) {
    return books
        .filter(book => book.year > userYear)
        .toSorted((b, a) => b.rating - a.rating)
        .map(book => book.title);
}

// console.table(getTitleAfterYearByRating(books, 1950));

//------------------------------------------------------------------------------------

// Отримати всі книги, автором яких є 'Harper Lee', відсортувати їх за роком видання від найдавнішого до найновішого та вивести перші 5 книг.

function getBookAuthorByYear(books, userAuthor, amountBook) {
    return books
        .filter(book => book.author === userAuthor)
        .toSorted((a, b) => a.year - b.year)
        .slice(0, amountBook + 1)
        .map(book => book);
}

// console.table(getBookAuthorByYear(books, 'Harper Lee', 5));
//------------------------------------------------------------------------------------

// Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною від найнижчої до найвищої та вивести назви книг.

function getTitleBookByPrice(books, userPrice) {
    return books
        .filter(book => book.price < userPrice)
        .toSorted((a, b) => a.price - b.price)
        .map(book => book.title);
}

// console.table(getTitleBookByPrice(books, 10));

//------------------------------------------------------------------------------------

// Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у зворотньому алфавітному порядку та вивести авторів унікальних книг.

function getUniqueAuthorByRating(books, userRating) {
    const result = [];

    books
        .filter(book => book.rating >= userRating)
        .toSorted((a, b) => b.author.localeCompare(a.author))
        .forEach(book => {
            if (!result.includes(book.author)) {
                result.push(book.author);
            }
        });

    return result;
}

// console.table(getUniqueAuthorByRating(books, 4.8));

//------------------------------------------------------------------------------------

// Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та відсортувати їх за рейтингом від найвищого до найнижчого.

function getBookByGenreAndPrice(books, userGenre, userPrice) {
    return books
        .filter(book => {
            const genre = book.genre === userGenre;
            const price = book.price < userPrice;

            return genre && price;
        })
        .toSorted((a, b) => b.rating - a.rating);
}

// console.table(getBookByGenreAndPrice(books, 'Romance', 8));

//------------------------------------------------------------------------------------

// Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від найвищого до найнижчого та вивести першу книгу.

function getBookByBeforeYearAndSortByRating(books, userYear) {
    return books
        .filter(book => book.year < userYear)
        .toSorted((a, b) => b.rating - a.ratign)
        .shift();
}

// console.table(getBookByBeforeYearAndSortByRating(books, 1900));

//------------------------------------------------------------------------------------

// Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останню книгу.

function getBookByWordAndSortByYear(books, userWord) {
    return books
        .filter(book => book.title.includes(userWord))
        .toSorted((a, b) => a.year - b.year)
        .pop();
}

// console.table(getBookByWordAndSortByYear(books, 'and'));

//------------------------------------------------------------------------------------

// Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за рейтингом від найвищого до найнижчого та вивести середній рейтинг.

function getAvRaintingByAuthor(books, userAuthor) {
    const sortedBooks = books
        .filter(book => book.author === userAuthor)
        .toSorted((b, a) => a.ratign - b.ratign);

    const totalRating = sortedBooks.reduce((acc, book) => acc + book.rating, 0);
    const averageRating = totalRating / sortedBooks.length;

    return averageRating;
}

// console.table(getAvRaintingByAuthor(books, 'J.R.R. Tolkien'));

//------------------------------------------------------------------------------------

// Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останні 3 книги.

function getLastBooksByGenreAndRating(books, userGenre, userRating) {
    return books
        .filter(book => book.genre === userGenre && book.rating >= userRating)
        .toSorted((a, b) => a.year - b.year)
        .slice(-3);
}

// console.table(getLastBooksByGenreAndRating(books, 'Historical', 4.7));
