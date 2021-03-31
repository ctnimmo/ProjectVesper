import {useEffect,useRef,useState} from 'react';

function drawClockHand(ctx,angle,length,color,lengthMultiplier){ //(ctx, position, length, width, color) {
  color = color || "black";
  ctx.clearRect(0, 0, length * 2, length * 2);
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  const rotAng = -Math.PI + angle;
  ctx.translate(length, length);
  ctx.moveTo(0, 0);
  ctx.rotate(rotAng);
  ctx.lineTo(0, length * lengthMultiplier);
  ctx.stroke();
  ctx.moveTo(0, 0);
  ctx.rotate(-rotAng);
  ctx.translate(-length, -length);
}

export const ClockSecondsHandOnly = ({style,length,seconds}) => {
  
  const ticks = seconds;
  const colour = "red";
  const lengthMultiplier = 0.65;
  
  return (    
    <ClockHand ticks={ticks} colour={colour} lengthMultiplier={lengthMultiplier} length={length} style={style} />
  );
}

export const ClockMinutesHandOnly = ({style,length,minutes}) => {
  
  const ticks = minutes;
  const colour = "black";
  const lengthMultiplier = 0.75;
  
  return (    
    <ClockHand ticks={ticks} colour={colour} lengthMultiplier={lengthMultiplier} length={length} style={style} />
  );
}

export const ClockHoursHandOnly = ({style,length,hours,minutes}) => {
  
  const ticks = 5 * ((hours % 12) + (minutes / 60));
  const colour = "black";
  const lengthMultiplier = 0.55;
      
  return (    
    <ClockHand ticks={ticks} colour={colour} lengthMultiplier={lengthMultiplier} length={length} style={style} />
  );
}

export const ClockHand = ({style,ticks,length,colour,lengthMultiplier}) => {
  
  const canvasRef = useRef(null);
  const unitsOfDivision = 60;
  const angle = ticks / unitsOfDivision * 2 * Math.PI;
  const size = length * 2;
  
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    drawClockHand(ctx,angle,length,colour,lengthMultiplier)
  });
  
  return (
    <canvas width={size} height={size} ref={canvasRef}  style={style}/>
  );
}