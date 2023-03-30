/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;

  while (count < 3) {
    let randomNumder = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumder}`);
    const answer = readlineSync.question('Your answer: ');
    const answerUnified = answer.toLowerCase();
    const isEven = randomNumder % 2 === 0;
    const isOdd = randomNumder % 2 !== 0;

    if (answerUnified !== 'yes' && answerUnified !== 'no') {
      console.log(
        `'${answer}' is wrong answer ;(.\nLet's try again, ${userName}!`
      );
      count = 0;
    }

    if (answerUnified === 'yes') {
      if (isEven) {
        count++;
        console.log('Correct!');
      } else if (isOdd) {
        console.log(
          `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
        );
        count = 0;
      }
    } else if (answerUnified === 'no') {
      if (isOdd) {
        count++;
        console.log('Correct!');
      } else if (isEven) {
        console.log(
          `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`
        );
        count = 0;
        randomNumder = Math.floor(Math.random() * 100) + 1;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
