import { Link } from "react-router-dom";

function GridIcon(props) {
  let link = <></>

  switch (props.desc) {
    case 'home':
    case 'resume':
      link = <Link to="/resume"><span className='icon-link'/></Link>
    case 'blog':
      
    default:
      <a href={`'/old-site/pages/' + ${props.desc}`}><span className="icon-link" /></a>
  }
  if (props.desc == 'resume') {
    link = <Link to="/resume"><span className='icon-link'/></Link>
  } else if (props.desc == 'blog') {
    link = <a href="/blog"><span className='icon-link' /></a>
  } else if (props.desc == 'home') {
    link = <Link to="/"><span className='icon-link'/></Link>
  } else if (props.desc == 'github') {
    link = <a href={"https://github.com/joshlarue"}><span className="icon-link" /></a>
  } else {
    link = <a href={`/old-site/pages/${props.desc}`}><span className='icon-link' /></a>
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