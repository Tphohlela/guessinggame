const inputElem = document.querySelector('.input');
const messageElem = document.querySelector('.message');
const errorElem = document.querySelector('.errors');
const newGameMessageElem = document.querySelector('.newGameMessage');
const randomNumber = Math.ceil((Math.random() * 100));


function guessGame() {
    if (inputElem.value > 100 || inputElem.value < 1) {
        errorElem.innerHTML = 'Please enter numbers that range between 1 and 100';
        messageElem.innerHTML = "";

        setTimeout(function () {
            errorElem.innerHTML = "";
        }, 5000);
    }
    
    if (inputElem.value > 0 && inputElem.value < 101) {

        if (inputElem.value > randomNumber) {
            messageElem.innerHTML = 'Your guess is too high';
        }

        else if (inputElem.value < randomNumber) {
            messageElem.innerHTML = 'Your guess is too low';
        }

        else {
            messageElem.innerHTML = `Correct, the secret number is ${randomNumber}`;

            setTimeout(function () {
                newGameMessageElem.innerHTML = "New game started !";
            }, 5000);

            setTimeout(function () {
                messageElem.innerHTML = "";
            }, 5000);

            setTimeout(function () {
                messageElem.innerHTML = "";
                location.reload();
            }, 8000);
        }
    }
}