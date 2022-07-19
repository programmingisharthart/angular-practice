import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-pause',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.css']
})
export class StartPauseComponent implements OnInit {
  @Output() startIntervalGame = new EventEmitter<{ lastNumber: number, name:string }>();
  interval: any;
  lastNumber: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  startInterval() {
    this.interval = setInterval(() => {
      this.startIntervalGame.emit({ name:"sda", lastNumber:this.lastNumber })
     this.lastNumber++
    }, 1000)
  }
  pauseInterval() {
    clearInterval(this.interval)
    console.log("last number before pause" + this.lastNumber);
  }
}
