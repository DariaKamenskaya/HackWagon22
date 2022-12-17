import React, { useState } from 'react';
// импорт модулей
import { Route, Routes } from 'react-router-dom';

import HomePage from "./HomePage/HomePage";
import LayoutMerchant from "./LayoutMerchant/LayoutMerchant";
import LayoutOperator from "./LayoutOperator/LayoutOperator";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/merchant" element={<LayoutMerchant />} /> 
      <Route path="/operator" element={<LayoutOperator />} />
    </Routes>
  );
}

export default App;
