import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counterProgress: number = 0;
  totalCountdown: number = 15;

  constructor() {}

  updateProgress($event: number) {
    this.counterProgress =
      ((this.totalCountdown - $event) / this.totalCountdown) * 100;
  }
  countdownFinished() {
    console.log('countdown has finished');
  }
}
