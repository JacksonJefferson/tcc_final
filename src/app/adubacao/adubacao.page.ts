import { Component, OnInit } from '@angular/core';
import { CalculadorService } from '../services/calculador.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adubacao',
  templateUrl: './adubacao.page.html',
  styleUrls: ['./adubacao.page.scss'],
})
export class AdubacaoPage implements OnInit {
  valor: number;
  valor_venda:number;
  valor_nitro: number;
  valor_fosf: number;
  valor_pota: number;
  valor_calc: number;

  constructor(private calculadorService: CalculadorService, private router: Router) { 
 
  }

  ngOnInit() {

  }
  proximo(){
    
    this.calculadorService.venda_sementes(this.valor, this.valor_venda);
    this.calculadorService.valor_nutrientes(this.valor_nitro, this.valor_fosf, this.valor_pota, this.valor_calc);
    this.calculadorService.gasto_final();
    this.router.navigateByUrl('estimativa-gasto');
    }
}
