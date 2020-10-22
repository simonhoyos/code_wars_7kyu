function inviteMoreWomen(L) {
  return L.reduce((acc, inv) => acc + inv, 0) > 0
}

module.exports = inviteMoreWomen
