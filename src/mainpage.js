import { useState } from "react";
import { useEffect } from "react";
import './mainpage.css';
import { Link} from 'react-router-dom';
const MainPage= (props) => {
    const [ close, setIsClose] = useState(false)
    const [ clicked, setIsClicked] = useState(false)
    const rows = [];
    
for (let i = 0; i < props.info.parts.length; i++) {
    rows.push(<Link to= {props.info.link} state={{ typefrom: props.info.parts[i] }} className = "linkstyle"><li onClick={()=>setIsClicked(true)} key = {i}>{props.info.parts[i]}</li></Link>);
}
useEffect(() => {
  if (rows.length === 0) {setIsClose(true);}
}, []);
return(
    <div className="bar" >
    <Link to= {props.info.link} state={{ typefrom: 'none' }} className = "linkstyle"><span onClick={()=>setIsClicked(true)} onMouseEnter={()=>setIsClicked(false)} className = {props.info.color}>{props.info.name}</span></Link>
  <div id="i" className={`menu ${close ? 'close' : ''} ${clicked ? 'close' : ''}`}>
    <ul className="ulbox">
      {rows}
    </ul>
    <div className="itemphotos">
    <img className="photo" src={props.info.photo1}></img>
    <img className="photo" src={props.info.photo2}></img>
    <img className="photo" src={props.info.photo3}></img>
    </div>
  </div>
  </div>
)
}
export default MainPage;