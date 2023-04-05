import {
  getRandomNumber,
  getAnswer,
  questionText,
  getResult,
  congratulationText,
} from '../index.js';

// Random Line Function

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

// Brain Progression
const brainProgression = () => {
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i < 3) {
    const lineToReplace = getRandomLine();
    const randomIndex = getRandomNumber();
    const correctAnswer = lineToReplace[randomIndex - 1];
    lineToReplace[randomIndex - 1] = '..';

    const lineForUser = lineToReplace.join(' ');
    questionText(lineForUser);
    const userAnswer = getAnswer();
    const answerUnified = Number(userAnswer);
    const isCorrect = answerUnified === correctAnswer;

    getResult(isCorrect, userAnswer, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i += 1;
  }
  congratulationText();
};
export default brainProgression;
