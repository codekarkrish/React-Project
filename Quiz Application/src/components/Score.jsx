function Score({
  score,
  totalQuestions,
  restartQuiz
}) {

  return (

    <div className="score-card">

      <h1>
        Quiz Finished 🎉
      </h1>

      <h2>
        Your Score
      </h2>

      <p className="score-text">

        {score}
        {" / "}
        {totalQuestions}

      </p>

      <button
        className="restart-btn"
        onClick={restartQuiz}
      >

        Restart Quiz

      </button>

    </div>
  );
}

export default Score;