import GridIcon from '../components/GridIcon';
import '../App.css';

function WideIcons(props) {
  return (
    <div className='icon-grid'>
    <GridIcon img='/blog.png' desc='blog' handleHover={props.handleHover} /> 
    <GridIcon img='/resume.png' desc='resume' handleHover={props.handleHover} />
    <GridIcon img='/project.png' desc='rockpaperscissors.html' handleHover={props.handleHover} />
    <GridIcon img='/project.png' desc='movies.html' handleHover={props.handleHover} />
    <GridIcon img='/project.png' desc='morse.html' handleHover={props.handleHover} />
    <GridIcon img='/project.png' desc='proj4' handleHover={props.handleHover} />
  </div>
  );
}

export default WideIcons;