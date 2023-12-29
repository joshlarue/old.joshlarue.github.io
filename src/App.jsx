import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import WideIcons from './components/WideIcons';
import ThinIcons from './components/ThinIcons';
import Resume from './components/Resume';
import Blog from './components/Blog';
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
          <Route path='/react-portfolio/blog/' element={<> <ThinIcons handleHover={handleHover} /> <Blog /> </>} />
          <Route path='/react-portfolio/proj1/' element={<> <ThinIcons handleHover={handleHover} /> </>} />
          <Route path='/react-portfolio/proj2/' element={<> <ThinIcons handleHover={handleHover} /> </>} />
          <Route path='/react-portfolio/proj3/' element={<> <ThinIcons handleHover={handleHover} /> </>} />
        </Routes>
      </div>
    </>
  )
}

export default App;