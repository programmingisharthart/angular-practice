import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username: string = '';

  isError = false;
  warning: string = 'Please enter username!'
  constructor() { }

  ngOnInit(): void {
  }
  onReset() {
   
    _.isEmpty(this.username) ? this.warning = "Warning, Please enter username!" : this.username = ""
  }
  onColorChange = () => {
    this.isError = !this.isError
  }

}
