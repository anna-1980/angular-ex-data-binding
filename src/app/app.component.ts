import { Component, ViewEncapsulation } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
//----- you loop through this array generating new HTML elements, 
//----- the data on input from cockpit.component.html get push() 
//----- into the array by the (click)="onAddServer(serverNameInput)"-------//
  
  serverElements: any[] = [
{type: 'server', name: 'testserver', content: 'Just a test! hard coded in app.component.ts array of serverElements'}
  ];

//----from Game odd even solution Lecture 84-----//
oddNumbers: number[] = []
evenNumbers: number[] = []

// -------- lecture 69 --------------//
// catching event emitted from cockpit component 
  onServerAdded( serverData: {serverName: string, serverContent: string}) {
    console.log('addServer')
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    console.log('addBluePrint')
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
  // it would fail of array was empty at first index-0
    this.serverElements[0].name = 'Changed'
    console.log('dummy button clicked')
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(passedToOddCopmFromAppComp: number){
    console.log(passedToOddCopmFromAppComp)
    // console.log(this.oddNumbers)
    // console.log(this.evenNumbers)
    if (passedToOddCopmFromAppComp % 2 === 0 ) {
      this.evenNumbers.push(passedToOddCopmFromAppComp)
    }else{
      this.oddNumbers.push(passedToOddCopmFromAppComp)
    }
  }
}