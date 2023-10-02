"use client"

import { DrawNumbers, cardNumbers } from "../../assets/data"
import { BingoCard } from "./card/bingoCard"
import styles from "./bingoGame.module.css"
import { StartBingoGame } from "./startGame/startBingoGame"
import { useBingoGame } from "../../hooks/useBingo"

export default function BingoGame() {
  const {
    isGameStarted,
    drawnNumbers,
    winningCards,
    startDrawingNumbers,
    handleWin,
  } = useBingoGame(cardNumbers)
  return (
    <section>
      <h1>Bingo Game</h1>
      <StartBingoGame
        DrawNumbers={DrawNumbers}
        startDrawingNumbers={startDrawingNumbers}
        isGameStarted={isGameStarted}
      />

      <div className={styles.cardContainer}>
        {/* displaying all cards */}
        {cardNumbers.map((card, index) => {
          return (
            <div className={styles.cardWrapper} key={index}>
              <h2 className={styles.h2}>BINGO</h2>
              <BingoCard
                card={card}
                markedNumbers={winningCards.includes(card) ? [] : drawnNumbers}
                onWin={handleWin}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
