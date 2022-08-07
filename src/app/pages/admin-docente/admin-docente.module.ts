import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDocentePageRoutingModule } from './admin-docente-routing.module';

import { AdminDocentePage } from './admin-docente.page';
import { ComponentsModule } from '../../components/components.module';
import {PDFGenerator} from '@ionic-native/pdf-generator/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDocentePageRoutingModule,ComponentsModule
  ],
  providers: [PDFGenerator],
  declarations: [AdminDocentePage]
})
export class AdminDocentePageModule {}
