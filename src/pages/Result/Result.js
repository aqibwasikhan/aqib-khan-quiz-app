
import { useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import './Result.css'
import Layout from "../../components/Layout/Layout";
const Result = ({ name, score }) => {
  const history = useNavigate();
  const navtoHome = () => {
    history("/")
  }


  useEffect(() => {
    if (!name) {
      navtoHome();
    }
  }, [name, history]);
  return (
    <Layout>
      <div className="result">
        <h6 className="title">{name} your Final Score = {score} <br />
          percentage = {score / 10 * 100}%
        </h6>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          onClick={navtoHome}
        >
          Go to homepage
        </Button>
        {/* <Footer></Footer> */}
      </div>

    </Layout>
  );
}

export default Result