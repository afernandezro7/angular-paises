import { Component } from '@angular/core';
import { PaisService } from '../../sevices/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html',
    styles: [
    ]
})
export class PorRegionComponent {

    regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
    regionActiva: string = ""
    paises: Pais[]= [];

    constructor(private paisService:PaisService) { }

    activarRegion( region: string) {
        if(region !== this.regionActiva){
            this.regionActiva = region;
            this.paises = []
            this.paisService.buscarRegion(region)
                .subscribe(paises=> this.paises = paises)
            ;
        }
    }
 

}
