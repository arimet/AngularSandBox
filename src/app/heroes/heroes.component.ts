import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  // Variables de classes
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * Fonction qui permet de selectionner un héro au click sur la liste
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /**
   * Fonction qui récupère nos héros
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
