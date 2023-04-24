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
    // no default
  }
  return expression;
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
