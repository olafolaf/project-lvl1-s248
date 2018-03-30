import startGame from '..';

export default () => {
  const description = 'Is this number prime?';
  const questionGenerate = () => {
    const question = Math.round(Math.random() * 100) + 1;
    const isPrime = (number) => {
      const iter = (num, i) => {
        if (i > num / 2) {
          return true;
        }
        if (num % i === 0) {
          return false;
        }
        return iter(num, i + 1);
      };
      return iter(number, 2);
    };
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  startGame(questionGenerate, description);
};

