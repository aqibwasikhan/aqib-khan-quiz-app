import { useEffect } from "react"
import { useState } from "react";
import React from "react";
import './Quiz.css'
import Question from '../../components/Question/Question'
import { CircularProgress } from "@mui/material";
import Layout from "../../components/Layout/Layout";
const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
      handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ])
    );
  }, [currQues, questions]);

  // console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <Layout>

      <div className="quiz">
        <span className="subtitle">Welcome, {name}</span>
        {questions ? (
          <>
            <div className="quizInfo">
              <span>{questions[currQues].category}</span>
              {/* {questions[currQues].difficulty} */}
              <span>
                Score : {score}
              </span>
            </div>
            <Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
          />
        )}


      </div>
    </Layout>
  )
}

export default Quiz
