import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numberInc;
  num = 0;

  @Output() gameNumberEmitter = new EventEmitter<number>();
  constructor() {
   }

  ngOnInit() {
  }

  onStartClick() {
    this.numberInc = setInterval(() => {
      this.gameNumberEmitter.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onStopClick() {
    clearInterval(this.numberInc);
  }
}
