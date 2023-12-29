import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import WideIcons from './components/WideIcons';
import ThinIcons from './components/ThinIcons';
import Resume from './components/Resume';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let iconGridThin = false;
  const [currentHover, setHover] = useState("website");

  function handleHover(iconDesc) {
    setHover(iconDesc);
  }

  return (
    <>
      <div className="app-inner">
        <Routes>
          <Route path='/react-portfolio/' element={<> <WideIcons handleHover={handleHover} /> <Home currentHover={currentHover}/></>} />
          <Route path='/react-portfolio/resume/' element={<> <ThinIcons handleHover={handleHover} /> <Resume /> </>} />
        </Routes>
      </div>
    </>
  )
}

export default App;