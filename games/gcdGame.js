import gamesLogic from '../src/index.js';
import getRndInteger from '../src/helper.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const twoNumbers = `${getRndInteger(0, 19)} ${getRndInteger(0, 10)}`;

  const coll = twoNumbers.split(' ');
  let a = Number(coll[0]);
  let b = Number(coll[1]);
  let expectedAnswer;
  if (a === b) {
    expectedAnswer = `${a}`;
  }
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  expectedAnswer = (a + b);
  expectedAnswer = expectedAnswer.toString();
  return [twoNumbers, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
