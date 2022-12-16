import React, { useState } from 'react';
// импорт модулей
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './Main';
import Train from './Train';

function App() {
  const [isTrain, handleIsTrain] = useState(false);

  function handleTrainClick() {
    handleIsTrain(true);
  }


  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page">
            <Header/>
            <Main handleTrain={handleTrainClick}/>
            <Train isTrain={isTrain}/>
            <Footer/>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
