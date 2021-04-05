import logo from './images/ProjectVesperLogo.png';
import './App.css';

import Computer from './components/Computer';
import {CraigClock} from './components/CraigClock';

const App = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Project Vesper
      </header>
      <Computer />
      <CraigClock />
    </div>
  );
}

export default App;