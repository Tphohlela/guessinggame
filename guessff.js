const guessFactoryFunction = () => {

    const error = (number) => {
        if (number > 100 || number < 1) {
            return 'Please enter numbers that range between 1 and 100';
        }
    }

    const game = (number, randomNumber) => {
        if (number > 0 && number < 101) {
            if (number > randomNumber) {
                return 'Your guess is too high';
            }

            else if (number < randomNumber) {
                return 'Your guess is too low';
            }

            else if (number == randomNumber) {
                return `Correct, the secret number is ${randomNumber}`;

            }
            else {
                return null;
            }
        }
    }

    return {
        game,
        error
    }
}