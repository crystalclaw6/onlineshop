import { useState } from "react";
import { useEffect } from "react";
import './mainpage.css';

const MainPage= (props) => {
    const [ close, setIsClose] = useState(false)
    const rows = [];
    
for (let i = 0; i < props.items.length; i++) {
    rows.push(<li key = {i}>{props.items[i]}</li>);
}
useEffect(() => {
  console.log(rows.length);
  if (rows.length === 0) {setIsClose(true);}
}, []);
console.log(close);
return(
    <div className="bar" >
    <span className = {props.color}>{props.title}</span>
  <div id="i" className={`menu ${close ? 'close' : ''}`}>
    <ul>
      {rows}
    </ul>
    <div className="itemphotos"><img className="photo" src="./hello.jpg"></img></div>
  </div>
  </div>
)
}
export default MainPage;