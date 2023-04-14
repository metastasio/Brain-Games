import runGame from '../index.js';
import getRandomNumber from './utils.js';

const task = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (num) => {
  for (let j = 2, k = Math.sqrt(num); j <= k; j += 1) {
    if (num % j === 0) return false;
  }
  return num > 1;
};

const gameFunction = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(task, gameFunction);
};
