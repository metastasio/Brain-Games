import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomLine = () => {
  const number = getRandomNumber();
  let newLine = 0;
  const arr = [];

  for (let j = 0; j < 10; j += 1) {
    newLine += number;
    arr.push(newLine);
  }
  return arr;
};

const task = 'What number is missing in the progression?';

const gameFunction = () => {
  const lineToReplace = getRandomLine();
  const index = getRandomNumber();

  const correctAnswer = String(lineToReplace[index - 1]);
  lineToReplace[index - 1] = '..';
  const question = lineToReplace.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runGame(task, gameFunction);
};
