import { AfterViewInit, Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { CounterComponent } from '../viewChildren/counter/counter.component';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss']
})
export class ViewChildrenComponent implements OnInit, AfterViewInit {

  @ViewChildren("highlight") marker : QueryList<ElementRef> = {} as QueryList<ElementRef>; 
  @ViewChild("childView") count : CounterComponent = new CounterComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.marker);
    console.log("Length of marker: ", this.marker.length);
    this.marker.first.nativeElement.style.color = "orange";
    this.marker.last.nativeElement.style.color = "green";
  }

  inc() {
    this.count.increment();
  }

  dec() {
    this.count.decrement();
  }

}
