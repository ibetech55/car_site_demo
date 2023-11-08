import React from "react";
import "./App.css";
import { Home } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sign-in" Component={SignInPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
