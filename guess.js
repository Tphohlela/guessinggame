const inputElem = document.querySelector('.input');
const messageElem = document.querySelector('.message');
const randomNumber = Math.ceil((Math.random() * 100));

function timer() {
    myVar1 = setTimeout(function () {
        messageElem.innerHTML = null;
    }
        , 5000);
}

function guessGame() {
    if (inputElem.value > randomNumber) {
        messageElem.innerHTML = 'Your guess is too high';
    }

    else if (inputElem.value < randomNumber) {
        messageElem.innerHTML = 'Your guess is too low';
    }

    else {
        messageElem.innerHTML = `Correct, the secret number is ${randomNumber}`;
        timer();
        setTimeout(function(){
            location.reload();
            messageElem.innerHTML = 'New game started';
          }, 5000);

    }
}