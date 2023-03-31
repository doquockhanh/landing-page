import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/entities/data';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-explore-world',
  templateUrl: './explore-world.component.html',
  styleUrls: ['./explore-world.component.scss']
})
export class ExploreWorldComponent implements OnInit {
  datas: Data[] = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getData.getExploreWorld().subscribe(
      next => this.datas = next,
      () => alert("cannot load explore the world"),
      () => {}
    )
  }
}
