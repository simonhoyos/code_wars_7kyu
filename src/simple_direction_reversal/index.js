function solve(arr) {
  const firstRegexp = /begin|left|right/gi;
  const leftRegexp = /left/gi;
  const rightRegexp = /right/gi;

  return arr.reduce((reverse, direction, index, directions) => {
    const lastIndex = directions.length - 1;
    const replaceDir =
      index === lastIndex ? 'Begin' : directions[index + 1].match(leftRegexp) ? 'Right' : 'Left';

    const newDir = direction.replace(firstRegexp, replaceDir);

    return [ newDir, ...reverse ];
  }, []);
}

module.exports = solve;
