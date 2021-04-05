import {ClockBackground} from './ClockBackground';
import {ClockSecondsHandOnly} from './ClockSecondsHandOnly';
import {ClockMinutesHandOnly} from './ClockMinutesHandOnly';
import {ClockHoursHandOnly} from './ClockHoursHandOnly';

export const CraigClock = () => {  
  return (
    <>
      <ClockBackground width="200" height="200" style={{position:"relative",left:"300px"}}/>
      <ClockSecondsHandOnly length="100" style={{position:"relative",left:"100px"}}/>
      <ClockMinutesHandOnly length="100" style={{position:"relative",left:"-100px"}}/>
      <ClockHoursHandOnly length="100" style={{position:"relative",left:"-300px"}}/>      
    </>
  );
}