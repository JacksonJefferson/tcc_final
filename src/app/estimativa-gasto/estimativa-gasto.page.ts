import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculadorService } from '../services/calculador.service';


@Component({
  selector: 'app-estimativa-gasto',
  templateUrl: './estimativa-gasto.page.html',
  styleUrls: ['./estimativa-gasto.page.scss'],
})
export class EstimativaGastoPage implements OnInit {
  adubo: {
    ureia: number, valor_ureia: number, suf_amonio: number, valor_suf_amonio: number,
    super_simples: number, valor_super_simples: number, fosfato_triplo:number, valor_fosfato_triplo:number,
    sulfato_potassio:number, valor_sulfato_potassio:number, cloreto_potassio:number, valor_cloreto_potassio:number
  };
  gasto_final:{ gasto_adubo: number, nome_adubo: string, gasto_adubo_02: number, nome_adubo_02: string, gasto_adubo_03: number, nome_adubo_03: string,
    sementes: number, venda: number, gasto_total: number,
    calcario:number, nome_cultura: string, qtd_cultura:number, lucro:number};
  
    constructor(private calculadorService: CalculadorService, private router: Router) {
    this.adubo = this.calculadorService.valor_adubo
    this.gasto_final = this.calculadorService.valor_final

    console.log(this.gasto_final)
    console.log(this.calculadorService.valor_sementes)
    console.log(this.calculadorService.valor_venda)
  }

  ngOnInit() {
  }
  proximo() {
    this.router.navigateByUrl('opcao-cultura');

  }

  home(){
    this.router.navigateByUrl('home');
  }
}
