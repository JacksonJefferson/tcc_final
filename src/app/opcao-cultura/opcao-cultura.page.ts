import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculadorService } from '../services/calculador.service';

@Component({
  selector: 'app-opcao-cultura',
  templateUrl: './opcao-cultura.page.html',
  styleUrls: ['./opcao-cultura.page.scss'],
})
export class OpcaoCulturaPage implements OnInit {

  constructor(private calculadorService: CalculadorService,  private router: Router) { }

  ngOnInit() {
  }
  proximo(){
    this.router.navigateByUrl('home');
    }
}
