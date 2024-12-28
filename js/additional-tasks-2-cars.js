'use strict';

const cars = [
    {
        brand: 'Toyota',
        model: 'Camry',
        year: 2019,
        color: 'Silver',
        price: 25000,
        amount: 3,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Honda',
        model: 'Accord',
        year: 2020,
        color: 'White',
        price: 28000,
        amount: 5,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2021,
        color: 'Red',
        price: 50000,
        amount: 2,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2018,
        color: 'Black',
        price: 45000,
        amount: 1,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'BMW',
        model: 'M5',
        year: 2022,
        color: 'Blue',
        price: 70000,
        amount: 2,
        isSportCar: true,
        type: 'Sedan',
    },
    {
        brand: 'Mercedes-Benz',
        model: 'E-Class',
        year: 2020,
        color: 'Silver',
        price: 60000,
        amount: 3,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Audi',
        model: 'A4',
        year: 2021,
        color: 'Gray',
        price: 45000,
        amount: 0,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Lamborghini',
        model: 'Huracan',
        year: 2023,
        color: 'Yellow',
        price: 300000,
        amount: 1,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Ferrari',
        model: '488 GTB',
        year: 2022,
        color: 'Red',
        price: 350000,
        amount: 1,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Porsche',
        model: '911',
        year: 2021,
        color: 'White',
        price: 120000,
        amount: 2,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Toyota',
        model: 'Golf',
        year: 2020,
        color: 'Black',
        price: 20000,
        amount: 6,
        isSportCar: false,
        type: 'Hatchback',
    },
    {
        brand: 'Subaru',
        model: 'Forester',
        year: 2021,
        color: 'Green',
        price: 30000,
        amount: 3,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Jeep',
        model: 'Wrangler',
        year: 2022,
        color: 'Orange',
        price: 35000,
        amount: 0,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Mazda',
        model: 'CX-5',
        year: 2020,
        color: 'Red',
        price: 28000,
        amount: 5,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Kia',
        model: 'Soul',
        year: 2021,
        color: 'Yellow',
        price: 20000,
        amount: 4,
        isSportCar: false,
        type: 'Hatchback',
    },
    {
        brand: 'Toyota',
        model: 'Tucson',
        year: 2022,
        color: 'White',
        price: 30000,
        amount: 3,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Nissan',
        model: 'Sentra',
        year: 2019,
        color: 'Silver',
        price: 22000,
        amount: 3,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Volvo',
        model: 'XC60',
        year: 2020,
        color: 'Blue',
        price: 40000,
        amount: 2,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Lexus',
        model: 'RX',
        year: 2021,
        color: 'Black',
        price: 50000,
        amount: 2,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Land Rover',
        model: 'Range Rover Evoque',
        year: 2022,
        color: 'Gray',
        price: 60000,
        amount: 0,
        isSportCar: false,
        type: 'SUV',
    },
];

// ! ========================================================================

// Знайти авто заданого кольору
// Знайти всі авто чорного кольору
// Знайти всі авто червоного кольору
// Знайти всі авто білого кольору

function getCarByColor(cars, userColor) {
    return cars.filter(car => car.color === userColor);
}

// console.table(getCarByColor(cars, 'Blue'));
// console.table(getCarByColor(cars, 'Black'));
// console.table(getCarByColor(cars, 'Red'));
// console.table(getCarByColor(cars, 'White'));

//------------------------------------------------------------------------------------

// Знайти усі спорткари

function getAllSportCars(cars) {
    return cars.filter(car => car.isSportCar);
}

// console.table(getAllSportCars(cars));

//------------------------------------------------------------------------------------

// Знайти авто 2022 року

function getCarsByYear(cars, userYear) {
    return cars.filter(car => car.year === userYear);
}

// console.table(getCarByYear(cars, 2022));

//------------------------------------------------------------------------------------

// Знайти авто певної марки
// Знайти всі автомобілі марки 'BMW'
// Знайти всі авто марки 'Audi'
// Знайти всі авто марки 'Mercedes'
// Знайти всі авто марки 'Tesla'
// Знайти всі авто марки 'Lexus'
// Знайти всі машини заданої марки (наприклад, Toyota).

