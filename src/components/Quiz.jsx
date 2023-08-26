import React from "react";
import Question from "./Question";

function Quiz({ quiz }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{quiz.quizTitle}</h3>
      {quiz.questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
}

export default Quiz;
