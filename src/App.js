import React, { useState } from 'react';
import Header from './components/Header'
import Play from './components/Play'
import Game from './components/Game'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [myChoice, setMyChoice] = useState();
  const [score, setScore] = useState(0);

  return (
      <div className='font-mono px-3 flex flex-col justify-center items-center mx-auto h-screen bg-gradient-to-r from-black to-blue-500 text-lg font-semibold'>
        <div className='w-4/5 lg:w-1/2 mt-12 flex flex-col items-center'>
          <Header score={score} />
          <Routes>
            <Route path='/' element={<Play setMyChoice={setMyChoice} />} />
            <Route path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
          </Routes>
        </div>
        <div className='mt-3 md:ml-auto'>
          <Footer />
        </div>
      </div>
  );
}

export default App;
