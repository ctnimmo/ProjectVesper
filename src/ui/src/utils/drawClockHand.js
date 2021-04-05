
export function drawClockHand(ctx,angle,length,color,lengthMultiplier){
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