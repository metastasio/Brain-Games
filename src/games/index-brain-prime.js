import {
  getRandomNumber,
  getAnswer,
  questionText,
  getResult,
  congratulationText,
} from '../index.js';

// IsPrime function

const isPrime = (num) => {
  for (let j = 2, k = Math.sqrt(num); j <= k; j += 1) {
    if (num % j === 0) return false;
  }
  return num > 1;
};

// BRAIN PRIME

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber();
    questionText(randomNumber);
    const answer = getAnswer();
    const answerUnified = answer.toLowerCase();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const isCorrect = answerUnified === correctAnswer;

    getResult(isCorrect, answerUnified, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i += 1;
  }
  congratulationText();
};

export default brainPrime;
