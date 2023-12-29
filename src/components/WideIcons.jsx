import GridIcon from '../components/GridIcon';
import '../App.css';

function WideIcons(props) {
  return (
    <div className='icon-grid'>
    <GridIcon img='/react-portfolio/resume.png' desc='resume' handleHover={props.handleHover} /> 
    <GridIcon img='/react-portfolio/project.png' desc='proj1' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/project.png' desc='proj2' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/project.png' desc='proj3' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/project.png' desc='proj4' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/blog.png' desc='blog' handleHover={props.handleHover} />
  </div>
  );
}

export default WideIcons;