export function drawClockTicks(ctx, radius) {
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