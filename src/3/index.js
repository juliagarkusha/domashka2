const btnStartElement = document.querySelector("#btnStart")

const getPromptNumber = (message) => {
    const userNumber = prompt(message);
    return +(userNumber);
}

const getGreatestNumbersHandler = () => {
    const number1 = getPromptNumber("Введите первое число");
    const number2 = getPromptNumber("Введите второе число");
    const number3 = getPromptNumber("Введите третье число");

    const result = Math.max(number1, number2, number3);
    console.log(`Вы ввели три числа: ${number1}, ${number2} и ${number3}. Наибольшее из них: ${result}`);

}

btnStartElement.addEventListener('click', getGreatestNumbersHandler);
