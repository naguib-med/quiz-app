import React from "react";

function Result({ score, totalQuestions }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Résultats du quiz :</h1>
      <p>
        Score : {score} / {totalQuestions}
      </p>
    </div>
  );
}

export default Result;
