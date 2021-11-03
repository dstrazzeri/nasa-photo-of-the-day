import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY, KEY_CONNECT, API_KEY_2, BASE_URL_2} from './Constants'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Title from './Title';
import Content from "./Content";
import Date from './Date';


function App() {
  
  const [api_data, set_api_data] = useState([]);
  const [date_1, set_date_1] = useState("");
  
 
  
useEffect(() => {

  axios.get(`${BASE_URL}${KEY_CONNECT}${API_KEY}`)
    .then(res => {
       set_api_data(res.data)
      
    })
    .catch(err => {
      console.error("fuck u")
    })
  },[])


  const submit = evt => {
    evt.preventDefault()
      axios.get(`${BASE_URL_2}${KEY_CONNECT}${API_KEY_2}&date=${date_1}`)
      .then(res => {
        set_api_data(res.data)
        
      })
      .catch(err => {
        console.error("u suck")
      })
    }
  
  const change = evt => {
    set_date_1(evt.target.value);
  }

  return (
    <div className="App">
      <header>
        <Date submit={submit} change={change} />
        </header>
         <Title title={api_data.title} />
      <p>       
         <img src={`${api_data.url}`} alt={api_data.title}/>
      </p>
         <Header text={api_data.date} />
         <Content text={api_data.explanation}/>
         <Footer title={api_data.copyright}/>
    </div>
  );
}


export default App;
