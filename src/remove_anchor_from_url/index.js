function removeUrlAnchor(url) {
  return url.replace(/\#.+/i, '')
}

module.exports = removeUrlAnchor

