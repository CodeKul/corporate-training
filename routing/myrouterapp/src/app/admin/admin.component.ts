import { JokeService } from './../joke.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [JokeService]
})
export class AdminComponent implements OnInit {

  jk: Joke = new Joke()

  constructor(
    private joke: JokeService
  ) { }

  ngOnInit() {
    this.jk.punchline = 'This is punchline'
    this.jk.setup = 'this is setup'
  }

  clkRandomJoke() {
    this.joke.randomJoke(rsJk => this.jk = rsJk)
  }
}
