import logo from './images/ProjectVesperLogo.png';
import './App.css';

import Computer from './components/Computer';
import {CraigClock} from './components/CraigClock';





import {useRef} from 'react';


const FileInput = (props) => {                        
                                
  const fileInput = useRef(); //useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('HELLO');
    alert(
      `Selected a file - ${fileInput.current.files[0].name}`
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}





const App = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Project Vesper
      </header>
      <Computer />
      <CraigClock />
      <FileInput />
    </div>
  );
}

export default App;