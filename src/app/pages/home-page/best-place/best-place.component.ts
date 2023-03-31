import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-best-place',
  templateUrl: './best-place.component.html',
  styleUrls: ['./best-place.component.scss']
})
export class BestPlaceComponent implements OnInit {
  datas: Data[] = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getData.getBestPlaces().subscribe(
      next => this.datas = next,
      () => alert("cannot load best place"),
      () => {}
    )
  }
}
