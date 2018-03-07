import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const makeResult = () => {
  const quest = getRandomNum();
  const calc = () => {
    if (quest % 2 === 0) return 'yes';
    return 'no';
  };
  const rightAnswer = calc();
  return [quest, rightAnswer];
};
export default () => game(makeResult, description);
