import {createContext} from 'react';
import {useState,useEffect} from 'react';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    
  const [value, setValue] = useState('');
  const [something, setSomething] = useState(22);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);  
  const [seconds, setSeconds] = useState(0);
  
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
    <AppContext.Provider value={{value, setValue, something, setSomething, hours, seconds, minutes}}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;