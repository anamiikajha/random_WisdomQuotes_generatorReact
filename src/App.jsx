/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, SetQuote] = useState("A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.");
 
  const handleQuote = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    SetQuote(res.data.content);
  };
  return (

    <div className="box">
     <i className="fas fa-quote-left fa2"></i>
     <div className="text"> 
     <i className="fas fa-quote-right fa1"></i>
      <div>
      <h3>Quotes of wisdom</h3>
      <p>{quote}</p>
       <button onClick={handleQuote}> Next </button>
       </div>
       </div>
       </div>
  );
};

export default App;
