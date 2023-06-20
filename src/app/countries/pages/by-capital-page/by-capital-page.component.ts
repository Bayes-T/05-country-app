import { Component, EventEmitter, Output } from '@angular/core';
import { SearchResponse } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: SearchResponse[] = []

  constructor(private countriesservice: CountriesService){}

  
  searchByCapital(value:string ):void{
    //aca estoy haciendo una peticion desde el componente y no desde el service como antes
    this.countriesservice.searchCapital(value)
    .subscribe(countries =>
      this.countries = countries)
  }

}



