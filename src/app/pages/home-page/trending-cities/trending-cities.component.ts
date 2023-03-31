import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-trending-cities',
  templateUrl: './trending-cities.component.html',
  styleUrls: ['./trending-cities.component.scss']
})
export class TrendingCitiesComponent implements OnInit {
  datas: Data[] = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getData.getTrendingCities().subscribe(
      next => this.datas = next,
      () => alert("cannot load trending cities"),
      () => {}
    )
  }

}
