// const ctx = canvasRef.current.getContext('2d');
export function drawClockBackground(ctx, radius){
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