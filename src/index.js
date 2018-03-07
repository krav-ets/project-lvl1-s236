import readlineSync from 'readline-sync';

export default (nameGame, rules) => {
  console.log(`Welcome to the Brain Games!\n${rules}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
  const getRandomSign = () => {
    const num = getRandomNum();
    if (num <= 33) return '+';
    if (num <= 67) return '-';
    return '*';
  };
  const question = (quest, expr, rAnsw1, rAnsw2) => {
    const answer = readlineSync.question(`Question: ${quest}\nYour answer: `);
    const rightAnswer = () => {
      if (expr) return rAnsw1;
      return rAnsw2;
    };
    if (answer === String(rightAnswer())) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(.Correct answer was '${rightAnswer()}'.
Let's try again, ${userName}!`);
    return false;
  };
  switch (nameGame) {
    case 'even':
      for (let i = 1; i < 4; i += 1) {
        const num = getRandomNum();
        if (!question(num, num % 2 === 0, 'yes', 'no')) return;
      }
      break;
    case 'calc':
      for (let i = 1; i < 4; i += 1) {
        const oneNum = getRandomNum();
        const twoNum = getRandomNum();
        const sign = getRandomSign();
        const str = `${oneNum} ${sign} ${twoNum}`;
        const res = () => {
          if (sign === '+') return oneNum + twoNum;
          if (sign === '-') return oneNum - twoNum;
          return oneNum * twoNum;
        };
        if (!question(str, res(), res())) return;
      }
      break;
    case 'gcd':
      for (let i = 1; i < 4; i += 1) {
        const oneNum = getRandomNum();
        const twoNum = getRandomNum();
        const str = `${oneNum} ${twoNum}`;
        const gcd = (a, b) => {
          if (b === 0) return a;
          return gcd(b, a % b);
        };
        const expr = gcd(oneNum, twoNum);
        if (!question(str, expr, expr)) return;
      }
      break;
    default:
      break;
  }
  console.log(`Congratulations, ${userName}!`);
};
