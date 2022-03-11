const inputElem = document.querySelector('.input');
const messageElem = document.querySelector('.message');
const errorElem = document.querySelector('.errors');
const newGameMessageElem = document.querySelector('.newGameMessage');
const randomNumber = Math.ceil((Math.random() * 100));

const guessInstance = guessFactoryFunction();

const guessGame = () => {

    if (inputElem.value > 100 || inputElem.value < 1) {
        errorElem.innerHTML = guessInstance.error(inputElem.value)
        messageElem.innerHTML = "";
        setTimeout(() => errorElem.innerHTML = "", 5000);
    }

    if (inputElem.value > 0 && inputElem.value < 101) {
        messageElem.innerHTML = guessInstance.game(inputElem.value, randomNumber)

        if (inputElem.value == randomNumber) {
            setTimeout(() => newGameMessageElem.innerHTML = "New game started !", 5000);
            setTimeout(() => messageElem.innerHTML = "", 5000);
            
            setTimeout(() => {
                messageElem.innerHTML = "";
                location.reload();
            }, 8000);
        }
    }
}