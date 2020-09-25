import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

declare function drawGear(): any;

@Component({
  selector: 'app-carbon',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    d3.select('p').transition().style('color', 'red').duration(5000);
    // this.drawLine();
    // this.drawGear();
    drawGear();
  }

  // private drawGear(): void {
  //   const radius = 45;
  //   const speed = 2;
  //   const frameRadius = 100;
  //
  //   const width = 600;
  //   const height = 500;
  //   const x = Math.sin(2 * Math.PI / 3);
  //   const y = Math.cos(2 * Math.PI / 3);
  //   const start = Date.now();
  //
  //   // const svg = d3.select(DOM.svg(width, height));
  //   const svg = d3.select('div').append('svg').attr('width', width).attr('height', height);
  //
  //   const frame = svg.append('g')
  //     .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
  //     .append('g')
  //     .datum({radius: +frameRadius});
  //
  //   const path = frame.selectAll('g')
  //     .data([
  //       {fill: '#c6dbef', teeth: 80, radius: -radius * 5, origin: [0, 0], annulus: true},
  //       {fill: '#6baed6', teeth: 16, radius: radius, origin: [0, 0], annulus: false},
  //       {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [0, -radius * 3]},
  //       {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [-radius * 3 * x, -radius * 3 * y], annulus: false},
  //       {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [radius * 3 * x, -radius * 3 * y], annulus: false}
  //     ])
  //     .join('g')
  //     .attr('transform', d => `translate(${d.origin})`)
  //     .append('path')
  //     .attr('stroke', 'black')
  //     .attr('fill', d => d.fill)
  //     .attr('d', this.gear);
  //
  //   // d3.timer(function () {
  //   d3.interval(() => {
  //     this.drawInCanvas(speed, start, path, frame, svg);
  //   }, 10, 100);
  // }
  //
  // private gear({fill, teeth, radius, origin, annulus}): string {
  //
  //   const toothRadius = 4;
  //   const holeRadius = 10;
  //
  //   const n = teeth;
  //   const r2 = Math.abs(radius);
  //   let r0 = r2 - toothRadius;
  //   let r1 = r2 + toothRadius;
  //   let r3 = holeRadius;
  //   if (annulus) {
  //     r3 = r0;
  //     r0 = r1;
  //     r1 = r3;
  //     r3 = r2 + toothRadius * 3;
  //   }
  //   const da = Math.PI / n;
  //   let a0 = -Math.PI / 2 + (annulus ? Math.PI / n : 0);
  //   const path = ['M', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)];
  //   let i = -1;
  //   while (++i < n) {
  //     path.push(
  //       'A', r0, ',', r0, ' 0 0,1 ', r0 * Math.cos(a0 += da), ',', r0 * Math.sin(a0),
  //       'L', r2 * Math.cos(a0), ',', r2 * Math.sin(a0),
  //       'L', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
  //       'A', r1, ',', r1, ' 0 0,1 ', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
  //       'L', r2 * Math.cos(a0 += da / 3), ',', r2 * Math.sin(a0),
  //       'L', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)
  //     );
  //   }
  //   path.push('M0,', -r3, 'A', r3, ',', r3, ' 0 0,0 0,', r3, 'A', r3, ',', r3, ' 0 0,0 0,', -r3, 'Z');
  //   return path.join('');
  // }
  //
  // private drawInCanvas(speed, start, path, frame, svg): void {
  //   const angle = (Date.now() - start) * speed;
  //   const transform = d => `rotate(${angle / d.radius})`;
  //   path.attr('transform', transform);
  //   frame.attr('transform', transform);
  //   svg.node();
  // }
  //
  // drawLine(): void {
  //   const width = 600;
  //   const height = 600;
  //   const svg = d3.select('div').append('svg').attr('width', width).attr('height', height);
  //   svg.append('line')
  //    .attr('x1', 100)
  //    .attr('y1', 100)
  //    .attr('x2', 200)
  //    .attr('y2', 200)
  //    .style('stroke', 'rgb(255,0,0)')
  //    .style('stroke-width', 2);
  // }
}

