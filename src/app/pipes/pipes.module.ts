import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterbyPipe } from './filterby.pipe';



@NgModule({
  declarations: [
    FilterbyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [FilterbyPipe]
})
export class PipesModule { }
