import './App.css';
import MainPage from './mainpage';
import NavJson from "./navigation.json";
function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <nav className='navbar'> 
          <ul className='nav'>
          <li className = "listItem">
            <a className = "logo">Momo</a>
            </li>
          {NavJson.map(chapter =>
            //<Link to= {chapter.name} className = "gamelinkStyle">
            <li className = "listItem">
            <a className = "title"><MainPage title = {chapter.name} items = {chapter.parts} color = {chapter.color}/></a>
            </li>
           // </Link>
            )}
          </ul></nav>
      </header>
      <body>
      <div className='mosaic main'>
            <div className='main box'>
              <img className='photobox' src="./main1.jpg"></img>
              <img className='photobox' src = "./main2.jpg"></img>
              <button className='buttonNew'>НОВАЯ КОЛЛЕКЦИЯ</button>
              </div>
          </div>
          
      </body>
    </div>
  );
}

export default App;
