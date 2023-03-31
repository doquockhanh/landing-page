import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-feature-destinations',
  templateUrl: './feature-destinations.component.html',
  styleUrls: ['./feature-destinations.component.scss']
})
export class FeatureDestinationsComponent implements OnInit {
  datas: Data[] = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getData.getFeatureDestinations().subscribe(
      next => this.datas = next,
      () => alert("cannot load feature destination"),
      () => {}
    )
  }
}
