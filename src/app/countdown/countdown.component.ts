import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  @Input() init: number = 0;
  public counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  startCountdown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      // this.
    }
  }
  doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }
  processCountdown() {
    console.log('count is ', this.counter);

    if (this.counter == 0) {
      console.log('counter end');
    } else {
      this.doCountdown();
    }
  }
}
