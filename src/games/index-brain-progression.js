import {
  getRandomNumber,
  getAnswer,
  questionText,
  result,
  gg,
} from '../index.js';

const randomLine = () => {
  const randomNumber = getRandomNumber();
  let newLine = 0;
  const arr = [];

  for (let j = 0; j < 10; j += 1) {
    newLine += randomNumber;
    arr.push(newLine);
  }
  return arr;
};

// Brain Progression
const brainProgression = () => {
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i < 3) {
    const arrToReplace = randomLine();
    const randomIndex = getRandomNumber();
    const correctAnswer = arrToReplace[randomIndex - 1];
    arrToReplace[randomIndex - 1] = '..';

    const currentExpression = arrToReplace.join(' ');
    questionText(currentExpression);
    const userAnswer = getAnswer();
    const answerUnified = Number(userAnswer);
    const isCorrect = answerUnified === correctAnswer;

    result(isCorrect, userAnswer, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i += 1;
  }
  gg();
};
export default brainProgression;
