function Cell({ isSnake, isFood }) {
  let cellStyle = 'bg-slate-900'

  if (isSnake) {
    cellStyle = 'bg-green-500'
  }

  if (isFood) {
    cellStyle = 'bg-red-500 rounded-full'
  }

  return (
    <div
      className={`w-6 h-6 border border-slate-800 ${cellStyle}`}
    ></div>
  )
}

export default Cell