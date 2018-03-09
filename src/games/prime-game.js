import game from '..';
import getRandomNum from '../lib/random';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num === 1) return false;
  const i = Math.floor(num / 2);
  const iter = (n) => {
    if (n === 1) return true;
    if (num % n === 0) return false;
    return iter(n - 1);
  };
  return iter(i);
};

const genQuestionAndAnswer = () => {
  const quest = getRandomNum(1, 100);
  const rightAnswer = isPrime(quest) ? 'yes' : 'no';
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
