import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-actividad',
  templateUrl: './detalles-actividad.component.html',
  styleUrls: ['./detalles-actividad.component.scss'],
})
export class DetallesActividadComponent implements OnInit {
  @Input() actividad = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


  cerrar(){
    console.log('Salir de modal');
    this.modalCtrl.dismiss({
      message: 'se cierra modal de detalles de la actividad'
    });
  }

  compartir(){
    console.log('Función que compatirá una info de actividad puntual. Para whastapp o telegram');
    this.modalCtrl.dismiss({
      message: 'OK'
    });
  }

}
