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
        <input type="text" onChange={handleChange} />
        <br/>
        SOMETHING: {something}
    </div>
  );
}

export default Calculator;