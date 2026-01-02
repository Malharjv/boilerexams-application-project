import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

function AnswerChoice({ choice, index, isSelected, isCorrect, submitted, onSelect }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && choice.body) {
      containerRef.current.innerHTML = choice.body;
      const mathElements = containerRef.current.querySelectorAll('.katex');
      mathElements.forEach(el => el.remove());
      
      const renderMath = (content) => {
        return content.replace(/\$([^$]+)\$/g, (match, formula) => {
          try {
            return katex.renderToString(formula, { throwOnError: false });
          } catch {
            return match;
          }
        });
      };

      containerRef.current.innerHTML = renderMath(choice.body);
    }
  }, [choice.body]);

  const label = (index) => {
    return String.fromCharCode(65 + index)
  }

  const choiceClass = () => {
    let name = 'answer-choice'
    if (isSelected && !submitted) {
      name += ' selected'
    }
    if (submitted && isCorrect) {
      name += ' correct'
    }
    if (submitted && !isCorrect) {
      name += ' incorrect'
    }
    return name
  }

  let onClickHandler;
  if (submitted) {
    onClickHandler = undefined;
  } else {
    onClickHandler = onSelect;
  }

  let cursorStyle;
  if (submitted) {
    cursorStyle = 'default';
  } else {
    cursorStyle = 'pointer';
  }

  return (
    <div 
      className={choiceClass()} 
      onClick={onClickHandler}
      style={{ cursor: cursorStyle }}
    >
      <div className="choice-selector">
        <span className="choice-letter">{label(index)}</span>
      </div>
      <div 
        className="choice-text"
        ref={containerRef}
      />
      {submitted && (
        <div className="choice-result">
          {(() => {
            if (isCorrect) {
              return '✓';
            } else {
              return '✗';
            }
          })()}
        </div>
      )}
    </div>
  )
}

export default AnswerChoice
