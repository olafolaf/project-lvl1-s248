import startGame from '..';

export default () => {
  const description = 'What number is missing in this progression?';
  const questionGenerate = () => {
    const first = Math.round(Math.random() * 100) + 1;
    const step = Math.round(Math.random() * 10) + 1;
    const empty = Math.round(Math.random() * 8) + 1;
    const iter = (acc, answer, index) => {
      if (index === 10) {
        return [acc.join(' '), String(answer)];
      }
      if (index === empty) {
        const newAcc = [...acc, '..'];
        const newAnswer = acc[index - 1] + step;
        return iter(newAcc, newAnswer, index + 1);
      }
      const newElement = acc[index - 1] === '..' ? acc[index - 2] + (step * 2) : acc[index - 1] + step;
      const newAcc = [...acc, newElement];
      return iter(newAcc, answer, index + 1);
    };
    return iter([first], '', 1);
  };
  startGame(questionGenerate, description);
};
