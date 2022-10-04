import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-control',
  templateUrl: './odd-control.component.html',
  styleUrls: ['./odd-control.component.css']
})
export class OddControlComponent implements OnInit {
// value is passed in from outside 
 @Input() passedToOddCopmFromAppComp: number;

  constructor() { }

  ngOnInit(): void {
  }

}
