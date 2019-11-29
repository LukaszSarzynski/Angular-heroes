import { Component, OnInit } from '@angular/core';
import { Hero } from '../HeroClass';
import { HeroesStatic } from '../HeroesList';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  aHeroes = HeroesStatic;
  oHeroSelected: Hero;

  constructor() { }

  ngOnInit() {
  }

  setHero(oHero: Hero): void {
    this.oHeroSelected = oHero;
  }

}
