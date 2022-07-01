import './Home.css'
import { TextField, MenuItem, Button } from "@mui/material";
import React from 'react';
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
// import Categories, { } from '../../Data/Categories';
import  Categories, {} from '../../components/Data/Categories'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
// import Header from '../../components/Layout/Header/Header';
// import Footer from '../../components/Layout/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import { useState } from 'react';



const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history("/quiz");
    }
  };

  return (

    <Layout>
      <div className='content'>
        <div className="setting">
          <span className='quiz-info'>User Info</span>
          <div className='settings__select'>
            {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
            <TextField
              fullWidth
              label='Enter your name'
              variant='outlined'
              style={{ marginBottom: 25 }}
              onChange={(e) => setName(e.target.value)} />
            <TextField
              fullWidth
              select
              label='Select category'
              variant='outlined'
              style={{ marginBottom: 30 }}
              onChange={(e) => setCategory(e.target.value)}
              value={category}

            >

              {Categories.map((cat) => (


                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}

            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
              Start Quiz
            </Button>

          </div>
        </div>
        <img src="./quiz.svg" className='banner' alt="quiz image" />

      </div>
    </Layout>
  )
}

export default Home