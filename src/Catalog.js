import "./Catalog.css"
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
const Catalog =(props)=> {
  const location = useLocation();
  console.log(location)
  const {typefrom} = location.state;
  const [type, setType] = useState();
  const [items_parts, set_item_parts] = useState([]);
    useEffect(() => {
      setType(typefrom);
    }, [location.key])
    useEffect(()=>{
      
    },[items_parts])
    useEffect(()=>{
      load();
    },[type])
    useEffect(()=>{
      setType(typefrom);
      load();
    },[props.title])
    function load(){
      console.log(type)
      let arr = [];
      if (type==="none"){
      {props.elements.map(elem =>
        elem.product.map(item => 
          {
            console.log(item.photo)
          if (props.collection === "all") arr.push(<li>
            <div className="boxprice">
            <img className='photoelem' src = {item.photo}></img>
            <p className="description">{item.title}</p>
            <p className="price">{item.price} руб.</p>
            </div>
            </li>);
          else if (props.collection === item.collection) arr.push(<li>
            <div className="boxprice">
            <img className='photoelem' src = {item.photo}></img>
            <p className="description">{item.title}</p>
            <p className="price">{item.price} руб.</p>
            </div>
            </li>);
            
      })
        )}
    }else{
      props.elements.map(elem =>
        {if (elem.type === type){
        elem.product.map(item => 
          {
          if (props.collection === "all") arr.push(<li>
            <div className="boxprice">
            <img className='photoelem' src = {item.photo}></img>
            <p className="description">{item.title}</p>
            <p className="price">{item.price} руб.</p>
            </div>
            </li>);
          else if (props.collection === item.collection) arr.push(<li>
            <div className="boxprice">
            <img className='photoelem' src = {item.photo}></img>
            <p className="description">{item.title}</p>
            <p className="price">{item.price} руб.</p>
            </div>
            </li>);
      })}}
        )
    }
    set_item_parts(arr);
  }
    return (
          <div className='catalog'>
            <nav>
              <p className="cat_title">{props.title}</p>
              <div className="container">
          <ul className="cat_box">{props.elements.map(elem =>
          <li onClick= {()=>{ setType(elem.type); }}>{elem.type}</li>
          )}</ul></div></nav>
          <div>
          <ul className="boxphotos">{items_parts}</ul>
          </div>
            </div>
      );
  
  }
  export default Catalog;