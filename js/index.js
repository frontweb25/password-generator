
const dom = {
         button: document.querySelector('#button'),
         outPassword: document.querySelector('#password'),
     passwordSetings: {
         length: document.querySelector('#length'),
         uppercase: document.querySelector('#uppercase'),
         numbers: document.querySelector('#numbers'),
         symbols: document.querySelector('#symbols'),

     }
};


const data = {
    letters: {
        up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        down: 'abcdefghijklmnopqrstuvwxyz'
    },
    numbers: '0123456789',
    symbols: '!@#$%^&*()_-+={}[]/|?<>:;'
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
    

    const uppercase = dom.passwordSetings.uppercase;
    const numbers = dom.passwordSetings.numbers;
    const symbols = dom.passwordSetings.symbols;
    let string = data.letters.down;
   
    
    if(uppercase.checked) {
        string += data.letters.up;
    }
    if(numbers.checked) {
        string += data.numbers;
    }
    if(symbols.checked) {
        string += data.symbols;
    }

    const readyPassword =  paswordGenerator(string, passwordLength);
    dom.outPassword.innerHTML = readyPassword;
    if(readyPassword.length > 20) {
        dom.outPassword.innerHTML = 'Слишком длинный пароль';
    }
};


