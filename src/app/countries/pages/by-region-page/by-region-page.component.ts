import { Component } from '@angular/core';
import { SearchResponse } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries:SearchResponse[] = []

  constructor(private countriesservice: CountriesService){}

  searchByRegion(value:string):void {

    this.countriesservice.searchRegion(value)
    .subscribe(countriesResp => this.countries = countriesResp)
  }
}
