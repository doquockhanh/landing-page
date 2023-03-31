import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-world-card',
  templateUrl: './explore-world-card.component.html',
  styleUrls: ['./explore-world-card.component.scss']
})
export class ExploreWorldCardComponent implements OnInit {
  @Input() img?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
