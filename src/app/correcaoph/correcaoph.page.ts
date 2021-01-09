import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculadorService } from '../services/calculador.service';


@Component({
  selector: 'app-correcaoph',
  templateUrl: './correcaoph.page.html',
  styleUrls: ['./correcaoph.page.scss'],
})
export class CorrecaophPage implements OnInit {
  
  nc:number
  cultura: string;
  constructor(private calculadorService: CalculadorService,  private router: Router) {
    this.nc = this.calculadorService.nc;    
  }

  ngOnInit() {
    
  }
 
  escolha_cultura(){
    this.calculadorService.cultura_escolhida(this.cultura)
    if (this.cultura == "milho") {
      this.calculadorService.calcular_adubacao_milho();
    }
    if (this.cultura == "feijao") {
      this.calculadorService.calcular_adubacao_feijao();
    }
    if (this.cultura == "soja"){
      this.calculadorService.calcular_adubacao_soja();
    }
    this.router.navigateByUrl('sugestao-adubo');
  }
}
