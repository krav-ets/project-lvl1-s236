import game from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const makeResult = () => {
  const oneNum = getRandomNum();
  const twoNum = getRandomNum();
  const quest = `${oneNum} ${twoNum}`;
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  const rightAnswer = gcd(oneNum, twoNum);
  return [quest, rightAnswer];
};
export default () => game(makeResult, description);
