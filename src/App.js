
import './App.css';
// import { BrowserRouter,Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import { useState } from 'react';
import axios from "axios";
import React from 'react';
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
// import Layout from './components/Layout/Layout';



function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
    console.log(data)
  };
  return (
    <BrowserRouter>
      

        <div>
          {/* <Header /> */}

          <Routes>

            <Route />

            <Route path="/" element={<Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions} 
              />}>

            </Route>
            <Route path={'/quiz'} element={<Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
               />}>

            </Route>
            <Route path="/result" element={<Result
              name={name}
              score={score} 
              />}>
            </Route>
          </Routes>



        </div>
        {/* <Footer></Footer> */}
      
    </BrowserRouter>
  );
}

export default App;
