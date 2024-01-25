import '../App.css'

function Home(props) {

  return (
    <div className="right-side">
      <h1 id='home-hero'>Check out my {props.currentHover}!</h1>
      <div className="images-wrapper">
          <img id='coin-img' src='coin.png' /> 
          <img id='headshot-img' src='headshot.png' />
      </div>
    </div>
  )
}

export default Home;