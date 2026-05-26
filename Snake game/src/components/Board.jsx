import Cell from './Cell'

function Board({ snake, food, boardSize }) {
  const cells = []

  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      const isSnake = snake.some(
        (segment) => segment.x === x && segment.y === y
      )

      const isFood = food.x === x && food.y === y

      cells.push(
        <Cell
          key={`${x}-${y}`}
          isSnake={isSnake}
          isFood={isFood}
        />
      )
    }
  }

  return (
    <div
      className="grid bg-slate-800 border-4 border-slate-700"
      style={{
        gridTemplateColumns: `repeat(${boardSize}, 24px)`,
      }}
    >
      {cells}
    </div>
  )
}

export default Board