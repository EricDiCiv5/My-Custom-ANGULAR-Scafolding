import {
  Character,
  CharacterDataWrapper,
  CharacterDataContainer
} from './../models/Characters';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ObtainDataService } from './obtain-data.service';

describe('ObtainDataService', () => {
  let service: ObtainDataService;
  let httpController: HttpTestingController;
  const url = 'http://gateway.marvel.com/v1/public/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ObtainDataService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('returns first character from the API', () => {

    const heroList: Array<Partial<Character>> = [
      {
        name: 'john',
        id: 0,
        description: "it's an actor"
      } as Partial<Character>,
      {
        name: 'smith',
        id: 0,
        description: "it's a waiter"
      } as Partial<Character>,
      {
        name: 'sandy',
        id: 0,
        description: "it's a nurse"
      } as Partial<Character>,
      {
        name: 'alfred',
        id: 0,
        description: "was a movies director"
      } as Partial<Character>,
      {
        name: 'charles',
        id: 0,
        description: "was a biologist"
      } as Partial<Character>
    ];

    const result1: CharacterDataWrapper = {
      data: { results: heroList } as CharacterDataContainer
    } as CharacterDataWrapper;

    
    service.obtainCharacters().subscribe((res) => {
      expect(res.length).toEqual(heroList.length);
    });

    const ctrler = httpController.expectOne({
      method: 'GET',
      url: `${url}characters?`
    });

    
    ctrler.flush(result1);
  });

  it('returns characters that appears on a comic', () => {
    const heroList: Array<Partial<Character>> = [
      {
        name: 'john',
        id: 0,
        description: "it's an actor"
      } as Partial<Character>,
      {
        name: 'smith',
        id: 0,
        description: "it's a waiter"
      } as Partial<Character>,
      {
        name: 'sandy',
        id: 0,
        description: "it's a nurse"
      } as Partial<Character>,
      {
        name: 'alfred',
        id: 0,
        description: "was a movies director"
      } as Partial<Character>,
      {
        name: 'charles',
        id: 0,
        description: "was a biologist"
      } as Partial<Character>
    ];

    const result2: CharacterDataWrapper = {
      data: { results: heroList } as CharacterDataContainer
    } as CharacterDataWrapper;

    service.obtainCharactersByComicId(1939).subscribe((res) => {
      expect(res.length).toEqual(heroList.length);
    });

    const ctrler = httpController.expectOne({
      method: 'GET',
      url: `${url}comics/1939/characters?`
    });

    ctrler.flush(result2);
  });
});
