import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./paginas/autentificador/autentificador.module').then( m => m.AutentificadorPageModule)
  },
  {
    path: 'cli',
    loadChildren: () => import('./paginas/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'adm',
    loadChildren: () => import('./paginas/admin/admin.module').then( m => m.AdminPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
