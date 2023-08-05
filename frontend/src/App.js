import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategorizeBuilder from './components/CategorizeBuilder';
import ClozeBuilder from './components/ClozeBuilder';
import ComprehensionBuilder from './components/ComprehensionBuilder';
import Navbar from './components/Navbar';
import CategorizeRender from './components/CategorizeRender';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<CategorizeBuilder />}></Route>
        <Route path='/categorizebuilder' element={<CategorizeBuilder />}></Route>
        <Route path='/clozebuilder' element={<ClozeBuilder />}></Route>
        <Route path='/comprehensionbuilder' element={<ComprehensionBuilder />}></Route>
        <Route path='/categorizerender' element={<CategorizeRender />}></Route>

    </Routes>
</>
  );
}

export default App;