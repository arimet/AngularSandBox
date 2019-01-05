import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    /**
     * Fonction qui récupère les heros
     */
    getHeroes(): Observable<Hero[]> {
        // On ajoute un message quand les heros ont été récupéré
        this.messageService.add('HeroService:  héros récupérés !');
        return of(HEROES);
    }
}
