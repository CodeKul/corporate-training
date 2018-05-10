import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-very-simple',
  template: `
    <p>
      very-simple works!
    </p>
  `,
  styles: []
})
export class VerySimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
