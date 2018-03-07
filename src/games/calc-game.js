import game from '..';

const description = 'What is the result of the expression?';
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const getRandomSign = () => {
  const num = getRandomNum();
  if (num <= 33) return '+';
  if (num <= 67) return '-';
  return '*';
};
const makeResult = () => {
  const oneNum = getRandomNum();
  const twoNum = getRandomNum();
  const sign = getRandomSign();
  const calc = () => {
    if (sign === '+') return oneNum + twoNum;
    if (sign === '-') return oneNum - twoNum;
    return oneNum * twoNum;
  };
  const quest = `${oneNum} ${sign} ${twoNum}`;
  const rightAnswer = calc();
  return [quest, rightAnswer];
};
export default () => game(makeResult, description);
