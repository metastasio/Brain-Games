import runGame from '../index.js';
import getRandomNumber from './utils.js';

const getRandomLine = () => {
  const randomNumber = getRandomNumber();
  let newLine = 0;
  const arr = [];

  for (let j = 0; j < 10; j += 1) {
    newLine += randomNumber;
    arr.push(newLine);
  }
  return arr;
};

const task = () => {
  console.log('What number is missing in the progression?');
};

const gameFunction = () => {
  const lineToReplace = getRandomLine();
  const randomIndex = getRandomNumber();
  const correctAnswer = String(lineToReplace[randomIndex - 1]);
  lineToReplace[randomIndex - 1] = '..';

  const question = lineToReplace.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runGame(task, gameFunction);
};
