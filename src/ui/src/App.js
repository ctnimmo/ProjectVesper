import {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import AppContext from './contexts/AppContext';

// import * from './ethscan';
import Computer from './Computer';
import {ClockBackground} from './ClockBackground';
import {ClockSecondsHand,ClockSecondsHandOnly,ClockMinutesHandOnly,ClockHoursHandOnly} from './ClockSecondsHand';

function App(props) {
  
  const [temperature, setTemperature] = useState('');
  const [something, setSomething] = useState(22);
  
  // const d = new Date();
  // const s = d.getSeconds();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  
  useEffect(() =>   
    setTimeout(() => {
      const dd = new Date();
      const ss = dd.getSeconds();
      setSeconds(ss);
      const mm = dd.getMinutes();
      setMinutes(mm);
      const hh = dd.getHours();
      setHours(hh);
    },1000));

  return (
    <AppContext.Provider value={{something, setSomething}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
          </div>
        </header>
        <Computer
          temperature={temperature}
          setTemperature={setTemperature} />

        <ClockBackground width="200" height="200" style={{position:"relative",left:"300px"}}/>
        <ClockSecondsHandOnly length="100" seconds={seconds} style={{position:"relative",left:"100px"}}/>
        <ClockMinutesHandOnly length="100" minutes={minutes} style={{position:"relative",left:"-100px"}}/>
        <ClockHoursHandOnly  length="100" hours={hours} minutes={minutes} style={{position:"relative",left:"-300px"}}/>
          
      </div>
    </AppContext.Provider>
  );
}

export default App;

/*


        <ClockBackground width="200" height="200"/>
        <ClockSecondsHand width="200" height="200"/>
        
              <p>
        {props.seconds}
      </p> 


*/