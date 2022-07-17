import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-docente',
  templateUrl: './admin-docente.page.html',
  styleUrls: ['./admin-docente.page.scss'],
})
export class AdminDocentePage implements OnInit {

  // asignaturas: any[] = [
  //   {
  //     id: 1,
  //     nombre: 'Español 1°',
  //     descripcion: 'Español primer grado',
  //     estado: true
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Español 2°',
  //     descripcion: 'Español segundo grado',
  //     estado: true
  //   }
  // ];
  actividades: any[]=[
    {
      id: 1,
      nombre: 'Silaba Tonica',
      descripcion: 'Comenzaremos tema de silaba tonia y trabajaremos en el libro de texto',
      asignatura: 'Español',
      avatar: 'espanol.jpg',
      iddocente: 1,
      docente: 'Carlyle Komalram',
      grupo: '1° A',
      fecha: '18/07/2022',
      observaciones: '' ,//[{tipo: 'sumativa', estado: false} , {tipo: 'formativa', estado: false}],
      enlaces: ''
    },
    {
      id: 2,
      nombre: 'Healthy and Unhealthy test',
      descripcion: 'Se peude estudiar la pagina 19-21-22-26-27-28 del libro Top Smart WorkBook',
      asignatura: 'Ciencias Naturales',
      avatar: 'ciencias.jpg',
      iddocente: 2,
      docente: 'Francisco Marchena',
      grupo: '1° A',
      fecha: '17/07/2022',
      observaciones: 'sumativa', //[{tipo: 'sumativa', estado: false} , {tipo: 'formativa', estado: false}],
      enlaces: 'www.google.com'
    }
  ];

  // salones: any[] = [
  //   {
  //     id: 1,
  //     iddocente: 1,
  //     docente: 'Carlyle Komalram',
  //     asignatura: this.asignaturas[0],
  //     grupo: '1° A',
  //     descripcion: 'primero A',
  //     clases: []
  //   },
  //   {
  //     id: 2,
  //     iddocente: 1,
  //     docente: 'Carlyle Komalram',
  //     asignatura: this.asignaturas[0],
  //     grupo: '1° B',
  //     descripcion: 'primero B',
  //     clases: []
  //   },
  //   {
  //     id: 3,
  //     iddocente: 1,
  //     docente: 'Carlyle Komalram',
  //     asignatura: this.asignaturas[1],
  //     grupo: '2° A',
  //     descripcion: 'segundo A',
  //     clases: []
  //   },
  //   {
  //     id: 4,
  //     iddocente: 1,
  //     docente: 'Carlyle Komalram',
  //     asignatura: this.asignaturas[1],
  //     grupo: '2° B',
  //     descripcion: 'segundo B',
  //     clases: []
  //   }
  // ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  logout(){
    console.log('Saliendo de la aplicación');
    // debe ser llamado por un output event emmiter.
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

  editarActividad(actividad: any){
    console.log('Editar Actividad', actividad);
  }

  borrarActividad(actividad: any){
    console.log('Borrar Actividad', actividad);
  }

  verMas(actividad: any){
    console.log('verMas Actividad', actividad);
  }



}