function getCarsByBrand(cars, userBrand) {
    return cars.filter(car => car.brand === userBrand);
}

// console.table(getCarsByBrand(cars, 'BMW'));
// console.table(getCarsByBrand(cars, 'Audi'));
// console.table(getCarsByBrand(cars, 'Mercedes'));
// console.table(getCarsByBrand(cars, 'Tesla'));
// console.table(getCarsByBrand(cars, 'Lexus'));
// console.table(getCarsByBrand(cars, 'Toyota'));

//------------------------------------------------------------------------------------

// Знайти авто дорожче заданої ціни
// Знайти всі авто, що мають ціну більше ніж 50000
// Знайти всі авто, що мають ціну більше ніж 25000
// Знайти всі машини з ціною вище вказаної.

function getCarsByPriceMoreThan(cars, userPrice) {
    return cars.filter(car => car.price > userPrice);
}

// console.table(getCarsByPriceMoreThan(cars, 60000));
// console.table(getCarsByPriceMoreThan(cars, 50000));
// console.table(getCarsByPriceMoreThan(cars, 25000));

//------------------------------------------------------------------------------------

// Знайти авто заданого типу
// Знайти всі авто типу 'SUV'
// Знайти всі авто, які є седанами
// Знайти всі машини певного типу (наприклад, Coupe).

function getCarsByType(cars, userType) {
    return cars.filter(car => car.type === userType);
}

// console.table(getCarsByType(cars, 'SUV'));
// console.table(getCarsByType(cars, 'Sedan'));
// console.table(getCarsByType(cars, 'Coupe'));

//------------------------------------------------------------------------------------

// Знайти авто з кількістю більше ніж задане значення
// Знайти всі авто, що мають кількість більше 2

function getCarsByAmountMoreThan(cars, userAmount) {
    return cars.filter(car => car.amount > userAmount);
}

// console.table(getCarsByAmountMoreThan(cars, 5));
// console.table(getCarsByAmountMoreThan(cars, 2));

//------------------------------------------------------------------------------------

// Знайти авто, випущені після 2018 року
// Знайти всі авто, випущені після 2021 року

function getCarsByAfterYear(cars, userYear) {
    return cars.filter(car => car.year > userYear);
}

// console.table(getCarsByAfterYear(cars, 2018));
// console.table(getCarsByAfterYear(cars, 2021));

//------------------------------------------------------------------------------------

// Знайти авто, випущені до 2015 року
// Знайти всі авто, випущені до 2017 року

function getCarsByBeforeYear(cars, userYear) {
    return cars.filter(car => car.year < userYear);
}

// console.table(getCarsByBeforeYear(cars, 2015));
// console.table(getCarsByBeforeYear(cars, 2017));

//------------------------------------------------------------------------------------

// Знайти авто, ціна яких в межах від 20000 до 40000

function getCarsByPriceRange(cars, minPrice, maxPrice) {
    return cars.filter(car => {
        const minimal = car.price >= minPrice;
        const maximal = car.price <= maxPrice;

        return minimal && maximal;
    });
}

// console.table(getCarsByPriceRange(cars, 20000, 40000));

//------------------------------------------------------------------------------------

// Знайти всі авто, які не є спортивними

function getNotSportCars(cars) {
    return cars.filter(car => !car.isSportCar);
}

// console.table(getNotSportCars(cars));

//------------------------------------------------------------------------------------

// Знайти всі авто, що мають ціну менше ніж 30000

function getCarsByPriceLessThan(cars, userPrice) {
    return cars.filter(car => car.price < userPrice);
}

// console.table(getCarsByPriceLessThan(cars, 30000));

//------------------------------------------------------------------------------------

// Знайти всі авто, які не є седанами

function getCarsByExceptType(cars, userType) {
    return cars.filter(car => car.type !== userType);
}

// console.table(getCarsByExceptType(cars, 'Sedan'));

//------------------------------------------------------------------------------------

// Знайти всі авто, випущені в 2020 році

function getCarsByCurrentYear(cars, userYear) {
    return cars.filter(car => car.year === userYear);
}

