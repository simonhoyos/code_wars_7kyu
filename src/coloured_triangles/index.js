function triangle(row) {
  const colour = {
    'GR': 'B',
    'BR': 'G',
    'GB': 'R',
    'RG': 'B',
    'RB': 'G',
    'BG': 'R',
    'GG': 'G',
    'RR': 'R',
    'BB': 'B'
  }

  if(row.length <= 1) return row

  let newRow = '';

  for(let i = 0; i < row.length - 1; i++) {
    newRow += colour[row.slice(i, i + 2)]
  }

  return triangle(newRow)
}

module.exports = triangle

