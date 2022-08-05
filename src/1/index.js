const btnStartElement = document.querySelector("#btnStart")

const getGreatestNumbersHandler = () => {
    const userNumber = +(prompt("Введите трехзначное число"));
    const userNumberUnits = userNumber % 10;
    const userNumberTens = ((userNumber - userNumberUnits) / 10) % 10;
    const userNumberHundreds = (userNumber - (userNumber % 100)) / 100;
    
    if(userNumberUnits === userNumberTens && userNumberTens === userNumberHundreds) {
        console.log('Все цифры одинаковые');
    } else if (userNumberUnits === userNumberTens || userNumberTens === userNumberHundreds || userNumberUnits === userNumberHundreds) {
        console.log('Среди цифр есть одинаковые');
    } else {
        console.log('Все цифры разные');
    }
}

btnStartElement.addEventListener('click', getGreatestNumbersHandler);
