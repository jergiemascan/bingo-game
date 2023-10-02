"use client"

import { useState, useEffect } from "react"
import styles from "./bingoCard.module.css"
import { checkIfCardWins } from "../checkIfCardWins"

export function BingoCard({ card, markedNumbers, onWin }) {
  const [isWinner, setIsWinner] = useState(false)
  const [winningNumbers, setWinningNumbers] = useState([])

  useEffect(() => {
    if (checkIfCardWins(card, markedNumbers)) {
      setIsWinner(true)
      setWinningNumbers([...markedNumbers])
      onWin(card)
    }
  }, [card, markedNumbers])

  return (
    <div
      className={`
      ${isWinner ? styles.winnerBackground : ""}`}
    >
      <table>
        <tbody>
          {card.map((row, index) => (
            <tr key={index}>
              {row.map((number, index) => (
                <td
                  key={index}
                  className={styles.td}
                  style={{
                    textDecoration:
                      winningNumbers.includes(number) ||
                      markedNumbers.includes(number)
                        ? "line-through"
                        : "",
                    backgroundColor:
                      winningNumbers.includes(number) ||
                      markedNumbers.includes(number)
                        ? " var(--yellow)"
                        : "",
                  }}
                >
                  {number}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
