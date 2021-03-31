import {useEffect,useRef,useState} from 'react';


function drawSecondsHand(ctx,radius){
    
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  second = (second * Math.PI / 30);
  drawClockHand(ctx, second, radius * 0.9, radius * 0.02, "red");
  
}

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
  const pp = new Date();
  const [dateTime, setDateTime] = useState(pp);
  
  useEffect(() => {
    
    let ctx = canvasRef.current.getContext('2d');
    let radius = "100";    
    ctx.translate(radius, radius); // centre start point for drawing    
        
    setInterval(() => {
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      second = (second * Math.PI / 30);
      drawClockHand(ctx, second, radius * 0.9, radius * 0.02, "red");
      // setDateTime(now);
    }, 1000);

  });
  
  return (
    <canvas width={props.width} height={props.height} ref={canvasRef}/>
  );
}