import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchResponse, Name } from '../interfaces/countries.interface';
import { catchError, Observable, of, map } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiURL:string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }


    searchById(id:string):Observable<SearchResponse | null>{

        return this.http.get<SearchResponse[]>(`${this.apiURL}/alpha/${id}`)
        .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError(error => of(null))
        )   
    }

        //revisar observables
        //aqui lo hizo simple porque espero una respuesta de tipo array, mucho más fácil de lo que yo hice. aceptar la respuestas como vienen y ahi modificarlas
    searchCapital(value:string):Observable<SearchResponse[]>{

    return this.http.get<SearchResponse[]>(`${this.apiURL}/capital/${value}`)
    .pipe(
        catchError(error => of([]))
    )        
    }

    searchCountry(value:string):Observable<SearchResponse[]>{

        return this.http.get<SearchResponse[]>(`${this.apiURL}/name/${value}`)
        .pipe(
            catchError(error => of([]))
        )        
        }

    searchRegion(value:string):Observable<SearchResponse[]>{

        return this.http.get<SearchResponse[]>(`${this.apiURL}/region/${value}`)
        .pipe(
            catchError(error => of([]))
            )        
            }    

}

