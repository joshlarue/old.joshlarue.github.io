function GridIcon(props) {
  return (
    <div className="icon" onMouseOver={() => props.handleHover(props.desc)} onMouseLeave={() => props.handleHover("website")}>
      <a href='https://duckduckgo.com'><span class='icon-link'></span></a>
      <div className="icon-img" ><img src={props.img} /></div>
      <div className="icon-desc"><p>{props.desc}</p></div>
    </div>
  )
}

export default GridIcon;