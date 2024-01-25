import GridIcon from '../components/GridIcon';
import '../App.css';

function WideIcons(props) {
  return (
    <div className='icon-grid'>
    <GridIcon img='/blog.png' desc='blog' handleHover={props.handleHover} /> 
    <GridIcon img='/resume.png' desc='resume' handleHover={props.handleHover} />
    <GridIcon img='/rockpaperscissors.png' desc='rockpaperscissors.html' handleHover={props.handleHover} />
    <GridIcon img='/movies.png' desc='movies.html' handleHover={props.handleHover} />
    <GridIcon img='/morse.png' desc='morse.html' handleHover={props.handleHover} />
  </div>
  );
}

export default WideIcons;