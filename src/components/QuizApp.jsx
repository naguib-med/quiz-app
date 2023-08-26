import React from "react";
import quizzesData from "../data/quizzesData";
import { useNavigate } from "react-router-dom";

function QuizApp() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">
        Choisissez une catégorie de quiz :
      </h1>
      <div className="flex flex-col gap-4 w-80 mx-auto">
        {quizzesData.map((category, index) => (
          <CategoryTitle key={index} title={category.category} />
        ))}
      </div>
    </div>
  );
}

export default QuizApp;

function CategoryTitle({ title }) {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate("/category");
  };
  return (
    <div
      className="bg-white shadow-lg p-4 rounded-lg text-center font-semibold
  h-24 w-80 flex flex-col justify-center items-center cursor-pointer"
      onClick={handleCategoryClick}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
    </div>
  );
}
