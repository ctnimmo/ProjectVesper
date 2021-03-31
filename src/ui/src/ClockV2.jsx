import {useEffect} from 'react';
import {ClockBackground} from './ClockBackground';
import {ClockSecondsHand} from './ClockSecondsHand';

export const ClockV2 = (props) => {
  
  let now = new Date();
  
  useEffect(() => {        
    setInterval(() => {
      now = Date();
    }, 1000);

  });

  return (
    <>
      <ClockBackground width="200" height="200"/>
      <ClockSecondsHand width="200" height="200" date={now}/>
    </>
  );
}
