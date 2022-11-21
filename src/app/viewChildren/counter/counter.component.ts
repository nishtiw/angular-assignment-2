import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter works inside ViewChildrenComponent!
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  public counter : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
