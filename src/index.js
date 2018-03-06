import readlineSync from 'readline-sync';

export const sayWelcome = str => console.log(`Welcome to the Brain Games!\n${str}`);
let userName = '';
export const sayHello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const getRandomSign = () => {
  const num = getRandomNum();
  if (num <= 33) return '+';
  if (num <= 67) return '-';
  return '*';
};
const sayCongratulations = () => console.log(`Congratulations, ${userName}!`);
const question = (num, expr, correct, wrong) => {
  const answer = readlineSync.question(`Question: ${String(num)}\nYour answer: `);
  const rightAnswer = () => {
    if (expr) return correct;
    return wrong;
  };
  if (answer === String(rightAnswer(expr))) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(.Correct answer was '${rightAnswer()}'.
Let's try again, ${userName}!`);
  return false;
};
export const evenGame = () => {
  for (let i = 1; i < 4; i += 1) {
    const num = getRandomNum();
    if (!question(num, num % 2 === 0, 'yes', 'no')) return;
  }
  sayCongratulations();
};
export const calcGame = () => {
  for (let i = 1; i < 4; i += 1) {
    const oneNum = getRandomNum();
    const twoNum = getRandomNum();
    const sign = getRandomSign();
    const str = `${oneNum} ${sign} ${twoNum}`;
    const num = () => {
      if (sign === '+') return oneNum + twoNum;
      if (sign === '-') return oneNum - twoNum;
      return oneNum * twoNum;
    };
    if (!question(str, num(), num(), num())) return;
  }
  sayCongratulations();
};
