import React from 'react';
import "./HomePage.css"
import { Link } from 'react-router-dom';
const HomePage =()=> {
  return (
        <div className='homepage'>
        <div className='mosaic main'>
            <div className='main box'>
              <img className='photobox' src="./main1.jpg"></img>
              <img className='photobox' src = "./main2.jpg"></img>
              <Link to = "/newcollection"  state={{ typefrom: 'none'}}><button className='buttonNew'>НОВАЯ КОЛЛЕКЦИЯ</button></Link>
              </div>
          </div>
          </div>
    );

}
export default HomePage;