import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { PaisService } from '../../sevices/pais.service';
import { Pais } from '../../interfaces/pais.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-ver-pais',
    templateUrl: './ver-pais.component.html',
    styles: [],
})
export class VerPaisComponent implements OnInit {
    pais!: Pais;

    constructor(
        private activatedRoute: ActivatedRoute,
        private paisService: PaisService
    ) {}

    ngOnInit(): void {
        // this.activatedRoute.params.subscribe(({ id }) => {
        //     this.paisService.buscarPaisXCodigo(id).subscribe((pais: Pais) => {
        //         this.pais = pais;
        //         console.log(this.pais);
        //     });
        // });

        this.activatedRoute.params
            .pipe(
                switchMap( param  => this.paisService.buscarPaisXCodigo(param.id)),
                tap(console.log)
            )
            .subscribe( pais =>  this.pais = pais)
        ;


    }
}
