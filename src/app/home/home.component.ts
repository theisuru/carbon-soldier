import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.drawSvg();
    this.drawDayNight();
    this.drawText();
    this.drawGlobe();
  }

  private drawSvg(): void {
    const containerWidth = (d3.select('div').node() as any).offsetWidth;
    const width = containerWidth;
    const height = containerWidth;

    // const svg = d3.select(DOM.svg(width, height));
    const svg = d3.select('div')
      .append('svg')
      .attr('width', width)
      .attr('height', height);
  }

  private drawGlobe(): void {
    const radius = 45;
    const speed = 2;
    let angle = 0;

    const containerWidth = (d3.select('div').node() as any).offsetWidth;
    const width = containerWidth;
    const height = containerWidth;

    const svg = d3.select('svg');

    const globe = svg.append('image')
      .attr('xlink:href', 'assets/globe.png')
      .attr('width', height)
      .attr('height', height);

    d3.interval(() => {
      angle = angle + speed * 0.1;
      this.rotateGlobe(globe, angle, width / 2);
    }, 10, 100);
  }

  private rotateGlobe(globe, angle, center): void {
    globe.attr('transform', 'rotate(' + angle + ' ' + center + ' ' + center + ')');
  }

  private drawDayNight(): void {
    const svg = d3.select('svg');
    const width = svg.attr('width') as unknown as number;
    const height = svg.attr('height') as unknown as number;

    svg.append('rect')
      .attr('x', width / 2)
      .attr('y', 0)
      .attr('width', width / 2)
      .attr('height', height);
  }

  private drawText(): void {
    const svg = d3.select('svg');
    const width = svg.attr('width') as unknown as number;
    const height = svg.attr('height') as unknown as number;

    svg.append('text')
      .attr('x', width / 8)
      .attr('y', height / 10)
      .attr('font-family', 'Lucida Console')
      .attr('font-size', width / 15)
      .attr('paint-order', 'stroke')
      .attr('stroke', '#000000')
      .attr('stroke-width', '1px')
      .attr('stroke-linecap', 'butt')
      .attr('stroke-linejoin', 'miter')
      .attr('fill', '#FFFFFF')
      .text('LOVE WHERE YOU LIVE');
  }

}
