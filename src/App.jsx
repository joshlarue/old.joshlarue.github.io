import { useState } from 'react'
import './App.css'
import GridIcon from './components/GridIcon'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [currentHover, setHover] = useState("website");

  function handleHover(iconDesc) {
    setHover(iconDesc);
  }

  return (
    <Router>
      <div className="app-inner">
        <div className="icon-grid">
          <GridIcon img='/react-portfolio/resume.png' desc='resume' handleHover={handleHover} /> 
          <GridIcon img='/react-portfolio/project.png' desc='proj1' handleHover={handleHover} />
          <GridIcon img='/react-portfolio/project.png' desc='proj2' handleHover={handleHover} />
          <GridIcon img='/react-portfolio/project.png' desc='proj3' handleHover={handleHover} />
          <GridIcon img='/react-portfolio/project.png' desc='proj4' handleHover={handleHover} />
          <GridIcon img='/react-portfolio/blog.png' desc='blog' handleHover={handleHover} />
        </div>
        <div className="right-side">
          <h1 id='hero'>Check out my {currentHover}!</h1>
          <div className="images-wrapper">
              <img id='coin-img' src='/react-portfolio/coin.png' /> 
              <img id='headshot-img' src='/react-portfolio/headshot.png' />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;