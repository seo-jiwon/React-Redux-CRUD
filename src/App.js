import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardPost from './components/BoardPost';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<BoardList/>} exact />
          <Route path='/BoardPost' element={<BoardPost/>} exact />
          <Route path='/BoardDetail' element={<BoardDetail/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
