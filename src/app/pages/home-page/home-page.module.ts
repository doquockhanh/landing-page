import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestPlaceComponent } from './best-place/best-place.component';
import { ExploreWorldComponent } from './explore-world/explore-world.component';
import { FeatureDestinationsComponent } from './feature-destinations/feature-destinations.component';
import { TopTourComponent } from './top-tour/top-tour.component';
import { TravelComponent } from './travel/travel.component';
import { TrendingCitiesComponent } from './trending-cities/trending-cities.component';
import { SharedModule } from 'src/app/shares/shared.module';
import { HomePageComponent } from './home-page.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BestPlaceComponent,
    FeatureDestinationsComponent,
    TopTourComponent,
    ExploreWorldComponent,
    TrendingCitiesComponent,
    TravelComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})

export class HomePageModule { }
