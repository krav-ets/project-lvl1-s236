import game from '..';
import getRandomNum from '../lib/random';

const description = 'Find the greatest common divisor of given numbers.';

const genQuestionAndAnswer = () => {
  const oneNum = getRandomNum(1, 100);
  const twoNum = getRandomNum(1, 100);
  const quest = `${oneNum} ${twoNum}`;
  const calculateGcd = (a, b) => {
    if (b === 0) return a;
    return calculateGcd(b, a % b);
  };
  const rightAnswer = calculateGcd(oneNum, twoNum);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
