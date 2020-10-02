function movie(card, ticket, perc) {
  let amount = 0
  let withCard = card
  let withoutCard = 0

  while(Math.ceil(withCard) >= withoutCard) {
    amount++
    withCard += Math.pow(perc, amount) * ticket
    withoutCard +=ticket
  }

  return amount
}

module.exports = movie

