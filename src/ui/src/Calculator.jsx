import TemperatureInput from './TemperatureInput';
import AppContext from './contexts/AppContext';
import {useContext} from 'react';

export const Calculator = ({temperature, setTemperature}) => {
  
  const {something,setSomething} = useContext(AppContext);
  
  const handleChange = (e) => {setSomething(e.target.value);}
  
  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        setTemperature={setTemperature} />
        <br/>
        <input type="text" onChange={handleChange} />
        <br/>
        SOMETHING: {something}
    </div>
  );
}

export default Calculator;