import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Script from "./Script";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navigate to='/mf' replace />} /> 
        <Route path="/mf" element={ <Script/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
