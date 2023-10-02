import styles from "./startBingoGame.module.css"

export const StartBingoGame = ({
  DrawNumbers,
  startDrawingNumbers,
  isGameStarted,
}) => {
  return (
    <div className={styles.heading}>
      <div className={styles.flex}>
        <h2>Draw Numbers:</h2>[
        {DrawNumbers.map((number, index) => (
          <span key={index}>{number},</span>
        ))}
        ]
      </div>

      <button onClick={startDrawingNumbers} disabled={isGameStarted}>
        Start the Game
      </button>
    </div>
  )
}
