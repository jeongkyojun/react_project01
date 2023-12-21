import React, { Component } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Start from './page/Start';
import CalandarPage from './page/CalandarPage';
import Navbar from './organ/Navbar';

function App() {

  //axios.defaults.baseURL = '';

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
              <Route path="/start" element={<Start></Start>}></Route>
              <Route path="/calandar" element={<CalandarPage></CalandarPage>}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
