import React from "react";
import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [queries, setQueries] = useState([])
  const[question, setQuestions] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/questions`)
    .then((res)=> res.json())
    .then((data)=> {setQueries(data)})
  })

  function deleteQuiz(id) {
    const update =question.filter((question) => question.id !==id);
    setQuestions(update)
  }

  const Questions =(queries.map((item) => {
    return <div key={item.id}>
      <QuestionItem question={item} deleteQuiz={deleteQuiz}
      />
    </div>
  }))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{Questions}</ul>
    </section>
  );
}

export default QuestionList;
