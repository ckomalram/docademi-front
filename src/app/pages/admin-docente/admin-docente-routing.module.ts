import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDocentePage } from './admin-docente.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDocentePageRoutingModule {}
