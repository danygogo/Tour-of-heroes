import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }


  myColor: boolean =false;
  selectedHero?: Hero;

  superHero: Hero = {
    name: "",
    id: 0    
  }

  heroes:Hero[]= []

  ngOnInit(): void {
    this.getHeroes()
  }



  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addMessage();
  }


  getHeroes() {
 
    this.heroService.getHeroes().subscribe(
      resp => {this.heroes = resp}
    );

  }

  addMessage(){
    if(this.selectedHero){
      this.messageService.add(this.selectedHero.name)
    }
    else{
      return
    }

  }


}
