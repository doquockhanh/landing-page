import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestPlaceCardComponent } from './best-place-card/best-place-card.component';
import { ExploreWorldCardComponent } from './explore-world-card/explore-world-card.component';
import { FeatureDestinationCardComponent } from './feature-destination-card/feature-destination-card.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { TopTourCardComponent } from './top-tour-card/top-tour-card.component';
import { TravelCardComponent } from './travel-card/travel-card.component';
import { TrendingCityCardComponent } from './trending-city-card/trending-city-card.component';



@NgModule({
  declarations: [
    BestPlaceCardComponent,
    FeatureDestinationCardComponent,
    TopTourCardComponent,
    ExploreWorldCardComponent,
    TrendingCityCardComponent,
    TravelCardComponent,
    OfferCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BestPlaceCardComponent,
    FeatureDestinationCardComponent,
    TopTourCardComponent,
    ExploreWorldCardComponent,
    TrendingCityCardComponent,
    TravelCardComponent,
    OfferCardComponent,
  ],
})
export class SharedModule { }
