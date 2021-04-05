import {useContext} from 'react';
import AppContext from '../contexts/AppContext';
import ValueInput from './ValueInput';

export const Calculator = () => {
  
  const {something,setSomething} = useContext(AppContext);
  const {value,setValue} = useContext(AppContext);
  
  const handleChange = (e) => {setSomething(e.target.value);}
  
  return (
    <div>
      <ValueInput
        value={value}
        setValue={setValue} />
        <br/>
        Capture the SOMETHING state:
        <br/>
        <br/>
        <input type="text" onChange={handleChange} />
        <br/>
        <br/>
        Value of the SOMETHING state: 
        <br/>
        {something}
        <br/><br/>
    </div>
  );
}

export default Calculator;