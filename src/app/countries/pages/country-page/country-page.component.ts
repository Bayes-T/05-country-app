import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { SearchResponse } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?:SearchResponse;

  //On init para verificar algo en el html que no lo puedo hacer en el constructor, ya que en la etapa del constructor ni se ha creado el html. En este caso para verificar si existe

  constructor(
    private countriesservice: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap ( ({id})  => this.countriesservice.searchById(id))
    )
      //El suscribe está suscrito al resultado del pipe anterior
    .subscribe( country => 
    {
      if (!country) return this.router.navigateByUrl('');
      return  this.country = country
    })
}
  


}

//revisar como era antes, hice desesctructuring del params pero no se como
// .subscribe( (params) => 
// console.log({params : params['id']}))
// }
