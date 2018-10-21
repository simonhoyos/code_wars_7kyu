function catMouse(x){
  return x.length - 2 <= 3 ? 'Caught!' : 'Escaped!';
}

module.exports = catMouse;
