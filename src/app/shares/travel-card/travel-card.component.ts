import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent implements OnInit {
  @Input() name?: string;
  @Input() img?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
