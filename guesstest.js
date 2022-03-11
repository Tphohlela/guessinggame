describe('Guessing game factory function', () => {
    it('should return error message if user chooses number greater than 100 ', () => {
        const guess = guessFactoryFunction();

        assert.equal('Please enter numbers that range between 1 and 100', guess.error(101));
    });

    it('should return error message if user chooses number less than 1 ', () => {
        const guess = guessFactoryFunction();

        assert.equal('Please enter numbers that range between 1 and 100', guess.error(-1));
    });

    it('should return guess is too high message if user chooses number higher than random number ', () => {
        const guess = guessFactoryFunction();

        assert.equal('Your guess is too high', guess.game(66, 55));
    });

    it('should return guess is too low message if user chooses number lower than random number ', () => {
        const guess = guessFactoryFunction();

        assert.equal('Your guess is too low', guess.game(44, 55));
    });

    it('should return correct message if user chooses number equal to random number ', () => {
        const guess = guessFactoryFunction();

        assert.equal('Correct, the secret number is 55', guess.game(55, 55));
    });
});
