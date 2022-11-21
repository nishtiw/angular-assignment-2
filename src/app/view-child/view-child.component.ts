import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild("highlight") marker : ElementRef<HTMLParagraphElement> = {} as ElementRef; 

  constructor() { 
  }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    console.log(this.marker);
    this.marker.nativeElement.style.color = "red";
  }

}
