import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private api_url: string = 'https://restcountries.eu/rest/v2';

    get httpParams(){
        return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')
    }

    constructor(private http: HttpClient) { }

    buscarPais( termino: string): Observable<Pais[]> {

        const url: string = `${this.api_url}/name/${termino}` 
        return this.http.get<Pais[]>(url, { params: this.httpParams })
    }

    buscarCapital( termino: string): Observable<Pais[]> {

        const url: string = `${this.api_url}/capital/${termino}` 
        return this.http.get<Pais[]>(url, { params: this.httpParams })
    }

    buscarPaisXCodigo( termino: string): Observable<Pais> {

        const url: string = `${this.api_url}/alpha/${termino}` 
        return this.http.get<Pais>(url)
    }

    buscarRegion( termino: string): Observable<Pais[]> {   
        
        const url: string = `${this.api_url}/region/${termino}` 
        return this.http.get<Pais[]>( url, { params: this.httpParams } )
                                
    }






}
