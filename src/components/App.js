import React from 'react';
// импорт модулей
import { Route, Routes } from 'react-router-dom';

import HomePage from "./HomePage/HomePage";
import LayoutMerchant from "./LayoutMerchant/LayoutMerchant";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/merchant" element={<LayoutMerchant />}>
      </Route>
    </Routes>
  );
}

export default App;
