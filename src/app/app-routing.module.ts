import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' }, // Redireciona para a página cadastro
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) } // Se a página home ainda estiver presente
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
