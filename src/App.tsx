import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </>

  );
}

export default App;
