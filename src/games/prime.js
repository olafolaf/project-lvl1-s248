import startGame from '..';

export default () => {
  const description = 'Is this number prime?';
  const questionGenerate = () => {
    const num = Math.round(Math.random() * 100) + 1;
    const isPrime = (number) => {
      for (let i = 2; i < number / 2; i += 1) {
        if (number % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    return [num, isPrime(num)];
  };
  startGame(questionGenerate, description);
};

