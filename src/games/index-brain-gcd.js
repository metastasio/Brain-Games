import {
  getRandomNumber,
  getAnswer,
  questionText,
  getUserName,
  result,
  gg,
} from '../index.js';

// Brain GCD
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
    const expression = (a, b) => {
      while (b) {
        const num = b;
        b = a % b;
        a = num;
      }
      return a;
    };
    const correctAnswer = expression(randomNumber, randomNumber2);
    const isCorrect = answerUnified === correctAnswer;

    result(isCorrect, userAnswer, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i++;
  }
  gg();
};

export default brainGcd;
// import {
//   getRandomNumber,
//   getAnswer,
//   questionText,
//   getUserName,
// } from '../index.js';

// // Brain GCD
// getUserName();
// const brainGcd = () => {
//   console.log('Find the greatest common divisor of given numbers.');

//   let i = 0;
//   while (i < 3) {
//     const randomNumber = getRandomNumber();
//     const randomNumber2 = getRandomNumber();
//     const currentExpression = `${randomNumber} ${randomNumber2}`;
//     questionText(currentExpression);
//     const userAnswer = getAnswer();
//     const userAnswerUnified = Number(userAnswer);
//     const expression = (a, b) => {
//       while (b) {
//         const num = b;
//         b = a % b;
//         a = num;
//       }
//       return a;
//     };
//     const correctExpression = expression(randomNumber, randomNumber2);

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

// export default brainGcd;
