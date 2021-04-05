// timeFormat string e.g. "24hour"
// hourFormat "roman"

export function drawClockNumbers(ctx, radius, timeFormat, hourFormat) {
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
