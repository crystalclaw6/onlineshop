import './App.css';
import MainPage from './mainpage.js';
import NavJson from "./navigation.json";
import HomePage from './HomePage.js';
import Catalog from './Catalog';
import { Routes, Route, Link} from 'react-router-dom';
import { useEffect } from 'react';
import Clothes from "./clothes.json";
import Accessories from "./Accessories.json";
import Shoes from "./Shoes.json"
function App() {
  useEffect(() => {
    document.title = "MOMO - Online fashion store";
  }, []);
  return (
    <div className="App" >
      <header className="App-header">
        <nav className='navbar'> 
          <ul className='nav'>
          <li className = "listItem">
            <Link to = "/" className='linkstyle'><a className = "logo">Momo</a></Link>
            </li>
          {NavJson.map(chapter =>
            <li className = "listItem">
            <a className = "title"><MainPage info = {chapter}/></a>
            </li>
            )}
          </ul></nav>
      </header>
      <body>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newcollection" element={<Catalog title="NEW" collection="new" elements={Clothes.concat(Accessories.concat(Shoes))}/>} />
      <Route path="/sale" element={<Catalog title="SALE" collection="sale" elements={Clothes.concat(Accessories.concat(Shoes))}/>} />
      <Route path="/clothes" element={<Catalog title="Одежда" elements={Clothes} collection="all"/>} />
      <Route path="/shoes" element={<Catalog title="Обувь" elements={Shoes} collection="all"/>} />
      <Route path="/accessories" element={<Catalog title="Аксессуары" elements={Accessories} collection="all"/>} />
      </Routes>
      </body>
      
    </div>
  );
}

export default App;
