function myLanguages(results) {
  return Object.keys(results)
    .filter(lan => results[lan] >= 60)
    .sort((a, b) => results[b] - results[a])
}

module.exports = myLanguages
