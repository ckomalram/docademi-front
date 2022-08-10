import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDocentePageRoutingModule } from './admin-docente-routing.module';

import { AdminDocentePage } from './admin-docente.page';
import { ComponentsModule } from '../../components/components.module';
import {PDFGenerator} from '@ionic-native/pdf-generator/ngx';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDocentePageRoutingModule,ComponentsModule, PipesModule
  ],
  providers: [PDFGenerator],
  declarations: [AdminDocentePage]
})
export class AdminDocentePageModule {}
