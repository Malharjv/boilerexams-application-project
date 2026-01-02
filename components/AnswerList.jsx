import AnswerChoice from './AnswerChoice'

function AnswerList({ choices, selected, onSelect, submitted, correctIndex }) {
  return (
    <div className="answer-list">
      <h3 className="answer-headers">Select your answer:</h3>
      <div className="answer-choices">
        {choices.map((choice, index) => (
          <AnswerChoice
            key={choice.id}
            choice={choice}
            index={index}
            isSelected={selected === choice.id}
            isCorrect={index === correctIndex}
            submitted={submitted}
            onSelect={() => onSelect(choice.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default AnswerList
