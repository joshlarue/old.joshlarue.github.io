function GridIcon(props) {
  return (
    <div className="icon" onMouseOver={() => props.handleHover(props.desc)} onMouseLeave={() => props.handleHover("website")}>
      <div className="icon-img" ><img src={props.img} /></div>
      <div className="icon-desc"><p>{props.desc}</p></div>
    </div>
  )
}

export default GridIcon;