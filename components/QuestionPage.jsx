import { useEffect, useState } from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionBody from "./QuestionBody";
import AnswerList from "./AnswerList";
import "../styles/question.css";

export default function QuestionPage({ questionId }) {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestion() {
      setLoading(true);
      const res = await fetch(
        `/api/questions/${questionId}`
      );
      const data = await res.json();
      setQuestion(data);
      setSelected(null);
      setSubmitted(false);
      setLoading(false);
    }

    fetchQuestion();
  }, [questionId]);

  if (loading) {
    return <p>Loading question…</p>;
  }
  if (!question) {
    return null;
  }

  const correctIndex = question.data.solution[0];

  let button;
  if (submitted) {
    button = "Try Again";
  } else {
    button = "Check Answer";
  }

  return (
    <section className="question-card">
      <QuestionHeader />

      <QuestionBody text={question.data.body} />

      <AnswerList
        choices={question.data.answerChoices}
        selected={selected}
        onSelect={setSelected}
        submitted={submitted}
        correctIndex={correctIndex}
      />

      <button
        className="submit-button"
        disabled={(!submitted) && (selected === null)}
        onClick={() => {
          if (submitted) {
            setSubmitted(false);
            setSelected(null);
          } else {
            setSubmitted(true);
          }
        }}
      >
        {button}
      </button>
    </section>
  );
}
