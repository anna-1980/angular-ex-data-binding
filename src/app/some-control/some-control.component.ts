import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-some-control',
  templateUrl: './some-control.component.html',
  styleUrls: ['./some-control.component.css'],
})
export class SomeControlComponent implements OnInit {
  // add an Even emitter
  //add @Output so event is listenable to from outside of the component
  @Output('aliasInternalFiredEvent') intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    console.log('let the game beggin');
    console.log('lastNumber' + this.lastNumber);

    this.interval = setInterval(() => {
      // fintion gets executed on each tick, you need to emit an event here (add it first)
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onGamePause() {
    console.log('++ Game Paused ++');
    console.log('lastNumber' + this.lastNumber);
    clearInterval(this.interval);
  }
}
