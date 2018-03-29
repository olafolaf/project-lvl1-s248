import startGame from '..';

export default () => {
  const description = 'What number is missing in this progression?';
  const questionGenerate = () => {
    const first = Math.round(Math.random() * 100) + 1;
    const step = Math.round(Math.random() * 10) + 1;
    const missing = Math.round(Math.random() * 8) + 1;
    const iter = (acc, n) => {
      if (n === 11) {
        const answer = first + ((missing - 1) * step);
        return [acc.join(' '), String(answer)];
      }
      const newElement = n !== missing ? first + ((n - 1) * step) : '..';
      return iter([...acc, newElement], n + 1);
    };
    return iter([], 1);
  };
  startGame(questionGenerate, description);
};
