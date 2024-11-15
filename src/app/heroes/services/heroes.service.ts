import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { catchError, map, Observable, of } from 'rxjs';
import { environments } from '../../../enviroments/enviroments';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseUrl
  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getSuggestions(query:string):  Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }

  addHero(hero:Hero): Observable<Hero>{
    const heroWithoutId = {...hero, id: undefined};
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, heroWithoutId);
  }

  updateHero(hero:Hero): Observable<Hero>{
    if(!hero.id) throw new Error('The hero must have an id');
    return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }
  deleteHeroById(id:string): Observable<boolean>{

    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error => of(false)),
      map(resp => true)

    );
  }

}
