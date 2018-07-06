import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameNum = setInterval(1000);
  constructor() { }

  ngOnInit() {
  }

  onStartClick() {

  }

  onStopClick() {
    clearInterval(this.gameNum);
  }
}
