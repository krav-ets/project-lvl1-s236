import game from '..';
import getRandomNum from '../lib/random';

const description = 'What is the result of the expression?';
const getRandomSign = () => {
  const num = getRandomNum(1, 3);
  if (num === 1) return '+';
  if (num === 2) return '-';
  return '*';
};

const genQuestionAndAnswer = () => {
  const oneNum = getRandomNum(1, 100);
  const twoNum = getRandomNum(1, 100);
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