// console.table(getCarsByCurrentYear(cars, 2020));

//------------------------------------------------------------------------------------

// Знайти всі авто, що мають кількість менше 5

function getCarsByAmountLessThan(cars, userAmount) {
    return cars.filter(car => car.amount < userAmount);
}

// console.table(getCarsByAmountLessThan(cars, 5));

// ! ========================================================================

// Порахувати кількість авто заданого року

function getTotalCarsByColor(cars, userColor) {
    const result = cars.filter(car => car.color === userColor).length;
    return `Кількість автомобілів ${userColor} кольору складає ${result} одиниць`;
}

// console.log(getTotalCarsByColor(cars, 'Blue'));

//------------------------------------------------------------------------------------

// Порахувати кількість машин вказаного року.

function getTotalCarsByYear(cars, userYear) {
    const result = cars.filter(car => car.year === userYear).length;
    return `Кількість автомобілів ${userYear} кольору складає ${result} одиниць`;
}

// console.log(getTotalCarsByYear(cars, 2020));

//------------------------------------------------------------------------------------

// Відсортувати машини за роком випуску (від найстарішого до найновішого).

function sortCarsByYear(cars) {
    return cars.toSorted((a, b) => a.year - b.year);
}

// console.table(sortCarsByYear(cars));

//------------------------------------------------------------------------------------

// Знайти найдорожчу машину.

function getMostExspensiveCar(cars) {
    return cars.toSorted((a, b) => b.price - a.price)[0];
}

// console.table(getMostExspensiveCar(cars));

//------------------------------------------------------------------------------------

// Порахувати загальну кількість машин.

function getTotalCountCars(cars) {
    return cars.reduce((acc, car) => acc + car.amount, 0);
}

// console.log(getTotalCountCars(cars));

//------------------------------------------------------------------------------------

// Відсортувати машини за ціною (від найдешевшої до найдорожчої).

function sortCarsByPrice(cars) {
    return cars.toSorted((a, b) => a.price - b.price);
}

// console.table(sortCarsByPrice(cars));

//------------------------------------------------------------------------------------

// Знайти всі машини певного кольору та року випуску.

function getAllCarsByColorAndYear(cars, userColor, userYear) {
    return cars.filter(car => {
        const carColor = car.color === userColor;
        const carYear = car.year === userYear;

        return carColor && carYear;
    });
}

// console.table(getAllCarsByColorAndYear(cars, 'Black', 2020));

//------------------------------------------------------------------------------------

// Порахувати середню ціну всіх машин.

function getAveragePriceAllCars(cars) {
    const totalPrice = cars.reduce((acc, car) => acc + car.price * car.amount, 0);
    const totalAmount = cars.reduce((acc, car) => acc + car.amount, 0);

    return (totalAmount > 0 ? totalPrice / totalAmount : 0).toFixed(0);
}

// console.log(`Cередня ціна всіх машин: ${getAveragePriceAllCars(cars)}$`);

//------------------------------------------------------------------------------------

// Знайти всі машини, у яких кількість на складі більша за 0.

function getAllCarsByAmountMoreThan(cars, userAmount) {
    return cars.filter(car => car.amount > userAmount);
}

// console.table(getAllCarsByAmountMoreThan(cars, 1));

//------------------------------------------------------------------------------------

// Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.

function getCarsByPriceLessThanAndYearMoreThan(cars, userPrice, userYear) {
    return cars.filter(car => {
        const lessPrice = car.price < userPrice;
        const moreYear = car.year > userYear;

        return lessPrice && moreYear;
    });
}

// console.table(getCarsByPriceLessThanAndYearMoreThan(cars, 30000, 2020));

//------------------------------------------------------------------------------------

// Порахувати сумарну кількість всіх машин заданої марки.

function getTotalCountCarsByBrand(cars, userBrand) {
    const totalAmount = cars
        .filter(car => car.brand === userBrand)
        .reduce((acc, car) => acc + car.amount, 0);

    return totalAmount > 0
        ? `Загальна кількість машин марки ${userBrand}: ${totalAmount}`
        : `Машини марки ${userBrand} не знайдено`;
}

