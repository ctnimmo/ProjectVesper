import {useContext} from 'react';
import AppContext from '../contexts/AppContext';
import Calculator from './Calculator';

export const Computer = () => {
  
  const {value,setValue} = useContext(AppContext);
  
  return (
    <div>
      <br/>
      Global value:
      <br/>
      <br/>
      {value}
      <br/><br/>
      <Calculator
        value={value}
        setValue={setValue} />
    </div>
  );
}

export default Computer;