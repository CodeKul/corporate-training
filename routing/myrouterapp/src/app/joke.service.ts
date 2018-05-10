import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './admin/joke';

@Injectable()
export class JokeService {

  private readonly urlJoke = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'

  constructor(
    private http: HttpClient
  ) { }

  randomJoke(onJk: (jk : Joke) => void): void {
    this.http.get(this.urlJoke).subscribe(
      resDt => onJk(resDt as Joke)
    )
    console.log('Executed')
  }
}
