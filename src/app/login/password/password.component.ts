import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit, OnChanges {
  password: string = '';
  password1: string = ''
  @ViewChild('serveContent') serverContentInput: ElementRef<HTMLInputElement> = { } as ElementRef;
  constructor() {
    console.log('constructor called');
    
   }
   // lifecycles starts
  ngOnInit(): void {
    console.log('ngOninit called');
    
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    
  }
  //lifeCycle ends
  onchangepassword(event: any) {
    const { value, name} = event.target
    console.log(value);
    this.password1 = value
  }
  inputChange(props: any) {
   
    console.log(props.inputChangevalue.value);
    
    
  }
  getServerContent() {
    console.log(this.serverContentInput.nativeElement.value);
    
  }
}
