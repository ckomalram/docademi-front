import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-detalles-actividad',
  templateUrl: './detalles-actividad.component.html',
  styleUrls: ['./detalles-actividad.component.scss'],
})
export class DetallesActividadComponent implements OnInit {
  @Input() actividad: any = '';

  constructor(private modalCtrl: ModalController, private socialSharing: SocialSharing) { }

  ngOnInit() {}


  cerrar(){
    console.log('Salir de modal');
    this.modalCtrl.dismiss({
      message: 'se cierra modal de detalles de la actividad'
    });
  }

  compartir(){
    // console.log('Función que compatirá una info de actividad puntual. Para whastapp o telegram');
    // this.modalCtrl.dismiss({
    //   message: 'OK'
    // });
    const body = `${this.actividad.grupo} - ${this.actividad.asignatura} - ${this.actividad.nombre} - ${this.actividad.descripcion}`;
    const subject = `${this.actividad.asignatura} - ${this.actividad.nombre} - ${this.actividad.grupo}`;
    const enlaces = this.actividad.enlaces || '';
    this.socialSharing.share(
      body,
      subject,
      this.actividad.docente,
      enlaces
    );
  }

}
