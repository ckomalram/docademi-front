import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterby'
})
export class FilterbyPipe implements PipeTransform {

  transform(actividades: any, valorBuscado: string): any[] {
    if (actividades) {
      // console.log(actividades);
      // console.log(valorBuscado);
      return  actividades.filter(item => item.nombre.toLowerCase().includes(valorBuscado.toLowerCase())
      || item.asignatura.toLowerCase().includes(valorBuscado.toLowerCase())
      || item.grupo.toLowerCase().includes(valorBuscado.toLowerCase())
      );
    }
  }

}
