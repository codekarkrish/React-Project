import { useEffect, useRef, useState } from 'react'

const BOARD_SIZE = 20

const INITIAL_SNAKE = [
  { x: 10, y: 10 }
]

const INITIAL_FOOD = {
  x: 5,
  y: 5,
}

const INITIAL_DIRECTION = {
  x: 0,
  y: 0,
}

function App() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [direction, setDirection] = useState(INITIAL_DIRECTION)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  const dirRef = useRef(direction)

  // Keep latest direction in ref
  useEffect(() => {
    dirRef.current = direction
  }, [direction])

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      // Prevent reverse movement

      if (
        e.key === 'ArrowUp' &&
        dirRef.current.y !== 1
      ) {
        setDirection({ x: 0, y: -1 })
      }

      if (
        e.key === 'ArrowDown' &&
        dirRef.current.y !== -1
      ) {
        setDirection({ x: 0, y: 1 })
      }

      if (
        e.key === 'ArrowLeft' &&
        dirRef.current.x !== 1
      ) {
        setDirection({ x: -1, y: 0 })
      }

      if (
        e.key === 'ArrowRight' &&
        dirRef.current.x !== -1
      ) {
        setDirection({ x: 1, y: 0 })
      }
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  // Game loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        moveSnake()
      }
    }, 150)

    return () => clearInterval(interval)
  }, [gameOver])

  // Move snake
  const moveSnake = () => {
    setSnake((prevSnake) => {
      const head = prevSnake[0]
      const dir = dirRef.current

      // Don't move until arrow key pressed
      if (dir.x === 0 && dir.y === 0) {
        return prevSnake
      }

      const newHead = {
        x: head.x + dir.x,
        y: head.y + dir.y,
      }

      // Wall collision
      if (
        newHead.x < 0 ||
        newHead.y < 0 ||
        newHead.x >= BOARD_SIZE ||
        newHead.y >= BOARD_SIZE
      ) {
        setGameOver(true)
        return prevSnake
      }

      // Self collision
      for (let segment of prevSnake) {
        if (
          segment.x === newHead.x &&
          segment.y === newHead.y
        ) {
          setGameOver(true)
          return prevSnake
        }
      }

      const newSnake = [newHead, ...prevSnake]

      // Food collision
      if (
        newHead.x === food.x &&
        newHead.y === food.y
      ) {
        setScore((prev) => prev + 1)

        setFood({
          x: Math.floor(Math.random() * BOARD_SIZE),
          y: Math.floor(Math.random() * BOARD_SIZE),
        })
      } else {
        // Remove tail
        newSnake.pop()
      }

      return newSnake
    })
  }

  // Restart game
  const restartGame = () => {
    setSnake(INITIAL_SNAKE)
    setFood(INITIAL_FOOD)
    setDirection(INITIAL_DIRECTION)
    dirRef.current = INITIAL_DIRECTION
    setGameOver(false)
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-5">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        Snake Game
      </h1>

      {/* Score */}
      <div className="mb-4 text-xl font-semibold">
        Score: {score}
      </div>

      {/* Game Board */}
      <div
        className="grid border-4 border-slate-700 bg-slate-800"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
        }}
      >
        {Array.from({
          length: BOARD_SIZE * BOARD_SIZE,
        }).map((_, index) => {
          const x = index % BOARD_SIZE
          const y = Math.floor(index / BOARD_SIZE)

          const isSnake = snake.some(
            (segment) =>
              segment.x === x &&
              segment.y === y
          )

          const isFood =
            food.x === x && food.y === y

          return (
            <div
              key={index}
              className={`
                w-5 h-5 border border-slate-900
                ${
                  isSnake
                    ? 'bg-green-500'
                    : isFood
                    ? 'bg-red-500 rounded-full'
                    : 'bg-slate-800'
                }
              `}
            />
          )
        })}
      </div>

      {/* Game Over */}
      {gameOver && (
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-red-500 mb-2">
            Game Over
          </h2>

          <p className="mb-4 text-lg">
            Final Score: {score}
          </p>

          <button
            onClick={restartGame}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  )
}

export default App