import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutentificadorPage } from './autentificador.page';

const routes: Routes = [
  {
    path: '',
    component: AutentificadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutentificadorPageRoutingModule {}
