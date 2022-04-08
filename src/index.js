import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Utbildningar from './componnents/MAA/Utbildningar';
import Ansökan from './componnents/MA/Ansökan'
import Kurser from './componnents/AMI/Kurser'
import Lärare from './componnents/PT/Larare'


ReactDOM.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={ <App />}/> 
        <Route path="/kurser" element={ <Kurser />}/>
        <Route path="/ansokan" element={ <Ansökan />}/>
        <Route path="/utbildningar" element={ <Utbildningar />}/>
        <Route path="/larare" element={ <Lärare />}/>
    </Routes>
   
</BrowserRouter>,
  document.getElementById('root')
);

