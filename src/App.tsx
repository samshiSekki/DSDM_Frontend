import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Main />} />
    </BrowserRouter>

  );
}

export default App;
