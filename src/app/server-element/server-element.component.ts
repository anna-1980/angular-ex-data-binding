import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements 
OnInit
// OnChanges, 
// DoCheck, 
// AfterContentInit,
// AfterContentChecked, 
// AfterViewInit, 
// AfterViewChecked,
// OnDestroy
 
 {
  // assigning alias to exported property
  @Input('srvElement') element: { type: string; name: string; content: string };

// to test ngOnChanges gets fired on every change
  @Input() name: string;

// is only available once AfterViewInit has run , so after rendering element
@ViewChild('heading', {static: true}) header: ElementRef;
// @ContentChild you can pass content, through HTML a selector and you can store it in a property, you cannot access value before we reached ContentInit 
@ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    // console.log('Constructor called');
  }

//   ngOnChanges(changes: SimpleChanges) {
//     console.log('ngOnChanges was called');
//     console.log(changes);
//   }

  ngOnInit(): void {
    // console.log('ngOnInit called');
    // console.log('>>>OnInit Header Div: ' + this.header.nativeElement.textContent);
    // console.log('>>> Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

//  ngDoCheck() {
//   console.log('ngDoCheck was called !!!')
//  }

//  ngAfterContentInit() {
//   console.log('<-><-> ngAfterContentInit was called!')
//   console.log('<-><-> Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
//  }

//  ngAfterContentChecked(): void {
//   console.log('ngAfterContentChecked was called!<><><>')
//  }

//  ngAfterViewInit(): void {
//   console.log('AfterViewInit  called!xxxxx')
//   console.log('->>>- AfterViewInit Header Div: ' + this.header.nativeElement.textContent);

//  }

//  ngAfterViewChecked(): void {
//   console.log('AfterViewChecked called! -x-x-x-')
//  }

//  ngOnDestroy(): void {
//   console.log('ngOnDestroy called! 0-0-0-0')
//  }

}
