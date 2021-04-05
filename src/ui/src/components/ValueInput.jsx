import {useContext} from 'react';
import AppContext from '../contexts/AppContext';

export const ValueInput = () => {

  const {value,setValue} = useContext(AppContext);  

  const handleChange = (e) => {setValue(e.target.value);}

  return (
    <fieldset>
      <br/>
      <legend>Enter a value:</legend>
      <input type="text" onChange={handleChange} />
      <br/><br/>
      <div>Your value:</div>      
      <div>{value}</div>
      <br/>
    </fieldset>
  );
}

export default ValueInput;