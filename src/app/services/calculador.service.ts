import { Injectable } from '@angular/core';

//import { timingSafeEqual } from 'crypto';



@Injectable({
  providedIn: 'root'
})
export class CalculadorService {
  cultura:string;
  nc: number;
  adubo: { fosforo: number, potassio: number, nitrogenio: number };
  dados: { argila: number, aluminio: number, ph: number, magnesio: number, calcio: number, t: number, T: number, potassio: number, fosforo: number };
  valor_final: { valor_nitro: number, nome_nitro: string, valor_fosf: number, nome_fosf: string, valor_pota: number, nome_pota: string,
    sementes: number, venda: number, gasto_total: number,
    calcario:number, nome_cultura: string, qtd_cultura:number, lucro:number};
  
    
  
  valor_venda: number;
  valor_sementes: number;
  valor_calcario: number;
  qtd_cultura:number;
  valor_nitro: number;
  valor_fosf: number;
  valor_pota: number;
  valor_calc: number;
  nome_nitro: string;
  nome_fosf: string;
  nome_pota: string;

  ;

  constructor() {
    this.adubo = {
      fosforo: null,
      potassio: 0,
      nitrogenio: 30

    };
    this.dados = {
      argila: null,
      aluminio: null,
      ph: null,
      magnesio: null,
      calcio: null,
      t: null,
      T: null,
      potassio: null,
      fosforo: null
    };
    this.valor_sementes = null;
    this.valor_venda = null;
    this.valor_nitro = null;
    this.valor_fosf = null;
    this.valor_pota =null;
    this.valor_calc = null;
   
    this.valor_final = { 
      valor_nitro: null,
      nome_nitro: "",
      valor_fosf: null,
      nome_fosf: "",
      valor_pota: null,
      nome_pota: "",
      sementes: null,
      venda: null,
      gasto_total: null,
      calcario:null,
      nome_cultura: "",
      qtd_cultura:null,
      lucro:null,

    }
    this.cultura = "";
  }
  config(argila: number, aluminio: number, ph: number, magnesio: number, calcio: number, t: number, T: number, potassio: number, fosforo: number) {
    this.dados.argila = argila;
    this.dados.aluminio = aluminio;
    this.dados.ph = ph;
    this.dados.magnesio = magnesio;
    this.dados.calcio = calcio;
    this.dados.t = t;
    this.dados.T = T;
    this.dados.potassio = potassio;
    this.dados.fosforo = fosforo;
  }

  calcular_correcao() {
    console.log(this.dados)
    let f = 0

    if (this.dados.ph >= 6.5) {
      this.nc = 0
    }
    else {
      if (this.dados.argila < 15) {
        f = 1.5;
      };
      if (this.dados.argila >= 15 && this.dados.argila <= 35) {
        f = 2;
      };
      if (this.dados.argila > 35) {
        f = 2.5;
      };

      if (this.dados.aluminio == 0) {
        this.nc = f * ((this.dados.calcio + this.dados.magnesio) - 2);
      }
      else {
        this.nc = f * this.dados.aluminio;

      }

    }

    return this.nc;
  }

  calcular_adubacao_milho() {

    if (this.dados.fosforo < 11) {
      this.adubo.fosforo = 30
    };
    if (this.dados.fosforo >= 11 && this.dados.fosforo <= 30) {
      this.adubo.fosforo = 20
    };
    if (this.dados.fosforo > 30) {
      this.adubo.fosforo = 10
    };
    if (this.dados.potassio < 0.12) {
      this.adubo.potassio = 30
    };
    if (this.dados.potassio >= 0.12 && this.dados.potassio <= 0.38) {
      this.adubo.potassio = 20
    };


    return this.adubo

  }
  calcular_adubacao_feijao() {
    if (this.dados.fosforo < 11) {
      this.adubo.fosforo = 60
    };
    if (this.dados.fosforo >= 11 && this.dados.fosforo <= 20) {
      this.adubo.fosforo = 40
    };
    if (this.dados.fosforo > 20) {
      this.adubo.fosforo = 20
    };
    if (this.dados.potassio < 0.12) {
      this.adubo.potassio = 45
    };
    if (this.dados.potassio >= 0.12 && this.dados.potassio <= 0.23) {
      this.adubo.potassio = 30
    };
    if (this.dados.potassio > 0.23) {
      this.adubo.potassio = 15
    };
    return this.adubo
  }
  calcular_adubacao_soja() {
    if (this.dados.fosforo < 11) {
      this.adubo.fosforo = 80
    };
    if (this.dados.fosforo >= 11 && this.dados.fosforo <= 20) {
      this.adubo.fosforo = 60
    };
    if (this.dados.fosforo > 20) {
      this.adubo.fosforo = 40
    };
    if (this.dados.potassio < 0.12) {
      this.adubo.potassio = 60
    };
    if (this.dados.potassio >= 0.12 && this.dados.potassio <= 0.23) {
      this.adubo.potassio = 40
    };
    if (this.dados.potassio > 0.23) {
      this.adubo.potassio = 20
    };
    return this.adubo
  }


  

  cultura_escolhida(cultura_enviada){
    this.cultura = cultura_enviada
  }
  venda_sementes(valor, valor_venda) {
    if (this.cultura == "milho"){
      this.valor_sementes = valor*25
      this.valor_venda = valor_venda*3500
      this.qtd_cultura = 3500
    };
    if (this.cultura == "feijao"){
      this.valor_sementes = valor*30
      this.valor_venda = valor_venda*1600
      this.qtd_cultura = 1600
    };
    if (this.cultura == "soja"){
      this.valor_sementes = valor*30
      this.valor_venda = valor_venda*3000
      this.qtd_cultura = 3000
    };
    this.valor_nitro = this.valor_nitro
    this.valor_fosf = this.valor_fosf
    this.valor_pota= this.valor_pota
    this.valor_calc= this.valor_calc
  }


  gasto_final() {
    this.valor_final.valor_nitro = this.valor_nitro
    this.valor_final.nome_nitro = this.nome_nitro
    this.valor_final.nome_fosf = this.nome_fosf
    this.valor_final.nome_pota = this.nome_pota
    this.valor_final.sementes = this.valor_sementes
    this.valor_final.venda = this.valor_venda
    this.valor_final.nome_cultura = this.cultura
    this.valor_final.qtd_cultura = this.qtd_cultura
    this.valor_final.calcario = this.nc*this.valor_calcario
    
    this.valor_final.gasto_total = parseFloat((this.valor_final.valor_nitro + this.valor_final.valor_fosf +this.valor_final.valor_pota + this.valor_sementes + this.valor_final.calcario).toFixed(2))
    this.valor_final.lucro = this.valor_final.venda - this.valor_final.gasto_total
    return this.valor_final
  }
}


