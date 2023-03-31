import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';

@Component({
  selector: 'app-trending-city-card',
  templateUrl: './trending-city-card.component.html',
  styleUrls: ['./trending-city-card.component.scss']
})
export class TrendingCityCardComponent implements OnInit {
  @Input() name?: string;
  @Input() img?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
