import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Character,
  CharacterDataContainer,
  CharacterDataWrapper
} from '../models/Characters';
import { map, Observable } from 'rxjs';
import { Comic, ComicDataContainer, ComicDataWrapper } from '../models/Comics';

@Injectable({
  providedIn: 'root'
})
export class MoreInfoService {
  constructor(private http: HttpClient) {}
  obtainCharacterById(id: string): Observable<Array<Partial<Character>>> {
    return this.http
      .get<CharacterDataWrapper>(
        `http://gateway.marvel.com/v1/public/characters/${id}?`
      )
      .pipe(
        map((res: CharacterDataWrapper) => {
          const dataContainer: CharacterDataContainer = res.data;
          dataContainer.results = dataContainer.results.map(
            (character: Partial<Character>) => ({
              id: character.id,
              name: character.name,
              description: character.description || 'No description available',
              modified: character.modified,
              thumbnail: character.thumbnail,
              related: character.comics
            })
          );
          return dataContainer.results;
        })
      );
  }

  obtainComicsById(id: string): Observable<Array<Partial<Comic>>> {
    return this.http
      .get<ComicDataWrapper>(
        `http://gateway.marvel.com/v1/public/comics/${id}?`
      )
      .pipe(
        map((res: ComicDataWrapper) => {
          const dataContainer: ComicDataContainer = res.data;
          dataContainer.results = dataContainer.results.map(
            (comics: Partial<Comic>) => ({
              id: comics.id,
              name: comics.title,
              description: comics.description || 'No description available',
              modified: comics.modified,
              thumbnail: comics.thumbnail,
              available: comics.characters?.available
            })
          );
          return dataContainer.results;
        })
      );
  }
}
