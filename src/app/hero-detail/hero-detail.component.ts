import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../HeroClass';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() oHero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
