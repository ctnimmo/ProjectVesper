import {useEffect,useRef} from 'react';

// const ctx = canvasRef.current.getContext('2d');
function drawClockBackground(ctx, radius){
  // const ctx = canvasRef.current.getContext('2d');
  ctx.translate(radius, radius); // centre start point for drawing
  radius *= 0.9; // this is done to make clock fit inside box - but it's a bit misleading
  
  ctx.beginPath();
  ctx.arc(0,0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

function drawClockTicks(ctx, radius) {
  radius *= 0.9;
  let numTicks, tickAng, tickX, tickY;

  for (numTicks = 0; numTicks < 60; numTicks++) {

    tickAng = (numTicks * Math.PI / 30);
    tickX = radius * Math.sin(tickAng);
    tickY = -radius * Math.cos(tickAng);

    ctx.beginPath();
    ctx.lineWidth = radius * 0.010;
    ctx.moveTo(tickX, tickY);
    if (numTicks % 5 === 0) {
      ctx.lineTo(tickX * 0.88, tickY * 0.88);
    } else {
      ctx.lineTo(tickX * 0.92, tickY * 0.92);
    }
    ctx.stroke();
  }
}

// timeFormat string e.g. "24hour"
// hourFormat "roman"

function drawClockNumbers(ctx, radius, timeFormat, hourFormat) {
  const originalRadius = radius;
  radius *= 0.9;
  const draw24hour = timeFormat.toLowerCase().trim() === "24hour";
  const drawRoman = !draw24hour && hourFormat.toLowerCase().trim() === "roman";
  
  const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const fontBig = radius * 0.15 + "px Arial";
  const fontSmall = radius * 0.075 + "px Arial";
  let ang, num;

  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.78);
    ctx.rotate(-ang);
    ctx.font = fontBig;
    ctx.fillStyle = "black";
    ctx.fillText(drawRoman ? romans[num-1] : num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.78);
    ctx.rotate(-ang);

    // Draw inner numerals for 24 hour time format
    if (draw24hour) {
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.60);
      ctx.rotate(-ang);
      ctx.font = fontSmall;
      ctx.fillStyle = "red";
      ctx.fillText((num + 12).toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.60);
      ctx.rotate(-ang);
    }
  }

  // Write author text
  ctx.font = fontSmall;
  ctx.fillStyle = "#3D3B3D";
  ctx.translate(0, radius * 0.30);
  ctx.fillText("@CraigNimmo", 0, 0);
  ctx.translate(0, -radius * 0.30);
  
  ctx.translate(-originalRadius, -originalRadius);
  
}

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