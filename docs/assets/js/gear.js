

function gear({teeth, radius, annulus}) {

  const toothRadius = 4;
  const holeRadius = 10;

  const n = teeth;
  let r2 = Math.abs(radius);
  let r0 = r2 - toothRadius;
  let r1 = r2 + toothRadius;
  let r3 = holeRadius;
  if (annulus) r3 = r0, r0 = r1, r1 = r3, r3 = r2 + toothRadius * 3;
  const da = Math.PI / n;
  let a0 = -Math.PI / 2 + (annulus ? Math.PI / n : 0);
  const path = ["M", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)];
  let i = -1;
  while (++i < n) { // TODO Template literal.
    path.push(
      "A", r0, ",", r0, " 0 0,1 ", r0 * Math.cos(a0 += da), ",", r0 * Math.sin(a0),
      "L", r2 * Math.cos(a0), ",", r2 * Math.sin(a0),
      "L", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
      "A", r1, ",", r1, " 0 0,1 ", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
      "L", r2 * Math.cos(a0 += da / 3), ",", r2 * Math.sin(a0),
      "L", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)
    );
  }
  path.push("M0,", -r3, "A", r3, ",", r3, " 0 0,0 0,", r3, "A", r3, ",", r3, " 0 0,0 0,", -r3, "Z");
  return path.join("");
}

function drawGear() {
  const radius = 45;
  const speed = 2;
  const frameRadius = 100;

  const width = 600;
  const height = 500;
  const x = Math.sin(2 * Math.PI / 3);
  const y = Math.cos(2 * Math.PI / 3);
  const start = Date.now();

  // const svg = d3.select(DOM.svg(width, height));
  const svg = d3.select('div').append('svg').attr('width', width).attr('height', height);

  const frame = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .append("g")
    .datum({radius: +frameRadius});

  const path = frame.selectAll("g")
    .data([
      {fill: "#c6dbef", teeth: 80, radius: -radius * 5, origin: [0, 0], annulus: true},
      {fill: "#6baed6", teeth: 16, radius: radius, origin: [0, 0]},
      {fill: "#9ecae1", teeth: 32, radius: -radius * 2, origin: [0, -radius * 3]},
      {fill: "#9ecae1", teeth: 32, radius: -radius * 2, origin: [-radius * 3 * x, -radius * 3 * y]},
      {fill: "#9ecae1", teeth: 32, radius: -radius * 2, origin: [radius * 3 * x, -radius * 3 * y]}
    ])
    .join("g")
    .attr("transform", d => `translate(${d.origin})`)
    .append("path")
    .attr("stroke", "black")
    .attr("fill", d => d.fill)
    .attr("d", gear);

  // while (true) {
  // drawInCanvas(speed, start, path, frame, svg).next().value;

  // let angle = (Date.now() - start) * speed;
  // let transform = d => `rotate(${angle / d.radius})`;
  // path.attr("transform", transform);
  // frame.attr("transform", transform);
  // svg.node();

  // return svg.node();
  // }


  // d3.timer(function () {
  d3.interval(function () {
    drawInCanvas(speed, start, path, frame, svg);
  }, 10, 100)


}

function drawInCanvas(speed, start, path, frame, svg) {
  const angle = (Date.now() - start) * speed;
  const transform = d => `rotate(${angle / d.radius})`;
  path.attr("transform", transform);
  frame.attr("transform", transform);
  svg.node();
}
