import { Link } from "react-router-dom";

function GridIcon(props) {
  let link = <></>

  if (props.link == '/resume' || props.link == '/') {
    link = <Link to={props.link}><span className='icon-link'></span></Link>
  } else {
    link = <a href={props.link}><span className="icon-link"></span></a>
  }

  return (
    <div className="icon" onMouseOver={() => props.handleHover(props.desc)} onMouseLeave={() => props.handleHover("website")}>
      <>{link}</>
      <div className="icon-img" ><img src={props.img} /></div>
      <div className="icon-desc"><p>{props.desc}</p></div>
    </div>
  )
}

export default GridIcon;