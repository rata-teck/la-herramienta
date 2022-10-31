import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>import('./paginas/login/login.module').then(m =>m.LoginPageModule)
  },
  {
    path:'registro',
    loadChildren:()=>import('./paginas/registro/registro.module').then(m =>m.RegistroPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
