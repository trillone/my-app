import React from "react";
import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/movie-detail" element={<Detail/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;