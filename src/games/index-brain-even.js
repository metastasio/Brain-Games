import runGame from '../index.js';
import getRandomNumber from './utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameFunction = () => {
  const question = getRandomNumber();
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(task, gameFunction);
};
