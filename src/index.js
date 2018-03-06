import readlineSync from 'readline-sync';

export const sayWelcome = () => console.log('Welcome to the Brain Games!');
let userName = '';
export const sayHello = () => {
  userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};
export const brainEvenRules = () =>
  console.log('Answer "yes" if number even otherwise answer "no".');
export const evenGame = () => {
  const question = (num) => {
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const rightAnswer = (n) => {
      if (n % 2 === 0) return 'yes';
      return 'no';
    };
    if (answer === rightAnswer(num)) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(.Correct answer was '${rightAnswer(num)}'.
Let's try again, ${userName}!`);
    return false;
  };
  for (let i = 1; i < 4; i += 1) {
    const num = Math.floor(Math.random() * 100) + 1;
    if (!question(num)) return;
  }
  console.log(`Congratulations, ${userName}!`);
};
