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

  constructor(private calculadorService: CalculadorService, private router: Router) { 
 
  }

  ngOnInit() {

  }
  proximo(){
    
    this.calculadorService.venda_sementes(this.valor, this.valor_venda);
    this.calculadorService.gasto_final();
    this.router.navigateByUrl('estimativa-gasto');
    }
}
