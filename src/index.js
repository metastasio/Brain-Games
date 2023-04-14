import readlineSync from 'readline-sync';

const runGame = (task, gameFunction) => {
  const userName = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name? ',
  );
  console.log(`Hello, ${userName}!`);
  task();

  const ROUNDS = 3;
  let i = 0;
  while (i < ROUNDS) {
    const [question, correctAnswer] = gameFunction();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerUnified = userAnswer.toLowerCase();

    if (userAnswerUnified === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `'${userAnswerUnified}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
