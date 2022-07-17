import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDocentePageRoutingModule } from './admin-docente-routing.module';

import { AdminDocentePage } from './admin-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDocentePageRoutingModule
  ],
  declarations: [AdminDocentePage]
})
export class AdminDocentePageModule {}
