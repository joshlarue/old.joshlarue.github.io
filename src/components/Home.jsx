import '../App.css'

function Home(props) {

  return (
    <div className="right-side">
      <h1 id='hero'>Check out my {props.currentHover}!</h1>
      <div className="images-wrapper">
          <img id='coin-img' src='/react-portfolio/coin.png' /> 
          <img id='headshot-img' src='/react-portfolio/headshot.png' />
      </div>
    </div>
  )
}

export default Home;