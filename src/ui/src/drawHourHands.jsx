import {useEffect,useRef} from 'react';

function drawClockHand(ctx, position, length, width, color) {
  color = color || "black";
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.moveTo(0, 0);
  ctx.rotate(position);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-position);
}

export const ClockHourHand = (props) => {
  
  const canvasRef = useRef(null);
  let radius = "100";
  
  
  
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // hour
    hour %= 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawClockHand(ctx, hour, radius * 0.5, radius * 0.05);
    
    drawClockHand(ctx, radius,"","");
  });  
  
  /*
  return (
    <canvas width={props.width} height={props.height} ref={props.ref}/>
  );
  */
  
  return (
    <canvas width={props.width} height={props.height} ref={canvasRef}/>
  );
}