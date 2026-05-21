import Option from "./Option";

function Question({
  question,
  selectedOption,
  onOptionChange,
  onSubmit
}) {

  return (

    <div className="question-card">

      <h2 className="question-text">
        {question.question}
      </h2>

      <form onSubmit={onSubmit}>

        {question.options.map((option, index) => (

          <Option
            key={index}
            option={option}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
          />

        ))}

        <button
          type="submit"
          className="next-btn"
        >
          Next Question
        </button>

      </form>

    </div>
  );
}

export default Question;