import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked,
OnDestroy
 {
  // assigning alias to exported property
  @Input('srvElement') element: { type: string; name: string; content: string };

// to test ngOnChanges gets fired on every change
  @Input() name: string;


  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges was called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

 ngDoCheck() {
  console.log('ngDoCheck was called !!!')
 }

 ngAfterContentInit() {
  console.log('ngAfterContentInit was called!<-><->')
 }

 ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked was called!<><><>')
 }

 ngAfterViewInit(): void {
  console.log('AfterViewInit  called!xxxxx')
 }

 ngAfterViewChecked(): void {
  console.log('AfterViewChecked called! -x-x-x-')
 }

 ngOnDestroy(): void {
  console.log('ngOnDestroy called! 0-0-0-0')
 }

}
