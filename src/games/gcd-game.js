import game from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

const genQuestionAndAnswer = () => {
  const oneNum = getRandomNum();
  const twoNum = getRandomNum();
  const quest = `${oneNum} ${twoNum}`;
  const calculateGcd = (a, b) => {
    if (b === 0) return a;
    return calculateGcd(b, a % b);
  };
  const rightAnswer = calculateGcd(oneNum, twoNum);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
