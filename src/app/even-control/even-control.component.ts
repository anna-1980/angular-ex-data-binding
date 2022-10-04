import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-control',
  templateUrl: './even-control.component.html',
  styleUrls: ['./even-control.component.css']
})
export class EvenControlComponent implements OnInit {

  @Input() passedToOddCopmFromAppComp: number;

  constructor() { }

  ngOnInit(): void {
  }

}
