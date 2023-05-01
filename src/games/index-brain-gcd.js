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
  const number = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number} ${number2}`;
  const correctAnswer = String(gcd(number, number2));
  return [question, correctAnswer];
};

export default () => {
  runGame(task, gameFunction);
};
