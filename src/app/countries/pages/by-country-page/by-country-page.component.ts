
import { Component } from '@angular/core';
import { SearchResponse } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: SearchResponse[] = []

  constructor(private countriesservice:CountriesService){}

  searchByCountry(value: string):void{

    this.countriesservice.searchCountry(value)
    .subscribe(countriesResp => this.countries = countriesResp )
  }
}
