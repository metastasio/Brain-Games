import {
  getRandomNumber,
  getAnswer,
  questionText,
  getUserName,
  getRandomSign,
} from '../index.js';

// BRAIN CALC
const brainCalc = () => {
  console.log('What is the result of the expression?');

  let i = 0;

  while (i < 3) {
    const sign = getRandomSign();
    const randomNumber = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const currentExpression = `${randomNumber} ${sign} ${randomNumber2}`;

    questionText(currentExpression);
    const userAnswer = getAnswer();
    const userAnswerUnified = Number(userAnswer);
    const expression = eval(currentExpression);

    if (userAnswerUnified === expression) {
      console.log('Correct!');
      i++;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${expression}.\nLet's try again, ${getUserName()}!`,
      );
      i = 0;
    }
  }
};
export default brainCalc;
