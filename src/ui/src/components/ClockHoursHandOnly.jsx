import {useContext} from 'react';
import AppContext from '../contexts/AppContext';
import {ClockHand} from './ClockHand';

export const ClockHoursHandOnly = ({style,length}) => {
  
  const {hours,minutes} = useContext(AppContext);
  const ticks = 5 * ((hours % 12) + (minutes / 60));
  const colour = "black";
  const lengthMultiplier = 0.55;
      
  return (    
    <ClockHand ticks={ticks} colour={colour} lengthMultiplier={lengthMultiplier} length={length} style={style} />
  );
}