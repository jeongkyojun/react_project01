import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Start from './page/Start';

function App() {

  //axios.defaults.baseURL = '';

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/start" element={<Start></Start>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
