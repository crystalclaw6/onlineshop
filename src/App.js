import './App.css';
import MainPage from './mainpage';
import NavJson from "./navigation.json";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='navbar'> 
          <ul className='nav'>
          {NavJson.map(chapter =>
            //<Link to= {chapter.name} className = "gamelinkStyle">
            <li className = "listItem">
            <a className = "title"><MainPage title = {chapter.name} items = {chapter.parts}/></a>
            </li>
           // </Link>
            )}
          </ul></nav>
      </header>
    </div>
  );
}

export default App;
