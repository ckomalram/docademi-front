import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { DetallesActividadComponent } from 'src/app/components/detalles-actividad/detalles-actividad.component';
import { AgregarActividadComponent } from '../../components/agregar-actividad/agregar-actividad.component';

@Component({
  selector: 'app-admin-docente',
  templateUrl: './admin-docente.page.html',
  styleUrls: ['./admin-docente.page.scss'],
})
export class AdminDocentePage implements OnInit {

  loading: HTMLIonLoadingElement;
  valorBuscado = '';

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
      descripcion: 'Se puede estudiar la pagina 19-21-22-26-27-28 del libro Top Smart WorkBook',
      asignatura: 'Ciencias Naturales',
      avatar: 'ciencias.jpg',
      iddocente: 2,
      docente: 'Francisco Marchena',
      grupo: '1° A',
      fecha: '17/07/2022',
      observaciones: 'sumativa', //[{tipo: 'sumativa', estado: false} , {tipo: 'formativa', estado: false}],
      enlaces: 'https://www.google.com/'
    },
    {
      id: 3,
      nombre: 'Sumas de dos digitos',
      // eslint-disable-next-line max-len
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vitae, ipsam natus sunt accusamus optio suscipit, aspernatur officiis minus nostrum tempora qui quibusdam eligendi quas similique quasi saepe omnis incidunt.',
      asignatura: 'Matematicas',
      avatar: 'matematicas.jpg',
      iddocente: 3,
      docente: 'Alexander Agrazal',
      grupo: '1° A',
      fecha: '17/07/2022',
      observaciones: 'formativa', //[{tipo: 'sumativa', estado: false} , {tipo: 'formativa', estado: false}],
      enlaces: 'https://www.docademi.com/'
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

  constructor(private navCtrl: NavController, private modalCtrl: ModalController,
  private loadingCtrl: LoadingController) {}

  ngOnInit() {
  }

  buscar(){
    console.log('Buscando valor');
    console.log(this.valorBuscado);
    this.actividades = this.actividades.filter(item => item.nombre.toLowerCase().includes(this.valorBuscado));
    console.log(this.actividades);
  }

  logout(){
    console.log('Saliendo de la aplicación');
    // debe ser llamado por un output event emmiter.
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

  async editarActividad(actividad: any, i: any){
    console.log('Editar Actividad', actividad);
    const modal = await this.modalCtrl.create({
      component: AgregarActividadComponent,
      componentProps: {
        titulo: 'Editar Actividad',
        actividad
       }
    });

    await modal.present();
    const {data} = await modal.onDidDismiss();
    console.log(data);
    if (data.nuevaActividad) {
      this.actividades[i]= data.nuevaActividad;
    }
  }

  borrarActividad(actividad: any){
    console.log('Borrar Actividad', actividad);
    this.actividades = this.actividades.filter(item => item.nombre.toLowerCase() !== actividad.nombre.toLowerCase());
  }

  async agregarActividad(){
    console.log('agregar Actividad');

    const modal = await this.modalCtrl.create({
      component: AgregarActividadComponent,
      componentProps: {
        titulo: 'Agregar Actividad'
       }
    });

    await modal.present();
    const {data} = await modal.onDidDismiss();
    console.log(data);
    if (data.nuevaActividad) {
      this.actividades.push(data.nuevaActividad);
    }
  }

  async verMas(actividad: any){
    console.log('verMas Actividad', actividad);
    const modal = await this.modalCtrl.create({
      component: DetallesActividadComponent,
      componentProps: {
        actividad
       }
    });

    this.presentLoading('Por favor espere...');
    // quitar timeout cuando se tenga servicio para crear familiar
    setTimeout(async () => {
      this.loading.dismiss();
      await modal.present();
    }, 1000);
    // await modal.present();
    await modal.onDidDismiss();
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    await this.loading.present();
  }



}
