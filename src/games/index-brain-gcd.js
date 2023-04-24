import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const gameFunction = () => {
  const randomNumber = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber} ${randomNumber2}`;
  const correctAnswer = String(gcd(randomNumber, randomNumber2));
  return [question, correctAnswer];
};

export default () => {
  runGame(task, gameFunction);
};
