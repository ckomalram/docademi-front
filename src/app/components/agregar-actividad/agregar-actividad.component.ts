import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.scss'],
})
export class AgregarActividadComponent implements OnInit {
  @Input() titulo = 'Agregar Actividad++';
  @Input() nuevaActividad = {
    id: 3,
    nombre: 'Sumas de dos digitos',
    // eslint-disable-next-line max-len
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non rem beatae, unde molestiae tempore reiciendis, facere aut perferendis maiores possimus, nemo corrupti. Magnam provident quidem natus excepturi. Rerum, illum voluptas.',
    asignatura: 'matematicas',
    avatar: 'matematicas.jpg',
    iddocente: 3,
    docente: 'Alexander Agrazal',
    grupo: '1°A',
    fecha: '17/07/2022',
    observaciones: 'formativa', //[{tipo: 'sumativa', estado: false} , {tipo: 'formativa', estado: false}],
    enlaces: ''
  };

  loading: HTMLIonLoadingElement;

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  async presentLoading(message: string){
    this.loading = await this.loadingCtrl.create({
      message
    });
    await this.loading.present();
  }

   save(fRegister: NgForm){
    console.log(this.nuevaActividad);
    // const enlaces = this.nuevaActividad.enlaces.split('\n');
    // console.log(enlaces);
    // logica para guardar Actividad
    if (fRegister.invalid) {
      return;
    }
    this.nuevaActividad.avatar = `${this.nuevaActividad.asignatura}.jpg`;
    this.presentLoading('Por favor espere...');
    // quitar timeout cuando se tenga servicio para crear familiar
    setTimeout(() => {
      this.loading.dismiss();
      this.modalCtrl.dismiss({
        message: 'OK',
        nuevaActividad: this.nuevaActividad
      });
    }, 1500);

    // enviar a pagina que llamo el modal
    // this.modalCtrl.dismiss({
    //   message: 'Actvidad Creada, proceder actualizar lista...',
    //   nuevaActividad: this.nuevaActividad
    // });
  }

  cancel(){
    this.modalCtrl.dismiss({
      message: 'proceso de cancelado, volver solamente.'
    });
  }

}
