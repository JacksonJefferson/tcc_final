import { Component, OnInit } from '@angular/core';
import { CalculadorService } from '../services/calculador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugestao-adubo',
  templateUrl: './sugestao-adubo.page.html',
  styleUrls: ['./sugestao-adubo.page.scss'],
})
export class SugestaoAduboPage implements OnInit {
  total_adubo: { fosforo: number, potassio: number, nitrogenio: number };
  plantio: { fosforo: number, potassio: number, nitrogenio: number };
  cobertura: { fosforo: number, potassio: number, nitrogenio: number };
  constructor(private calculadorService: CalculadorService, private router: Router) {
    let cultura =this.calculadorService.cultura;
    this.plantio = this.calculadorService.adubo;
    this.cobertura = {
      fosforo: 0,
      potassio: 0,
      nitrogenio: 40,
    };
    if(cultura == "soja"){
      this.cobertura.nitrogenio = 0
    };
    this.total_adubo = {
      fosforo: this.plantio.fosforo + this.cobertura.fosforo,
      potassio: this.plantio.potassio + this.cobertura.potassio,
      nitrogenio: this.plantio.nitrogenio + this.cobertura.nitrogenio,
    };
  }

  ngOnInit() {
  }
  proximo() {
  //  this.calculadorService.sugestao_adubo(this.total_adubo.nitrogenio, this.total_adubo.fosforo, this.total_adubo.potassio);
    this.router.navigateByUrl('adubacao');
    
  }
}