// console.table(getTotalCountCarsByBrand(cars, 'Mazda'));

//------------------------------------------------------------------------------------

// Відсортувати машини за кількістю на складі (від найбільшої до найменшої).

function getSortCarsByAmount(cars) {
    return cars.toSorted((a, b) => a.amount - b.amount);
}

// console.table(getSortCarsByAmount(cars));

//------------------------------------------------------------------------------------

// Знайти всі машини, які не є спортивними та доступні для продажу.

function getAvailableNotSportCars(cars) {
    return cars.filter(car => {
        const availableCar = car.amount >= 1;
        const notSpotCar = !car.isSportCar;

        return availableCar && notSpotCar;
    });
}
//
// console.table(getAvailableNotSportCars(cars));

//------------------------------------------------------------------------------------

// Порахувати загальну вартість всіх машин складі.

function getTotalPrice(cars) {
    return cars.reduce((acc, car) => acc + car.price * car.amount, 0);
}

// console.table(getTotalPrice(cars));

//------------------------------------------------------------------------------------

// Знайти всі машини певного типу та кольору.

function getCarsByTypeAndColor(cars, userType, userColor) {
    return cars.filter(car => {
        const carType = car.type === userType;
        const carColor = car.color === userColor;

        return carType && carColor;
    });
}

// console.table(getCarsByTypeAndColor(cars, 'Sedan', 'Blue'));

//------------------------------------------------------------------------------------

// Відсортувати машини за брендом та моделлю в алфавітному порядку.

function sortCarByBrandAndModelAlphabet(cars) {
    return cars
        .toSorted((a, b) => a.brand.localeCompare(b.brand))
        .toSorted((a, b) => a.model.localeCompare(b.model));
}

// console.table(sortCarByBrandAndModelAlphabet(cars));

//------------------------------------------------------------------------------------

// Перевірити, чи є хоч одна машина певного кольору.

function isAnyCarByColor(cars, userColor) {
    return cars.some(car => car.color === userColor);
}

// console.log(isAnyCarByColor(cars, 'Black'));

//------------------------------------------------------------------------------------

// Перевірити, чи є хоч одна машина певного року.

function isAnyCaByYear(cars, userYear) {
    return cars.some(car => car.year === userYear);
}

// console.log(isAnyCaByYear(cars, 2021));

//------------------------------------------------------------------------------------

// Перевірити, чи є всі авто є спроткарами.

function isAllSportCar(cars) {
    return cars.every(car => car.isSportCar);
}

// console.log(isAllSportCar(cars));

//------------------------------------------------------------------------------------

// Перевірити, чи є всі новіші за вказаний рік.

function isAllNewCarByYearMoreThan(cars, userYear) {
    return cars.every(car => car.year > userYear);
}

// console.log(isAllNewCarByYearMoreThan(cars, 2020));

//------------------------------------------------------------------------------------

// Створити новий масив, що містить лише назви моделей усіх машин.

function getCarsModel(cars) {
    return cars.map(car => car.model);
}

// console.table(getCarsModel(cars));

//------------------------------------------------------------------------------------

// Знайти індекс першої машини з роком випуску 2022 року.

function getIndexFistCarByYear(cars, userYear) {
    return cars.findIndex(car => car.year === userYear);
}

// console.table(getIndexFistCarByYear(cars, 2020));

//------------------------------------------------------------------------------------

// Сортувати за ціною

function sortCarByPrice(cars) {
    return cars.toSorted((a, b) => a.price - b.price);
}

// console.table(sortCarByPrice(cars));

// ! ========================================================================

// Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.

function getCarByPriceSortByYear(cars, userPrice) {
    return cars.filter(car => car.price > userPrice).toSorted((b, a) => a.year - b.year);
}

// console.table(getCarByPriceSortByYear(cars, 50000));

//------------------------------------------------------------------------------------

// Створити новий масив, що містить лише моделі доступних для продажу машин.

function getAvailableModel(cars) {
    return cars.filter(car => car.amount >= 1).map(car => car.model);
}

// console.table(getAvailableModel(cars));

//------------------------------------------------------------------------------------

// Знайти першу машину, яка не є спортивною та має кількість на складі більше 0, потім повернути її колір.

