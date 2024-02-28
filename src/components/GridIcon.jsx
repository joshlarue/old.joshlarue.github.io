import { Link } from "react-router-dom";
import { useState } from "react";

function GridIcon(props) {
  const [link, setLink] = useState(<></>, [props.desc]);

  if (props.desc == 'resume') {
    setLink(<Link to="/resume"><span className='icon-link'/></Link>)
  } else if (props.desc == 'blog') {
    setLink(<a href="/blog"><span className='icon-link' /></a>)
  } else if (props.desc == 'home') {
    setLink(<Link to="/"><span className='icon-link'/></Link>)
  } else if (props.desc == 'github') {
    setLink(<a href={"https://github.com/joshlarue"}><span className="icon-link" /></a>)
  } else {
    setLink(<a href={`/old-site/pages/${props.desc}`}><span className='icon-link' /></a>)
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