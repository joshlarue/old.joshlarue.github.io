import { Link } from "react-router-dom";

function GridIcon(props) {
  return (
    <div className="icon" onMouseOver={() => props.handleHover(props.desc)} onMouseLeave={() => props.handleHover("website")}>
      <Link to={`${props.desc == 'home' ? '/react-portfolio/' : '/react-portfolio/' + props.desc}`} ><span className='icon-link'></span></Link>
      <div className="icon-img" ><img src={props.img} /></div>
      <div className="icon-desc"><p>{props.desc}</p></div>
    </div>
  )
}

export default GridIcon;