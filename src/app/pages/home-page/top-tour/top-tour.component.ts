import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-top-tour',
  templateUrl: './top-tour.component.html',
  styleUrls: ['./top-tour.component.scss']
})
export class TopTourComponent implements OnInit {
  datas: Data[] = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getData.getTopTours().subscribe(
      next => this.datas = next,
      () => alert("cannot load top tour"),
      () => {}
    )
  }
}
