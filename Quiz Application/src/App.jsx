import { useState } from "react";

import "./index.css";

import Question from "./Components/Question";
import Score from "./Components/Score";
import qBank from "./Components/QuestionBank";

function App() {

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedOption, setSelectedOption] =
    useState("");

  const [score, setScore] =
    useState(0);

  const [quizEnd, setQuizEnd] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(false);

  // Handle option selection

  const handleOptionChange = (e) => {

    setSelectedOption(e.target.value);

  };

  // Handle next question

  const handleNextQuestion = () => {

    if (
      currentQuestion + 1 <
      qBank.length
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

      setSelectedOption("");

    } else {

      setQuizEnd(true);

    }
  };

  // Handle submit

  const handleSubmit = (e) => {

    e.preventDefault();

    if (selectedOption === "") {

      alert("Please select an option");

      return;
    }

    if (
      selectedOption ===
      qBank[currentQuestion].answer
    ) {

      setScore(score + 1);

    }

    handleNextQuestion();
  };

  // Restart quiz

  const restartQuiz = () => {

    setCurrentQuestion(0);

    setSelectedOption("");

    setScore(0);

    setQuizEnd(false);

  };

  // Dark mode toggle

  const toggleDarkMode = () => {

    setDarkMode(!darkMode);

  };

  return (

    <div className={
      darkMode
        ? "app dark"
        : "app light"
    }>

      <div className="quiz-container">

        <button
          className="dark-btn"
          onClick={toggleDarkMode}
        >

          {darkMode
            ? "Light Mode"
            : "Dark Mode"}

        </button>

        <h1 className="title">
          React Quiz App
        </h1>

        {!quizEnd ? (

          <>

            <h3 className="question-count">

              Question {currentQuestion + 1}
              {" / "}
              {qBank.length}

            </h3>

            <Question
              question={
                qBank[currentQuestion]
              }

              selectedOption={
                selectedOption
              }

              onOptionChange={
                handleOptionChange
              }

              onSubmit={
                handleSubmit
              }
            />

          </>

        ) : (

          <Score
            score={score}
            totalQuestions={
              qBank.length
            }
            restartQuiz={restartQuiz}
          />

        )}

      </div>

    </div>
  );
}

export default App;