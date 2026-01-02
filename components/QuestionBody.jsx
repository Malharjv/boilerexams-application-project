import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

function QuestionBody({ text }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && text) {
      containerRef.current.innerHTML = text;
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

      containerRef.current.innerHTML = renderMath(text);
    }
  }, [text]);

  return (
    <div className="question-body">
      <div className="question-text" ref={containerRef} />
    </div>
  );
}

export default QuestionBody
