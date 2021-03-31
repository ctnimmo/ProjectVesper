import logo from './logo.svg';
import './App.css';

// import * from './ethscan';




const getBlockReward = (blockNo) => {
  
   
  
}



const AppProps = (blockNo) => {
  
  
  
}

AppProps.getBlockReward; // (blockNo)
AppProps.getBlockCountdown; // (blockNo)
AppProps.getBlockNoByTime; // (timeStamp,closest)



function App(AppProps) {
  
  const getBlockReward = AppProps.getBlockReward; // (blockNo)
  const getBlockCountdown = AppProps.getBlockCountdown; // (blockNo)
  const getBlockNoByTime = AppProps.getBlockNoByTime; // (timeStamp,closest) 
  
  return (
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
		
		<div></div>
		
		
      </header>
    </div>
  );
}

export default App;
