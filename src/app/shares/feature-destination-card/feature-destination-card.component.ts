import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-destination-card',
  templateUrl: './feature-destination-card.component.html',
  styleUrls: ['./feature-destination-card.component.scss']
})
export class FeatureDestinationCardComponent implements OnInit {
  @Input() name?: string;
  @Input() img?: string;
  @Input() star?: number; 
  @Input() activities?: number; 
  constructor() { }

  ngOnInit(): void {
  }

}
