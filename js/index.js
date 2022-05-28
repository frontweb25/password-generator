

const dom = {
     button: document.querySelector('#button'),
     input: document.querySelector('#input')
};

console.log(dom)

const data = {
    letters: {
        up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        down: 'abcdefghijklmnopqrstuvwxyz'
    },
    numbers: '0123456789',
    simbols: '!@#$%^&*()_-+={}[]/|?,.<>:;'
};

//функция генерации рандомного числа

function randomNumberGenerator(maxNumber) {
    const randomNumber = Math.round(Math.random() * maxNumber);
    return randomNumber;
}


//Функция генерации набора символов

function paswordGenerator(symbols, length) {
    const maxIndex = symbols.length - 1; // получаем длинну строки
    let password = '';
    for(let i = 0; i < length; i++) {
        const idx = randomNumberGenerator(maxIndex); //получаем рандомный айдишник строки
        const randomLetter = symbols[idx]; // получаем рандомную букву под айдишником 
        password += randomLetter; // присваиваем результат 
    }
    return password; 
}
const readyPassword =  paswordGenerator(data.letters.down, 10);
console.log(readyPassword);



