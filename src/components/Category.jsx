import React from "react";
import Quiz from "./Quiz";

function Category({ category }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
      {category.quizzes.map((quiz, index) => (
        <Quiz key={index} quiz={quiz} />
      ))}
    </div>
  );
}

export default Category;
