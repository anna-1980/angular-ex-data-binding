import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  
})
export class CockpitComponent implements OnInit {
// the event emitted from cockpit component which is used in app.component.html
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
//------- you can assign alias to the @Output -------//
  @Output('bpCreated') blueprintCreated =new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ''; --- it is possible to comment it out becaue we get the value form the local reference on input
  // remember to add in HTML (click)="onAddBlueprint(serverNameInput)
  
  // newServerContent = '';
  // getting access to the local reference in html template
  @ViewChild('ServerContentInput', {static: true}) ServerContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.ServerContentInput.nativeElement.value)
  //   console.log(nameInput)
    console.log(nameInput.value)
  //  this.serverCreated.emit({
  //   serverName: nameInput.value, 
  //   serverContent: this.newServerContent});
     this.serverCreated.emit({
    serverName: nameInput.value, 
    serverContent: this.ServerContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.blueprintCreated.emit({
    //   serverName: nameInput.value, 
    //   serverContent: this.newServerContent});
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.ServerContentInput.nativeElement.value});
  }

}
