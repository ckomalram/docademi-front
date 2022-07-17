import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';



@NgModule({
  declarations: [AvatarSelectorComponent],
  imports: [
    CommonModule
  ],exports: [AvatarSelectorComponent]
})
export class ComponentsModule { }
