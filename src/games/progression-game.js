import game from '..';
import getRandomNum from '../lib/random';

const description = 'What number is missing in this progression?';

const newElProgriession = (prevEl, step) => prevEl + step;

const genArrProgression = (start, step) => {
  const iter = (count, arr, prevEl) => {
    if (count >= 10) return arr;
    const newEl = newElProgriession(prevEl, step);
    const newArr = arr.concat(newEl);
    return iter(count + 1, newArr, newEl);
  };
  return iter(1, [start], start);
};

const genQuest = (arr, index) => {
  const arrWithoutElement = arr;
  arrWithoutElement[index] = '..';
  return arrWithoutElement.join(' ');
};

const genQuestionAndAnswer = () => {
  const start = getRandomNum(0, 99);
  const step = getRandomNum(1, 10);
  const index = getRandomNum(0, 9);
  const arrayProgression = genArrProgression(start, step);
  const rightAnswer = arrayProgression[index];
  const quest = genQuest(arrayProgression, index);
  return [quest, rightAnswer];
};

export default () => game(genQuestionAndAnswer, description);
