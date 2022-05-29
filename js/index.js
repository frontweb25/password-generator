
const dom = {
         button: document.querySelector('#button'),
         outPassword: document.querySelector('#password'),
     passwordSetings: {
         length: document.querySelector('#length')
     }
};


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



dom.button.onclick = () => {
    const passwordLength = dom.passwordSetings.length.value;
    const readyPassword =  paswordGenerator(data.letters.down, passwordLength);
    dom.outPassword.innerHTML = readyPassword;
    console.log(readyPassword)
};


