import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
//------- you can assign alias to the @Output -------//
  @Output('bpCreated') blueprintCreated =new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ''; --- it is possible to comment it out becaue we get the value form the local reference on input
  // remember to add in HTML (click)="onAddBlueprint(serverNameInput)
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput)
    console.log(nameInput.value)
   this.serverCreated.emit({
    serverName: nameInput.value, 
    serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.newServerContent});
  }

}
