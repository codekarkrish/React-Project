function GameOver({ score, restartGame }) {
  return (
    <div className="mt-5 flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold text-red-500">
        Game Over
      </h2>

      <p className="text-xl">
        Final Score: {score}
      </p>

      <button
        onClick={restartGame}
        className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-semibold transition"
      >
        Restart Game
      </button>
    </div>
  )
}

export default GameOver