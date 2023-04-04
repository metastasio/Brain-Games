import {
  getRandomNumber,
  getAnswer,
  questionText,
  result,
  gg,
} from '../index.js';

// Brain Progression
const brainProgression = () => {
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i < 3) {
    const randomLine = () => {
      const randomNumber = getRandomNumber();
      let newLine = 0;
      const arr = [];

      for (let j = 0; j < 10; j++) {
        newLine += randomNumber;
        arr.push(newLine);
      }
      return arr;
    };
    const arrToReplace = randomLine();
    const randomIndex = getRandomNumber();
    const replacedIndex = arrToReplace[randomIndex - 1];
    arrToReplace[randomIndex - 1] = '..';

    const currentExpression = arrToReplace.join(' ');
    questionText(currentExpression);
    const userAnswer = getAnswer();
    const answerUnified = Number(userAnswer);
    const correctAnswer = replacedIndex;
    const isCorrect = answerUnified === correctAnswer;

    result(isCorrect, userAnswer, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i++;
  }
  gg();
};
export default brainProgression;

// import {
//   getRandomNumber,
//   getAnswer,
//   questionText,
//   getUserName,
// } from '../index.js';

// // Brain Progression
// const brainProgression = () => {
//   console.log('What number is missing in the progression?');

//   let i = 0;

//   while (i < 3) {
//     const randomLine = () => {
//       const randomNumber = getRandomNumber();
//       let newLine = 0;
//       const arr = [];

//       for (let j = 0; j < 10; j++) {
//         newLine += randomNumber;
//         arr.push(newLine);
//       }
//       return arr;
//     };
//     const arrToReplace = randomLine();
//     const randomIndex = getRandomNumber();
//     const replacedIndex = arrToReplace[randomIndex - 1];
//     arrToReplace[randomIndex - 1] = '..';

//     const currentExpression = arrToReplace.join(' ');
//     questionText(currentExpression);
//     const userAnswer = getAnswer();
//     const userAnswerUnified = Number(userAnswer);
//     const correctExpression = replacedIndex;

//     if (userAnswerUnified === correctExpression) {
//       console.log('Correct!');
//       i++;
//     } else {
//       console.log(
//         `${userAnswer} is wrong answer ;(. Correct answer was ${correctExpression}.\nLet's try again, ${getUserName()}!`,
//       );
//       i = 0;
//     }
//   }
// };
// export default brainProgression;
