import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private heroService: HeroService) { }

  @Input() hero?: Hero;

  identification! : number;

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    
    //option 1
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      this.identification = Number(params.get("id"));
    })
    this.heroService.getHero(this.identification).subscribe( hero => this.hero = hero)
    
    //option 2
    // const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    //this.heroService.getHero(id).subscribe( hero => this.hero = hero)
  }

  goBack(){
    this.location.back()
  }
}
