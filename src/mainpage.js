import { useState } from "react";
import { useEffect } from "react";
import './mainpage.css';
import { Link} from 'react-router-dom';
const MainPage= (props) => {
    const [ close, setIsClose] = useState(false)
    const [ clicked, setIsClicked] = useState(false)
    const rows = [];
    
for (let i = 0; i < props.info.parts.length; i++) {
    rows.push(<li key = {i}>{props.info.parts[i]}</li>);
}
useEffect(() => {
  if (rows.length === 0) {setIsClose(true);}
}, []);
return(
    <div className="bar" >
    <Link to= {props.info.link} className = "linkstyle"><span onClick={()=>setIsClicked(true)} onMouseOut={()=>setIsClicked(false)} className = {props.info.color}>{props.info.name}</span></Link>
  <div id="i" className={`menu ${close ? 'close' : ''} ${clicked ? 'close' : ''}`}>
    <ul className="ulbox">
      {rows}
    </ul>
    <div className="itemphotos"><img className="photo" src="./hello.jpg"></img></div>
  </div>
  </div>
)
}
export default MainPage;