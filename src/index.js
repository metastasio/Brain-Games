import readlineSync from 'readline-sync';

// Global variables
let userName;

// User greeting function
const greetings = () => {
  userName = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name? ',
  );
  console.log(`Hello, ${userName}!`);
};

// Get user name
const getUserName = () => userName;

// Get random number
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

// Get random sign
const getRandomSign = () => {
  const arr = ['+', '-', '*'];
  const i = Math.floor(Math.random() * arr.length);
  const operator = arr[i];
  return operator;
};

// Answers
const getAnswer = () => {
  const yourAnswer = readlineSync.question('Your answer: ');
  return yourAnswer;
};

// QUESTIONS
const questionText = (task) => {
  console.log(`Question: ${task}`);
};

// Congrats
const gg = () => {
  console.log(`Congratulations, ${userName}!`);
};

// BRAIN EVEN
const brainEven = () => {
  let i = 0;

  while (i < 3) {
    const randomNumber = getRandomNumber();
    questionText(randomNumber);
    const answer = getAnswer();
    const answerUnified = answer.toLowerCase();
    const isEven = randomNumber % 2 === 0;

    const correctAnswer = isEven ? 'yes' : 'no';

    if (answerUnified === correctAnswer) {
      console.log('Correct!');
      i++;
    } else {
      console.log(
        `'${answerUnified}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      i = 0;
    }
  }
};

// BRAIN CALC
const brainCalc = () => {
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
        `${userAnswer} is wrong answer ;(. Correct answer was ${expression}.\nLet's try again, ${userName}!`,
      );
      i = 0;
    }
  }
};

export {
  greetings,
  getUserName,
  brainCalc,
  gg,
  getRandomSign,
  brainEven,
  getAnswer,
  getRandomNumber,
  questionText,
};
