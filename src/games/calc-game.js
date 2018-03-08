import game from '..';

const description = 'What is the result of the expression?';
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const getRandomSign = () => {
  const num = getRandomNum();
  if (num <= 33) return '+';
  if (num <= 67) return '-';
  return '*';
};

const genQuestionAndAnswer = () => {
  const oneNum = getRandomNum();
  const twoNum = getRandomNum();
  const sign = getRandomSign();
  const calculate = (s, num1, num2) => {
    if (s === '+') return num1 + num2;
    if (s === '-') return num1 - num2;
    return num1 * num2;
  };
  const quest = `${oneNum} ${sign} ${twoNum}`;
  const rightAnswer = calculate(sign, oneNum, twoNum);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
