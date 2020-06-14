import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private toothRadius = 3;
  private annulusWidth = 12;

  constructor() {
  }

  ngOnInit() {
    this.drawGear();
  }

  private drawGear(): void {
    const radius = 24;
    const speed = 1;
    const frameRadius = 100;

    const width = 850;
    const height = 850;
    const x = Math.sin(2 * Math.PI / 3);
    const y = Math.cos(2 * Math.PI / 3);
    const start = Date.now();

    const toothRadius = this.toothRadius;
    const annulusWidth = this.annulusWidth;
    //
    const gear1Center = [(radius * 7 + annulusWidth + 2 * toothRadius) * x, (-radius * 7 - annulusWidth - 2 * toothRadius) * y];
    const gear2Center = [(-radius * 7 - annulusWidth - 2 * toothRadius) * x, (-radius * 7 - annulusWidth - 2 * toothRadius) * y];
    const gear3Center = [0, (-radius * 7 - annulusWidth - 2 * toothRadius)];

    // const svg = d3.select(DOM.svg(width, height));
    const svg = d3.select('div').append('svg').attr('width', width).attr('height', height);

    const frame = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .append('g')
      .datum({radius: +frameRadius});

    const path = frame.selectAll('g')
      .data([
        {fill: '#c6dbef', teeth: 208, radius: -radius * 12 + 2 * -annulusWidth + 4 * -toothRadius , origin: [0, 0], annulus: true},
        {fill: '#6baed6', teeth: 32, radius: radius * 2, origin: [0, 0], annulus: false},
        {fill: '#c6dbef', teeth: 80, radius: -radius * 5, origin: [gear1Center[0], gear1Center[1]], annulus: true},
        {fill: '#6baed6', teeth: 16, radius: radius, origin: [gear1Center[0], gear1Center[1]], annulus: false},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear1Center[0], gear1Center[1] + -radius * 3]},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear1Center[0] + -radius * 3 * x, gear1Center[1] + -radius * 3 * y], annulus: false},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear1Center[0] + radius * 3 * x, gear1Center[1] + -radius * 3 * y], annulus: false},
        {fill: '#c6dbef', teeth: 80, radius: -radius * 5, origin: [gear2Center[0], gear2Center[1]], annulus: true},
        {fill: '#6baed6', teeth: 16, radius: radius, origin: [gear2Center[0], gear2Center[1]], annulus: false},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear2Center[0], gear2Center[1] + -radius * 3]},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear2Center[0] + -radius * 3 * x, gear2Center[1] + -radius * 3 * y], annulus: false},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear2Center[0] + radius * 3 * x, gear2Center[1] + -radius * 3 * y], annulus: false},
        {fill: '#c6dbef', teeth: 80, radius: -radius * 5, origin: [gear3Center[0], gear3Center[1]], annulus: true},
        {fill: '#6baed6', teeth: 16, radius: radius, origin: [gear3Center[0], gear3Center[1]], annulus: false},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear3Center[0], gear3Center[1] + -radius * 3]},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear3Center[0] + -radius * 3 * x, gear3Center[1] + -radius * 3 * y], annulus: false},
        {fill: '#9ecae1', teeth: 32, radius: -radius * 2, origin: [gear3Center[0] + radius * 3 * x, gear3Center[1] + -radius * 3 * y], annulus: false}
      ])
      .join('g')
      .attr('transform', d => `translate(${d.origin})`)
      .append('path')
      .attr('stroke', 'black')
      .attr('fill-rule', 'evenodd')
      .attr('fill', d => d.fill)
      .attr('d', this.gear);

    d3.interval(() => {
      this.drawInCanvas(speed, start, path, frame, svg);
    }, 10, 100);
  }

  private gear({fill, teeth, radius, origin, annulus}): string {
    const holeRadius = 10;
    const toothRadius = 3;
    const annulusWidth = 12;
    const teethPerRadius = 16;

    let n = teeth;
    let r2 = Math.abs(radius);
    let r0 = r2 - toothRadius;
    let r1 = r2 + toothRadius;
    let r3 = holeRadius;
    if (annulus) {
      r3 = r0;
      r0 = r1;
      r1 = r3;
      r3 = r2 + toothRadius * 3;
    }

    const da = Math.PI / n;
    let a0 = -Math.PI / 2 + (annulus ? Math.PI / n : 0);
    const path = ['M', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)];
    let i = -1;
    while (++i < n) {
      path.push(
        'A', r0, ',', r0, ' 0 0,1 ', r0 * Math.cos(a0 += da), ',', r0 * Math.sin(a0),
        'L', r2 * Math.cos(a0), ',', r2 * Math.sin(a0),
        'L', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
        'A', r1, ',', r1, ' 0 0,1 ', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
        'L', r2 * Math.cos(a0 += da / 3), ',', r2 * Math.sin(a0),
        'L', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)
      );
    }

    if (annulus) {
      r2 = Math.abs(radius) + annulusWidth + 2 * toothRadius;
      r0 = r2 - toothRadius;
      r1 = r2 + toothRadius;
      // n = n + 5;

      a0 = -Math.PI / 2;
      path.push('M', r0 * Math.cos(a0), ',', r0 * Math.sin(a0));
      i = -1;
      while (++i < n) {
        path.push(
          'A', r0, ',', r0, ' 0 0,1 ', r0 * Math.cos(a0 += da), ',', r0 * Math.sin(a0),
          'L', r2 * Math.cos(a0), ',', r2 * Math.sin(a0),
          'L', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
          'A', r1, ',', r1, ' 0 0,1 ', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
          'L', r2 * Math.cos(a0 += da / 3), ',', r2 * Math.sin(a0),
          'L', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)
        );
      }
      path.push('Z');
    } else {
      path.push('M0,', -r3, 'A', r3, ',', r3, ' 0 0,0 0,', r3, 'A', r3, ',', r3, ' 0 0,0 0,', -r3, 'Z');
    }
    return path.join('');
  }

  private drawInCanvas(speed, start, path, frame, svg): void {
    const angle = (Date.now() - start) * speed;
    const transform = d => `rotate(${angle / d.radius})`;
    path.attr('transform', transform);
    frame.attr('transform', transform);
    svg.node();
  }

}
