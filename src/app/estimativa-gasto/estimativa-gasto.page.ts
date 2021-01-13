import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculadorService } from '../services/calculador.service';


@Component({
  selector: 'app-estimativa-gasto',
  templateUrl: './estimativa-gasto.page.html',
  styleUrls: ['./estimativa-gasto.page.scss'],
})
export class EstimativaGastoPage implements OnInit {
  gasto_final:{ valor_nitro: number, nome_nitro: string, valor_fosf: number, nome_fosf: string, valor_pota: number,nome_pota: string,
    sementes: number, venda: number, gasto_total: number,
    calcario:number, nome_cultura: string, qtd_cultura:number, lucro:number};
  
    constructor(private calculadorService: CalculadorService, private router: Router) {

    this.gasto_final = this.calculadorService.valor_final

    console.log(this.gasto_final)
    console.log(this.calculadorService.valor_sementes)
    console.log(this.calculadorService.valor_venda)
    console.log(this.calculadorService.valor_nitro)
    console.log(this.calculadorService.valor_fosf)
    console.log(this.calculadorService.valor_pota)
    console.log(this.calculadorService.valor_calc)

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
