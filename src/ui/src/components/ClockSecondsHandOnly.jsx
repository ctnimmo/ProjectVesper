import {useContext} from 'react';
import AppContext from '../contexts/AppContext';
import {ClockHand} from './ClockHand';

export const ClockSecondsHandOnly = ({style,length}) => {
  
  const {seconds} = useContext(AppContext);
  const colour = "red";
  const lengthMultiplier = 0.65;
  
  return (    
    <ClockHand ticks={seconds} colour={colour} lengthMultiplier={lengthMultiplier} length={length} style={style} />
  );
}