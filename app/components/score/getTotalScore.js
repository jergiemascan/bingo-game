export const GetTotalScore = (drawnNumbers, winningCards) => {
  const lastDrawnNumber = drawnNumbers[drawnNumbers.length - 1]
  const lastCard = winningCards[winningCards.length - 1].flat()

  const sumOfUnmarkedNumbers = lastCard
    .filter(number => !drawnNumbers.includes(number))
    .reduce((acc, number) => acc + number, 0)

  const finalTotal = sumOfUnmarkedNumbers * lastDrawnNumber
  console.log(finalTotal)
}
