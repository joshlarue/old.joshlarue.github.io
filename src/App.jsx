import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import WideIcons from './components/WideIcons';
import ThinIcons from './components/ThinIcons';
import Resume from './components/Resume';
import { Routes, Route } from "react-router-dom";

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
            <Route path='/' element={<> <WideIcons handleHover={handleHover} /> <Home currentHover={currentHover}/></>} />
            <Route path='/resume/' element={<> <ThinIcons handleHover={handleHover} /> <Resume /> </>} />
            <Route Path='/blog/' element={<ThinIcons handleHover={handleHover}/>} />
            <Route path='/proj1/' element={<> <ThinIcons handleHover={handleHover} /> </>} />
            <Route path='/proj2/' element={<> <ThinIcons handleHover={handleHover} /> </>} />
            <Route path='/proj3/' element={<> <ThinIcons handleHover={handleHover} /> </>} />
          </Routes>
        </div>
    </>
  )
}

export default App;