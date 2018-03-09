import game from '..';
import getRandomNum from '../lib/random';

const description = 'Answer "yes" if number even otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const quest = getRandomNum(1, 100);
  const isEven = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  const rightAnswer = isEven(quest);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
