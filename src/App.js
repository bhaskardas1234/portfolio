import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/Components/Home';
import Cv from '../src/Components/Cv';
import Websites from '../src/Components/Websites'; 


function App() {
  return (
    <Router>
      <Routes>
         {/* <Route path="/" element={<Home/>} />
         <Route path="/cv" element={<Cv/>}/> */}
         <Route path="/" element={<Websites/>}/>
      </Routes>
    </Router>
  );
}

export default App;
