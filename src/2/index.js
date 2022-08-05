const btnStartElement = document.querySelector("#btnStart")

const isMirrorNumbersHandler = () => {
    const userNumber = prompt("Введите шестизначное число");
    const userNumberArray = userNumber.split('').join('');
    const userNumberMirrorArray = userNumber.split('').reverse().join('');

    if(userNumberArray === userNumberMirrorArray) {
        console.log(`Введенное вами число ${userNumberArray} является зеркальным (${userNumberArray}, ${userNumberMirrorArray})`);
    } else {
        console.log(`Введенное вами число ${userNumberArray} не является зеркальным (${userNumberArray}, ${userNumberMirrorArray})`);
    }
}

btnStartElement.addEventListener('click', isMirrorNumbersHandler);
