import readlineSync from 'readline-sync';

export default (questionGenerate, description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (!questionGenerate) {
    return;
  }
  const iter = (i) => {
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const [question, correctAnswer] = questionGenerate();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      return iter(i + 1);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  };
  iter(0);
};

