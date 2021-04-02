import ValueInput from './ValueInput';
import AppContext from './contexts/AppContext';
import {useContext} from 'react';

export const Calculator = ({value, setValue}) => {
  
  const {something,setSomething} = useContext(AppContext);
  
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