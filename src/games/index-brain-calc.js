import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const getSign = () => {
  const signs = ['+', '-', '*'];
  const i = getRandomNumber(0, 3);
  const operator = signs[i];
  return operator;
};

const getExpression = (number1, sign, number2) => {
  let expression;
  switch (sign) {
    case '+':
      expression = number1 + number2;
      break;
    case '-':
      expression = number1 - number2;
      break;
    case '*':
      expression = number1 * number2;
      break;
    default:
      throw new Error('Unknown operator!');
  }
  return expression;
};

const gameFunction = () => {
  const number = getRandomNumber();
  const number2 = getRandomNumber();
  const sign = getSign();
  const question = `${number} ${sign} ${number2}`;
  const correctAnswer = String(getExpression(number, sign, number2));
  return [question, correctAnswer];
};
export default () => {
  runGame(task, gameFunction);
};
