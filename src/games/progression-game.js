import game from '..';

const description = 'What number is missing in this progression?';
const getRandomNum = () => Math.floor(Math.random() * 100);
const getRandomStep = () => Math.floor(Math.random() * 10) + 1;
const getRandomIndex = () => Math.floor(Math.random() * 10);

const genStrProgression = (start, step, count, str, acc) => {
  if (count > 10) return str;
  if (count === 1) return genStrProgression(start, step, count + 1, `${start}`, start + step);
  return genStrProgression(start, step, count + 1, `${str},${acc}`, acc + step);
};

const genQuest = (arr, index) => {
  const arrWithoutElement = arr;
  arrWithoutElement[index] = '..';
  return arrWithoutElement.join(' ');
};

const genQuestionAndAnswer = () => {
  const start = getRandomNum();
  const step = getRandomStep();
  const index = getRandomIndex();
  const stringProgression = genStrProgression(start, step, 1, '');
  const arrayProgression = stringProgression.split(',');
  const rightAnswer = arrayProgression[index];
  const quest = genQuest(arrayProgression, index);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
