import { Component, EventEmitter } from '@angular/core';
import { PaisService } from '../../sevices/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

    termino        : string = ""
    hayError       : boolean = false;
    paises         : Pais[] = []
    paisesSugeridos: Pais[] = []
    
    
    constructor(private paisService: PaisService) { }

    buscar( termino : string ){
        this.hayError = false;
        this.termino = termino;
        this.paisesSugeridos = []
        this.paisService.buscarPais(termino)
            .subscribe( paises =>{

                this.paises = paises;
                
            }, err =>{
                this.paises = [];
                this.hayError = true;

            })
        ;
    }

    sugerencias(termino : string) {
        this.hayError = false;
        this.termino = termino;
        this.paisService.buscarPais(termino)
            .subscribe(
                paises=>this.paisesSugeridos = paises.splice(0,5),
                err => this.paisesSugeridos = []
            )
    }

  
}
