const btnStartElement = document.querySelector("#btnStart")

const validLogin = 'admin';
const validPassword = 'mySuperPassword';

const userCredentialsHandler = (entity = '', message = '', validValue = '') => {
    const userCredentialValue = prompt(message);

    if(userCredentialValue === null) {
        console.log('Пользователь закрыл форму авторизации');
        return;
    }

    if(userCredentialValue !== validValue) {
        console.log(`Некорректное значение для поля "${entity}". Попробуйте еще раз`);
        return userCredentialsHandler(entity, message, validValue);
    }

    return userCredentialValue;
}

const onSignInHandler = () => {
    const userLogin = userCredentialsHandler('логин', "Введите логин", validLogin);

    if(userLogin === undefined) {
        return;
    }

    console.log(`Вы ввели правильный логин (${userLogin})`);

    const userPassword = userCredentialsHandler('пароль', "Введите пароль", validPassword);

    if(userPassword === undefined) {
        return;
    }

    console.log(`Вы ввели правильный логин (${userPassword})`);
    console.log('debug Авторизация пользователя прошла успешно!');
    alert('Авторизация пользователя прошла успешно!')
}

btnStartElement.addEventListener('click', onSignInHandler);
