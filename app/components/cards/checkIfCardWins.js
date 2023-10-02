export function checkIfCardWins(card, drawnNumbers) {
  // looping over each card rows (5 rows(arrays) in each card)
  // drawnNumbers is an array of bingo-card-markedNumbers. If every number in a row is in the array, card wins.
  for (let i = 0; i < card.length; i++) {
    if (card[i].every(number => drawnNumbers.includes(number))) {
      return true
    }
  }

  // checking columns,it checks every row to see if the number at that index is in drawnNumbers.
  for (let i = 0; i < card.length; i++) {
    if (card.every(row => drawnNumbers.includes(row[i]))) {
      return true
    }
  }

  return false
}
