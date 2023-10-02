"use client"
import { useState, useRef, useEffect } from "react"
import { DrawNumbers } from "../assets/data"
import { checkIfCardWins } from "../components/cards/checkIfCardWins"
import { GetTotalScore } from "../components/score/getTotalScore"

export const useBingoGame = cardNumbers => {
  const [drawnNumbers, setDrawnNumbers] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [winningCards, setWinningCards] = useState([])
  const intervalId = useRef(null)
  const INTERVAL = 1000

  const startDrawingNumbers = () => {
    let drawIndex = 0
    setIsGameStarted(true)

    intervalId.current = setInterval(() => {
      if (allCardsHaveWon() || drawIndex > DrawNumbers.length) {
        setIsGameStarted(false)
        clearInterval(intervalId.current)
        return
      }
      drawNextNumber(drawIndex)
      drawIndex++
    }, INTERVAL)
  }

  const drawNextNumber = index => {
    setDrawnNumbers(prev => [...prev, DrawNumbers[index]])
  }

  const allCardsHaveWon = () => {
    const allCardsWon = cardNumbers.every(card =>
      checkIfCardWins(card, drawnNumbers)
    )
    if (allCardsWon) {
      setIsGameStarted(false)
    }
    return allCardsWon
  }

  const handleWin = winningCard => {
    if (!winningCards.includes(winningCard)) {
      setWinningCards([...winningCards, winningCard])
    }
  }
  useEffect(() => {
    if (isGameStarted) {
      startDrawingNumbers()
    } else if (!isGameStarted && intervalId.current) {
      clearInterval(intervalId.current)
    }
    return () => clearInterval(intervalId.current)
  }, [isGameStarted])

  useEffect(() => {
    if (allCardsHaveWon()) {
      GetTotalScore(drawnNumbers, winningCards)
    }
  }, [winningCards])

  return {
    isGameStarted,
    drawnNumbers,
    winningCards,
    startDrawingNumbers,
    handleWin,
  }
}
