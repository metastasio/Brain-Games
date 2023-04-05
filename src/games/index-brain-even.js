import {
  getRandomNumber,
  getAnswer,
  questionText,
  getResult,
  congratulationText,
} from '../index.js';

// BRAIN EVEN
const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const randomNumber = getRandomNumber();
    questionText(randomNumber);
    const answer = getAnswer();
    const answerUnified = answer.toLowerCase();
    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    const isCorrect = answerUnified === correctAnswer;

    getResult(isCorrect, answerUnified, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i += 1;
  }
  congratulationText();
};

export default brainEven;
