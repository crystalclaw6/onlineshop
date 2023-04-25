import "./Catalog.css"
const Catalog =(props)=> {
  const items_parts = [];
  {props.elements.map(elem =>
    elem.product.map(item => 
      {
      if (props.collection === "all") items_parts.push(<li>
        <div className="boxprice">
        <img className='photoelem' src = {item.photo}></img>
        <p className="description">{item.title}</p>
        <p className="price">{item.price}</p>
        </div>
        </li>);
      else if (props.collection === item.collection) items_parts.push(<li>
        <div className="boxprice">
        <img className='photoelem' src = {item.photo}></img>
        </div>
        </li>);
  })
    
    )}
    return (
          <div className='catalog'>
            <nav>
              <p className="cat_title">{props.title}</p>
              <div className="container">
          <ul className="cat_box">{props.elements.map(elem =>
          <li>{elem.type}</li>
          )}</ul></div></nav>
          <div>
          <ul className="boxphotos">{items_parts}</ul>
          </div>
            </div>
      );
  
  }
  export default Catalog;