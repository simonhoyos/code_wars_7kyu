function getTabsInARow(row) {
  const chars = row.split('\t');

  return chars.map(convertTabToSpaces).join('');
}

function convertTabToSpaces(char, index, chars) {
  if(chars.length - 1 === index) return char;

  const spacesFromTabIndex = '    '.slice(char.length % 4);

  return `${char}${spacesFromTabIndex}`;
}

function tabToSpaces( text ) {
  const rows = text.split('\n');

  return rows.map(getTabsInARow).join('\n');
}

module.exports = tabToSpaces;
