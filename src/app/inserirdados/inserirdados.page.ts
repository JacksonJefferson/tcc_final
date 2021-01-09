import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculadorService } from '../services/calculador.service';



@Component({
  selector: 'app-inserirdados',
  templateUrl: './inserirdados.page.html',
  styleUrls: ['./inserirdados.page.scss'],
})
export class InserirdadosPage implements OnInit {

  dados: { argila: number, aluminio: number, ph: number, magnesio: number, calcio: number, t: number, T: number, potassio: number, fosforo: number };


  constructor(private router: Router, private calculadorService: CalculadorService) {
    this.dados = {
      ph: null,
      aluminio: null,
      argila: null,
      calcio: null,
      magnesio: null,
      t: null,
      T: null,
      potassio: null,
      fosforo: null,
    }


  }


  ngOnInit() {
  }

  inserir() {
    this.calculadorService.config(this.dados.argila, this.dados.aluminio, this.dados.ph,
      this.dados.magnesio, this.dados.calcio, this.dados.t, this.dados.T, this.dados.potassio, this.dados.fosforo);
    let soma = this.calculadorService.calcular_correcao();
    this.router.navigateByUrl('correcaoph');

  }
}
