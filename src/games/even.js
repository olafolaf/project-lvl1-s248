import startGame from '..';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const questionGenerate = () => {
    const num = Math.round(Math.random() * 100) + 1;
    const answer = num % 2 === 0 ? 'yes' : 'no';
    return [num, answer];
  };
  startGame(questionGenerate, description);
};
