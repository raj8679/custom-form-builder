import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CategorizeBuilder from './components/CategorizeBuilder';
import CategorizeRender from './components/CategorizeRender';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/categorizebuilder' element={<CategorizeRender />}></Route>
    </Routes>
</>
  );
}

export default App;