import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showPassenger: boolean = false;
  showLocationModal: boolean = false;
  showDateInModal: boolean = false;
  showDateOutModal: boolean = false;
  data: {location: string; passenger: string} = {location: "", passenger: ""};

  passenger: {adult: number; children: number; infant: number} = {adult: 0, children: 0, infant: 0};

  constructor() { }

  ngOnInit(): void {
  }

  togglePassenger() {
    this.showPassenger = !this.showPassenger;
  }

  submitPassengerModal() {
    let result = "";
    if(this.passenger.adult > 0) {
      result += this.passenger.adult + " adult. "
    }
    if(this.passenger.children > 0) {
      result += this.passenger.children + " children. "
    }
    if(this.passenger.infant > 0) {
      result += this.passenger.infant + " infant. "
    }
    this.data.passenger = result;
    this.togglePassenger();
  }

  toggleLocationModal() {
    this.showLocationModal = !this.showLocationModal;
  }

  changeLocationData(e: any) {
    this.data.location = e.target.value;
  }

  changeAdult(count: number) {
    if(this.passenger.adult + count >= 0)
    this.passenger.adult += count;
  }

  changeChildren(count: number) {
    if(this.passenger.children + count >= 0)
    this.passenger.children += count;
  }

  changeInfant(count: number) {
    if(this.passenger.infant + count >= 0)
    this.passenger.infant += count;
  }
}
