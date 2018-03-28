import startGame from '..';

export default () => {
  const description = 'Balance the given number.';
  const questionGenerate = () => {
    const balanceTwo = (a, b) => (b - a <= 1 ? [a, b] : balanceTwo(a + 1, b - 1));
    const num = Math.round(Math.random() * 10000);
    const balance = (number) => {
      const numberToArray = String(number).split('').map(element => parseInt(element, 10));
      const iter = (array) => {
        const max = Math.max(...array);
        const min = Math.min(...array);
        if (max - min <= 1) {
          return array;
        }
        const maxIndex = array.indexOf(max);
        const minIndex = array.indexOf(min);
        const newArray = array.filter((element, index) =>
          (index !== maxIndex && index !== minIndex));
        return iter([...newArray, ...balanceTwo(min, max)]);
      };
      const newArray = iter(numberToArray);
      newArray.sort((a, b) => a - b);
      return newArray.join('');
    };
    return [num, balance(num)];
  };
  startGame(questionGenerate, description);
};
