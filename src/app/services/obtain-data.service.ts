import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Character,
  CharacterDataWrapper,
  CharacterDataContainer
} from '../models/Characters';
import { MatTableDataSource } from '@angular/material/table';
import { ComicDataContainer, ComicDataWrapper, Comic } from '../models/Comics';

@Injectable({
  providedIn: 'root'
})
export class ObtainDataService {
  constructor(private http: HttpClient) {}

  obtainCharacters(): Observable<Array<Partial<Character>>> {
    return this.http
      .get<CharacterDataWrapper>(
        `http://gateway.marvel.com/v1/public/characters?`
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
              available: character.comics?.available
            })
          );
          return dataContainer.results;
        })
      );
  }

  obtainCharactersByComicId(id: number): Observable<Array<Partial<Character>>> {
    return this.http
      .get<CharacterDataWrapper>(
        `http://gateway.marvel.com/v1/public/comics/${id}/characters?`
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
              available: character.comics?.available
            })
          );
          return dataContainer.results;
        })
      );
  }

  obtainComics(id: number): Observable<Array<Partial<Comic>>> {
    return this.http
      .get<ComicDataWrapper>(
        `http://gateway.marvel.com/v1/public/characters/${id}/comics?`
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
              format: comics.format,
              available: comics.characters?.available
            })
          );
          return dataContainer.results;
        })
      );
  }

  obtainMatTableCharacters(
    state: string,
    id?: number
  ): Observable<MatTableDataSource<Partial<unknown>>> {
    if (state === 'characters') {
      return this.obtainCharacters().pipe(
        map((apiResult) => {
          let dataSource = new MatTableDataSource<Partial<Character>>(
            apiResult
          );
          dataSource.data = apiResult;
          return dataSource;
        })
      );
    }
    if (state === 'charactersByComicId') {
      return this.obtainCharactersByComicId(id!).pipe(
        map((apiResult) => {
          let dataSource = new MatTableDataSource<Partial<Character>>(
            apiResult
          );
          dataSource.data = apiResult;
          return dataSource;
        })
      );
    } else {
      return this.obtainComics(id!).pipe(
        map((apiResult) => {
          let dataSource = new MatTableDataSource<Partial<Comic>>(apiResult);
          dataSource.data = apiResult;
          return dataSource;
        })
      );
    }
  }
}
