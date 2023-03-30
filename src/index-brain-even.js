/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;

  while (count < 3) {
    let randomNumder = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumder}`);
    const answer = readlineSync.question('Answer: ');

    if (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'no') {
      console.log(
        `'${answer}' is the wrong answer ;(. The answer should be 'yes' or 'no'.\n Let's try again, ${userName}!`
      );
      count = 0;
      let randomNumder = Math.floor(Math.random() * 100) + 1;
    }

    if (answer.toLowerCase() === 'yes') {
      if (randomNumder % 2 === 0) {
        count++;
        console.log('Correct!');
        let randomNumder = Math.floor(Math.random() * 100) + 1;
      } else if (randomNumder % 2 !== 0) {
        console.log(
          `'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}!`
        );
        count = 0;
        let randomNumder = Math.floor(Math.random() * 100) + 1;
      }
    } else if (answer.toLowerCase() === 'no') {
      if (randomNumder % 2 !== 0) {
        count++;
        console.log('Correct!');
        let randomNumder = Math.floor(Math.random() * 100) + 1;
      } else if (randomNumder % 2 === 0) {
        console.log(
          `'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${userName}`
        );
        count = 0;
        let randomNumder = Math.floor(Math.random() * 100) + 1;
      }
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default brainEven;
