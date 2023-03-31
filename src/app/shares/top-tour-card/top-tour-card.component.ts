import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';

@Component({
  selector: 'app-top-tour-card',
  templateUrl: './top-tour-card.component.html',
  styleUrls: ['./top-tour-card.component.scss']
})
export class TopTourCardComponent implements OnInit {
  @Input() name?: string;
  @Input() country?: string;
  @Input() img?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
