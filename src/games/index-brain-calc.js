import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const i = getRandomNumber(0, 3);
  const operator = signs[i];
  return operator;
};

const getExpression = (number1, sign, number2) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    // no default
  }
};

const gameFunction = () => {
  const randomNumber = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const sign = getRandomSign();
  const question = `${randomNumber} ${sign} ${randomNumber2}`;
  const correctAnswer = String(
    getExpression(randomNumber, sign, randomNumber2),
  );
  return [question, correctAnswer];
};
export default () => {
  runGame(task, gameFunction);
};
