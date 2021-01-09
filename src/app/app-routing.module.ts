import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  {
    path: 'estimativa-gasto',
    loadChildren: () => import('./estimativa-gasto/estimativa-gasto.module').then( m => m.EstimativaGastoPageModule)
  },
  {
    path: 'opcao-cultura',
    loadChildren: () => import('./opcao-cultura/opcao-cultura.module').then( m => m.OpcaoCulturaPageModule)
  },
  {
    path: 'inserirdados',
    loadChildren: () => import('./inserirdados/inserirdados.module').then( m => m.InserirdadosPageModule)
  },
  {
    path: 'adubacao',
    loadChildren: () => import('./adubacao/adubacao.module').then( m => m.AdubacaoPageModule)
  },
  {
    path: 'correcaoph',
    loadChildren: () => import('./correcaoph/correcaoph.module').then( m => m.CorrecaophPageModule)
  },
  {
    path: 'correcaoph',
    loadChildren: () => import('./correcaoph/correcaoph.module').then( m => m.CorrecaophPageModule)
  },
  {
    path: 'sugestao-adubo',
    loadChildren: () => import('./sugestao-adubo/sugestao-adubo.module').then( m => m.SugestaoAduboPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
