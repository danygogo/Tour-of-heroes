import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  superHero: Hero = {
    name: "",
    id: 0    
  }

  heroes:Hero[] = HEROES

  ngOnInit(): void {
  }



  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
