import startGame from '..';

export default () => {
  const description = 'What is the result of the expression?';
  const questionGenerate = () => {
    const num1 = Math.round(Math.random() * 100) + 1;
    const num2 = Math.round(Math.random() * 100) + 1;
    const randomOperation = Math.floor(Math.random() * 3);
    switch (randomOperation) {
      case 0:
        return [`${num1} + ${num2}`, num1 + num2];
      case 1:
        return [`${num1} - ${num2}`, num1 - num2];
      default:
        return [`${num1} * ${num2}`, num1 * num2];
    }
  };
  startGame(questionGenerate, description);
};
