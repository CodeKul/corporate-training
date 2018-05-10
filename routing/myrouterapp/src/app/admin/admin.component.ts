import { JokeService } from './../joke.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [JokeService]
})
export class AdminComponent implements OnInit {

  jk: Joke = new Joke()
  adNm: string

  constructor(
    private actRt: ActivatedRoute,
    private joke: JokeService
  ) { }

  ngOnInit() {
    this.jk.punchline = 'This is punchline'
    this.jk.setup = 'this is setup'
    console.log(this.actRt)
    this.actRt.params.subscribe(
      prms => this.adNm = prms['adNm']
    )
  }

  clkRandomJoke() {
    this.joke.randomJoke(rsJk => this.jk = rsJk)
  }
}
