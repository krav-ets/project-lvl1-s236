import game from '..';
import getRandomNum from '../lib/random';

const description = 'Balance the given number.';

const genQuestionAndAnswer = () => {
  const oneNum = getRandomNum(11, 9999);
  const quest = `${oneNum}`;
  const calculateBalance = (num) => {
    const numToStr = String(num);
    const sortedArray = numToStr.split('').sort((a, b) => a - b);
    const len = sortedArray.length - 1;
    const firstElement = Number(sortedArray[0]);
    const lastElement = Number(sortedArray[len]);
    if (lastElement - firstElement <= 1) {
      return sortedArray.join('');
    }
    sortedArray[0] = firstElement + 1;
    sortedArray[len] = lastElement - 1;
    const strToNum = Number(sortedArray.join(''));
    return calculateBalance(strToNum);
  };
  const rightAnswer = calculateBalance(oneNum);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
