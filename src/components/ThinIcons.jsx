import GridIcon from '../components/GridIcon';
import '../App.css';

function ThinIcons(props) {
  // figure out a map/filter loop so that the icon of current page does not show up in icon list 
  return (
    <div className='icon-grid icons-thin'>
      <GridIcon img='/home.png'  desc='home' handleHover={props.handleHover} />
      <GridIcon img='/resume.png' desc='resume' handleHover={props.handleHover} />
      <GridIcon img='/blog.png' desc='blog' handleHover={props.handleHover}></GridIcon>
      <GridIcon img='/project.png' desc='rockpaperscissors.html' handleHover={props.handleHover} />
      <GridIcon img='/project.png' desc='movies.html' handleHover={props.handleHover} />
      <GridIcon img='/project.png' desc='morse.html' handleHover={props.handleHover} />
      <GridIcon img='/project.png' desc='proj4' handleHover={props.handleHover} />
    </div>
  );
}

export default ThinIcons;