import {
  getRandomNumber,
  getAnswer,
  questionText,
  getResult,
  getRandomSign,
  congratulationText,
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
    const answerUnified = Number(userAnswer);
    // eslint-disable-next-line no-new-func
    const correctAnswer = Function(`return + ${currentExpression}`)();
    const isCorrect = answerUnified === correctAnswer;

    getResult(isCorrect, userAnswer, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i += 1;
  }
  congratulationText();
};
export default brainCalc;
