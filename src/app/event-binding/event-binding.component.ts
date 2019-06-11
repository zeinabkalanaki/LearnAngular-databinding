import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  clickTime: number = 0;
  eventCounter: string = "You don't click me yet!"

  eValue: string = ""

  ngOnInit() {
  }

  onClickButton() {
    this.clickTime = this.clickTime + 1
    this.eventCounter = "You click me " + this.clickTime + " times"
  }

  onTextChange(event: any) {
    this.eValue = event.target.value;
  }

}
