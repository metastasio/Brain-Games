import readlineSync from 'readline-sync';

const ROUNDS = 3;

const runGame = (task, gameFunction) => {
  const userName = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name? ',
  );
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < ROUNDS;) {
    const [question, correctAnswer] = gameFunction();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
