/** @jsxImportSource @emotion/react */

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main/Main';
import './App.css';
import { css } from '@emotion/react';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <div 
      className='body' 
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>

  );
}

export default App;
