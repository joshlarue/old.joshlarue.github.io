import GridIcon from '../components/GridIcon';
import '../App.css';

function WideIcons(props) {
  return (
    <div className='icon-grid'>
      <GridIcon img='/blog.png' link="/blog" desc='developer blog' handleHover={props.handleHover} /> 
      <GridIcon img='/resume.png' link="/resume" desc='resume' handleHover={props.handleHover} />
      <GridIcon img='/github.png' link="https://github.com/joshlarue" desc='github profile' handleHover={props.handleHover} />
      <GridIcon img='/movies.png' link="https://joshlarue.github.io/nyah-portfolio" desc='site I did for a client' handleHover={props.handleHover} />
      <GridIcon img='/rockpaperscissors.png' link='https://joshlarue.github.io/old-site/pages/rockpaperscissors.html' desc="rock paper scissors game" name='rockpaperscissors.html' handleHover={props.handleHover} />
      <GridIcon img='/morse.png' link='https://joshlarue.github.io/old-site/pages/morse.html' desc="morse code translator" handleHover={props.handleHover} />
  </div>
  );
}

export default WideIcons;