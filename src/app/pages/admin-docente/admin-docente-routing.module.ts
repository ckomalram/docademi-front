import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDocentePage } from './admin-docente.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDocentePage
  },
  {
    path: 'actividades',
    loadChildren: () => import('./actividades/actividades.module').then( m => m.ActividadesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDocentePageRoutingModule {}
