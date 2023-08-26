import React, { useState } from "react";

function Question({ question }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Ajoutez ici la logique pour vérifier si la réponse est correcte.
  };

  return (
    <div className="mb-2">
      <p className="font-semibold">{question.questionText}</p>
      <div className="grid grid-cols-2 gap-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`p-2 border rounded-lg ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
