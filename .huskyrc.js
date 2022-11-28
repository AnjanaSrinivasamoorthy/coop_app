const tasks = arr => arr.join(' && ');

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'npm run pairs',
      'npm run test',
    ]),
  }
};
