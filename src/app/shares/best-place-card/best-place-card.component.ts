import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';

@Component({
  selector: 'app-best-place-card',
  templateUrl: './best-place-card.component.html',
  styleUrls: ['./best-place-card.component.scss']
})
export class BestPlaceCardComponent implements OnInit {
  @Input() name?: string;
  @Input() img?: string;
  @Input() hot?: boolean; 
  @Input() detinations?: number; 

  constructor() { }

  ngOnInit(): void {
  }

}
