import { useState } from "react";
import './mainpage.css';

const MainPage= (props) => {
    const [open, setIsOpen] = useState(false)
    const rows = [];
    
for (let i = 0; i < props.items.length; i++) {
    rows.push(<li key = {i}>{props.items[i]}</li>);
}
console.log(rows.length)
return(
    <div className="navbar">
    <span onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>{props.title}</span>
  <div className={`menu ${open ? 'open' : ''}`}>
    <ul>
      {rows}
    </ul>
  </div>
  </div>
)
}
export default MainPage;