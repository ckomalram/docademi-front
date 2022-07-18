import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { DetallesActividadComponent } from './detalles-actividad/detalles-actividad.component';
import { AgregarActividadComponent } from './agregar-actividad/agregar-actividad.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AvatarSelectorComponent, DetallesActividadComponent, AgregarActividadComponent],
  imports: [
    CommonModule,FormsModule,IonicModule
  ],exports: [AvatarSelectorComponent,DetallesActividadComponent, AgregarActividadComponent]
})
export class ComponentsModule { }
