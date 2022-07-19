import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice in angular';
  name = 'Aaron';
  intervalNumber: number = 0;
  intervalFired(e: any) {
    console.log(e);
    this.intervalNumber = e.lastNumber
  }
}
