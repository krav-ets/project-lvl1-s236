import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

const genQuestionAndAnswer = () => {
  const quest = getRandomNum();
  const isEven = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  const rightAnswer = isEven(quest);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
