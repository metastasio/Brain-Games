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

export {
  greetings,
  getUserName,
  gg,
  getRandomSign,
  getAnswer,
  getRandomNumber,
  questionText,
};
