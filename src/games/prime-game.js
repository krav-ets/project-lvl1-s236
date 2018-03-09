import game from '..';
import getRandomNum from '../lib/random';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num === 1) return 'no';
  const i = Math.floor(num / 2);
  const iter = (n) => {
    if (n === 1) return 'yes';
    if (num % n === 0) return 'no';
    return iter(n - 1);
  };
  return iter(i);
};

const genQuestionAndAnswer = () => {
  const quest = getRandomNum(1, 100);
  const rightAnswer = isPrime(quest);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
