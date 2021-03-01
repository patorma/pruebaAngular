import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'inicio', loadChildren: () =>
    import('./components/inicio/inicio.module').then(m => m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
