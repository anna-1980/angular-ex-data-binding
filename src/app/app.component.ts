import { Component, ViewEncapsulation } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements: any[] = [
{type: 'server', name: 'testserver', content: 'Just a test! hard coded in app.component.ts'}
  ];

// -------- lecture 69 --------------//
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

}