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
  valor_adubo: {
    ureia: number, valor_ureia: number, suf_amonio: number, valor_suf_amonio: number,
    super_simples: number, valor_super_simples: number, fosfato_triplo: number, valor_fosfato_triplo: number,
    sulfato_potassio: number, valor_sulfato_potassio: number, cloreto_potassio: number, valor_cloreto_potassio: number
  };
  valor_final: { gasto_adubo: number, nome_adubo: string, gasto_adubo_02: number, nome_adubo_02: string, gasto_adubo_03: number, nome_adubo_03: string,
    sementes: number, venda: number, gasto_total: number,
    calcario:number, nome_cultura: string, qtd_cultura:number, lucro:number};
  
  valor_venda: number;
  valor_sementes: number;
  qtd_cultura:number;

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
    this.valor_adubo = {
      ureia: null,
      valor_ureia: null,
      suf_amonio: null,
      valor_suf_amonio: null,
      super_simples: null,
      valor_super_simples: null,
      fosfato_triplo: null,
      valor_fosfato_triplo: null,
      sulfato_potassio: null,
      valor_sulfato_potassio: null,
      cloreto_potassio: null,
      valor_cloreto_potassio: null,
    }
    this.valor_sementes = null;
    this.valor_venda = null;
   
    this.valor_final = { 
      gasto_adubo: null,
      nome_adubo: "",
      gasto_adubo_02: null,
      nome_adubo_02: "",
      gasto_adubo_03: null,
      nome_adubo_03: "",
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
  sugestao_adubo(nitrogenio, fosforo, potassio) {
    this.valor_adubo.ureia = parseFloat((nitrogenio / 0.45).toFixed(2)),
      this.valor_adubo.valor_ureia = parseFloat((this.valor_adubo.ureia * 3.06).toFixed(2)),
      this.valor_adubo.suf_amonio = parseFloat((nitrogenio / 0.21).toFixed(2)),
      this.valor_adubo.valor_suf_amonio = parseFloat((this.valor_adubo.ureia * 2.58).toFixed(2)),
      this.valor_adubo.super_simples = parseFloat((fosforo / 0.18).toFixed(2)),
      this.valor_adubo.valor_super_simples = parseFloat((this.valor_adubo.super_simples * 2.4).toFixed(2)),
      this.valor_adubo.fosfato_triplo = parseFloat((fosforo / 0.42).toFixed(2)),
      this.valor_adubo.valor_fosfato_triplo = parseFloat((this.valor_adubo.fosfato_triplo * 18.2).toFixed(2)),
      this.valor_adubo.sulfato_potassio = parseFloat((potassio / 0.52).toFixed(2)),
      this.valor_adubo.valor_sulfato_potassio = parseFloat((this.valor_adubo.sulfato_potassio * 12.64).toFixed(2)),
      this.valor_adubo.cloreto_potassio = parseFloat((potassio / 0.60).toFixed(2)),
      this.valor_adubo.valor_cloreto_potassio = parseFloat((this.valor_adubo.cloreto_potassio * 10.66).toFixed(2))
    return this.valor_adubo

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
  }
  gasto_final() {
    if (this.valor_adubo.valor_ureia < this.valor_adubo.valor_suf_amonio) {
      this.valor_final.gasto_adubo = this.valor_adubo.valor_ureia
      this.valor_final.nome_adubo = "Uréia"
    }
    if (this.valor_adubo.valor_ureia >= this.valor_adubo.valor_suf_amonio) {
      this.valor_final.gasto_adubo = this.valor_adubo.valor_suf_amonio
      this.valor_final.nome_adubo = "Sulfato de Amônio"
    }
    if (this.valor_adubo.valor_super_simples < this.valor_adubo.valor_fosfato_triplo) {
      this.valor_final.gasto_adubo_02 = this.valor_adubo.valor_super_simples
      this.valor_final.nome_adubo_02 = "Super Simples"
    }
    if (this.valor_adubo.valor_super_simples >= this.valor_adubo.valor_fosfato_triplo) {
      this.valor_final.gasto_adubo_02 = this.valor_adubo.valor_fosfato_triplo
      this.valor_final.nome_adubo_02 = "Fosfato triplo"
    }
    if (this.valor_adubo.valor_sulfato_potassio < this.valor_adubo.valor_cloreto_potassio) {
      this.valor_final.gasto_adubo_03 = this.valor_adubo.valor_sulfato_potassio
      this.valor_final.nome_adubo_03 = "Sulfato de Potássio"
    }
    if (this.valor_adubo.valor_sulfato_potassio >= this.valor_adubo.valor_cloreto_potassio) {
      this.valor_final.gasto_adubo_03 = this.valor_adubo.valor_cloreto_potassio
      this.valor_final.nome_adubo_03 = "Cloreto de Potássio"
    }
    
    this.valor_final.sementes = this.valor_sementes
    this.valor_final.venda = this.valor_venda
    this.valor_final.nome_cultura = this.cultura
    this.valor_final.qtd_cultura = this.qtd_cultura
    this.valor_final.calcario = (this.nc*1000)*2
    
    this.valor_final.gasto_total = parseFloat((this.valor_final.gasto_adubo + this.valor_final.gasto_adubo_02 + this.valor_final.gasto_adubo_03 + this.valor_sementes + this.valor_final.calcario).toFixed(2))
    this.valor_final.lucro = this.valor_final.venda - this.valor_final.gasto_total
    return this.valor_final
  }

}


