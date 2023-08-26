// Routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import QuizApp from "./components/QuizApp";
import Category from "./components/Category";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<QuizApp />} />
        <Route exact path="/:category" element={<Category />} />
        <Route exact path="/question" element={<Question />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/result" element={<Result />} />
      </Switch>
    </Router>
  );
}

export default router;
