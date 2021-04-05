import {useEffect,useRef} from 'react';
import {drawClockBackground} from '../utils/drawClockBackground'
import {drawClockTicks} from '../utils/drawClockTicks'
import {drawClockNumbers} from '../utils/drawClockNumbers'

export const ClockBackground = (props) => {
  
  const canvasRef = useRef(null);
  let radius = "100";
  
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    drawClockBackground(ctx,radius);
    drawClockTicks(ctx,radius);
    drawClockNumbers(ctx,radius,"","");
  });  
    
  return (
    <canvas width={props.width} height={props.height} ref={canvasRef} style={props.style}/>
  );
}