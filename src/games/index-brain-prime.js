import {
  getRandomNumber,
  getAnswer,
  questionText,
  getUserName,
} from '../index.js';

// BRAIN PRIME

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber();
    questionText(randomNumber);
    const answer = getAnswer();
    const answerUnified = answer.toLowerCase();
    const isPrime = (num) => {
      for (let j = 2, k = Math.sqrt(num); j <= k; j++) {
        if (num % j === 0) return false;
      }
      return num > 1;
    };
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    if (answerUnified === correctAnswer) {
      console.log('Correct!');
      i++;
    } else {
      console.log(
        `'${answerUnified}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName()}!`,
      );
      i = 0;
    }
  }
};

export default brainPrime;
