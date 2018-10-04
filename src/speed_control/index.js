function sectionsMap(acc, section, index, sections) {
  const lastSectionPosition = sections.length -1;

  if(index === lastSectionPosition) {
    return acc;
  }

  return [
    ...acc,
    sections[index + 1] - section,
  ];
}

function mapDistance(s) {
  return function (dist) {
    return Math.floor(3600 * dist/s);
  }
}

const gps = (s, x) => {
  const arr = x.reduce(sectionsMap, [ 0 ]);

  return Math.max(...arr.map(mapDistance(s)));
}

module.exports = gps;
