const quizzesData = [
  {
    category: "Mathématiques",
    quizzes: [
      {
        quizTitle: "Addition",
        questions: [
          {
            id: 1,
            questionText: "1 + 1 = ?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
          },
          {
            id: 2,
            questionText: "2 + 2 = ?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "4",
          },
        ],
      },
      {
        quizTitle: "Soustraction",
        questions: [
          {
            id: 1,
            questionText: "1 - 1 = ?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "0",
          },
          {
            id: 2,
            questionText: "2 - 2 = ?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "0",
          },
        ],
      },
    ],
  },
  {
    category: "Science",
    quizzes: [
      {
        quizTitle: "Animaux",
        questions: [
          {
            id: 1,
            questionText: "Quel est le plus grand animal du monde ?",
            options: [
              "La baleine bleue",
              "Le requin baleine",
              "L'éléphant",
              "Le lion",
            ],
            correctAnswer: "La baleine bleue",
          },
          {
            id: 2,
            questionText: "Quel est le plus petit animal du monde ?",
            options: [
              "La baleine bleue",
              "Le requin baleine",
              "L'éléphant",
              "Le lion",
            ],
            correctAnswer: "Le requin baleine",
          },
        ],
      },
      {
        quizTitle: "Végétaux",
        questions: [
          {
            id: 1,
            questionText: "Quel est le plus grand arbre du monde ?",
            options: ["Le séquoia", "Le baobab", "Le chêne", "Le pin"],
            correctAnswer: "Le séquoia",
          },
          {
            id: 2,
            questionText: "Quel est le plus petit arbre du monde ?",
            options: ["Le séquoia", "Le baobab", "Le chêne", "Le pin"],
            correctAnswer: "Le pin",
          },
        ],
      },
    ],
  },
];

export default quizzesData;
