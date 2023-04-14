import runGame from '../index.js';
import getRandomNumber from './utils.js';

const task = () => {
  console.log('What is the result of the expression?');
};

const getRandomSign = () => {
  const arr = ['+', '-', '*'];
  const i = getRandomNumber(0, 3);
  const operator = arr[i];
  return operator;
};

const gameFunction = () => {
  const randomNumber = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber} ${getRandomSign()} ${randomNumber2}`;
  // eslint-disable-next-line no-new-func
  const correctAnswer = String(Function(`return + ${question}`)());
  return [question, correctAnswer];
};
export default () => {
  runGame(task, gameFunction);
};
