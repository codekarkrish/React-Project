function Option({
  option,
  selectedOption,
  onOptionChange
}) {

  return (

    <div className="option-container">

      <label className="option-label">

        <input
          type="radio"
          value={option}
          checked={selectedOption === option}
          onChange={onOptionChange}
        />

        <span className="option-text">
          {option}
        </span>

      </label>

    </div>
  );
}

export default Option;