function getColorFirstAvailableNotSportCar(cars) {
    return cars.find(car => car.amount >= 1 && !car.isSportCar);
}

// console.table(getColorFirstAvailableNotSportCar(cars));

//------------------------------------------------------------------------------------

// Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.

function getTotalCarsPriceByAmountAndPriceLessThan(cars, userAmount, userPrice) {
    return cars
        .filter(car => {
            const carAmount = car.amount > userAmount;
            const carPrice = car.price < userPrice;

            return carAmount && carPrice;
        })
        .reduce((acc, car) => acc + car.price * car.amount, 0);
}

// console.table(getTotalCarsPriceByAmountAndPriceLessThan(cars, 2, 40000));

//------------------------------------------------------------------------------------

// Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.

function getModelByTypeSortedByYear(cars, userType) {
    return cars
        .filter(car => car.type === userType)
        .toSorted((a, b) => a.year - b.year)
        .map(car => car.model);
}

// console.table(getModelByTypeSortedByYear(cars, 'SUV'));

//------------------------------------------------------------------------------------

// Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди та моделі цих машин.

function getAllSportCarsByPriceMoreThan(cars, userPrice) {
    return cars
        .filter(car => car.isSportCar && car.price > userPrice)
        .toSorted((a, b) => a.price - b.price)
        .map(car => {
            return {
                brand: car.brand,
                model: car.model,
            };
        });
}

// console.table(getAllSportCarsByPriceMoreThan(cars, 60000));

//------------------------------------------------------------------------------------

// Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин та ціну.

function getModelPriceCarBySortColorAndYear(cars, userColor, userYear) {
    return cars
        .filter(car => car.color === userColor && car.year > userYear)
        .toSorted((a, b) => a.price - b.price)
        .map(car => {
            return {
                model: car.model,
                price: car.price,
            };
        });
}
// console.table(getModelPriceCarBySortColorAndYear(cars, 'Blue', 2020));

//------------------------------------------------------------------------------------

// Повернути масив, що містить лише кольори доступних для продажу машин, та зробити щоб колір не повторювався дівчі.

function getUnigueAvailableColorCar(cars) {
    return cars
        .filter(car => car.amount >= 1)
        .reduce((acc, car) => {
            if (!acc.includes(car.color)) {
                acc.push(car.color);
            }

            return acc;
        }, []);
}

// console.table(getUnigueAvailableColorCar(cars));

//------------------------------------------------------------------------------------

// Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.

function getBrandAndModelAfterFirstIndexCar(cars, userPrice) {
    const fistIndexCar = cars.findIndex(car => car.price < userPrice);

    return cars.slice(fistIndexCar + 1).map(car => {
        return {
            brand: car.brand,
            model: car.model,
        };
    });
}

// console.table(getBrandAndModelAfterFirstIndexCar(cars, 25000));

//------------------------------------------------------------------------------------

// Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.

function getModelBySortedRangePrice(cars, minPrice, maxPrice) {
    return cars
        .filter(car => {
            const minimal = car.price >= minPrice;
            const maximal = car.price <= maxPrice;

            return minimal && maximal;
        })
        .toSorted((b, a) => a.year - b.year)
        .map(car => car.model);
}

// console.table(getModelBySortedRangePrice(cars, 40000, 60000));

//------------------------------------------------------------------------------------

// Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70000.

function isAnyCarByAmountAndPriceMoreThan(cars, userAmount, userPrice) {
    return cars.some(car => {
        const carAmount = car.amount > userAmount;
        const carPrice = car.price > userPrice;

        return carAmount && carPrice;
    });
}

// console.table(isAnyCarByAmountAndPriceMoreThan(cars, 5, 70000));

//------------------------------------------------------------------------------------

// Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.

function getBrandAndModelBySortAmountMoreThan(cars, userAmount) {
    return cars
        .filter(car => car.amount > userAmount)
        .toSorted((b, a) => a.amount - b.amount)
        .map(car => {
            return {
                brand: car.brand,
                model: car.model,
            };
        });
}

// console.table(getBrandAndModelBySortAmountMoreThan(cars, 0));
