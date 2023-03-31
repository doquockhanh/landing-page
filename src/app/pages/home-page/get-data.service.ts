import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/entities/data';

const api1 = "https://622eee345c86fd315eb8561f.mockapi.io/api/v1/"; //place, feature, topTour
const api2 = "https://624a999dfd7e30c51c0f50d9.mockapi.io/"; // exploreWorld, trendCity, travel

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpClient: HttpClient) { }

  getBestPlaces(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(api1 + "place");
  }

  getFeatureDestinations(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(api1 + "featureDestination");
  }

  getTopTours(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(api1 + "topTour");
  }

  getExploreWorld(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(api2 + "exploreWorld");
  }

  getTrendingCities(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(api2 + "trendingCity")
  }

  getTravels(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(api2 + "travel")
  }
}
