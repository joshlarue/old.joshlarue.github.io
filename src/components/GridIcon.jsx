import { Link } from "react-router-dom";

function GridIcon(props) {
  let link = <></>
  if (props.desc == 'blog') {
    link = <a className="icon-link" href="/blog"></a>
  } else {
    link = <Link to={`${props.desc == 'home' ? '/react-portfolio/' : '/react-portfolio/' + props.desc}`} ><span className='icon-link'></span></Link>
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