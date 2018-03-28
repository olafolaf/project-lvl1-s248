import startGame from '..';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questionGenerate = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return [`${num1} ${num2}`, `${gcd(num1, num2)}`];
  };
  startGame(questionGenerate, description);
};
