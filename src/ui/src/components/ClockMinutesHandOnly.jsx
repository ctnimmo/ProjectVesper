import {useContext} from 'react';
import AppContext from '../contexts/AppContext';
import {ClockHand} from './ClockHand';

export const ClockMinutesHandOnly = ({style,length}) => {
  
  const {minutes} = useContext(AppContext);
  const colour = "black";
  const lengthMultiplier = 0.75;
  
  return (    
    <ClockHand ticks={minutes} colour={colour} lengthMultiplier={lengthMultiplier} length={length} style={style} />
  );
}