import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * 100) + 1;
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

