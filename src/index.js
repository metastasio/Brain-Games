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

// Answers
const getAnswer = () => readlineSync.question('Your answer: ');

// QUESTIONS
const questionText = (task) => {
  console.log(`Question: ${task}`);
};

// RESULT
const getResult = (isCorrect, answerUnified, correctAnswer) => {
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answerUnified}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName()}!`,
    );
  }
};

// Congratulation text
const congratulationText = () => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  greetings,
  getUserName,
  congratulationText,
  getAnswer,
  getRandomNumber,
  questionText,
  getResult,
};
