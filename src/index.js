import readlineSync from 'readline-sync';

export default (func, description) => {
  console.log(`Welcome to the Brain Games!\n${description}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const question = (count, iter) => {
    if (count <= iter) {
      const result = func();
      const quest = result[0];
      const rightAnswer = String(result[1]);
      const answer = readlineSync.question(`Question: ${quest}\nYour answer: `);
      if (answer === rightAnswer) {
        console.log('Correct!');
        return question(count + 1, iter);
      }
      return console.log(`'${answer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
    }
    return console.log(`Congratulations, ${userName}!`);
  };

  question(1, 3);
};
