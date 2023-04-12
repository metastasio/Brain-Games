import {
  getRandomNumber,
  getAnswer,
  questionText,
  getUserName,
  getResult,
  congratulationText,
} from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

getUserName();
const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const currentExpression = `${randomNumber} ${randomNumber2}`;
    questionText(currentExpression);
    const userAnswer = getAnswer();
    const answerUnified = Number(userAnswer);

    const correctAnswer = gcd(randomNumber, randomNumber2);
    const isCorrect = answerUnified === correctAnswer;

    getResult(isCorrect, userAnswer, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i += 1;
  }
  congratulationText();
};

export default brainGcd;
