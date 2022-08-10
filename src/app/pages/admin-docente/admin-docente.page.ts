import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { DetallesActividadComponent } from 'src/app/components/detalles-actividad/detalles-actividad.component';
import { DocenteService } from 'src/app/services/docente.service';
import { AgregarActividadComponent } from '../../components/agregar-actividad/agregar-actividad.component';
import {PDFGenerator, PDFGeneratorOptions} from '@ionic-native/pdf-generator/ngx';

@Component({
  selector: 'app-admin-docente',
  templateUrl: './admin-docente.page.html',
  styleUrls: ['./admin-docente.page.scss'],
})
export class AdminDocentePage implements OnInit {



  loading: HTMLIonLoadingElement;
  valorBuscado = '';

  asignaturas: any[] = [
    {
      id: 1,
      nombre: 'Español 1°',
      descripcion: 'Español primer grado',
      estado: true,
      avatar: 'espanol.jpg',
    },
    {
      id: 2,
      nombre: 'Español 2°',
      descripcion: 'Español segundo grado',
      estado: true,
      avatar: 'espanol.jpg',
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

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController,
  private docenteService: DocenteService,
  private loadingCtrl: LoadingController,
  private pdfGenerator: PDFGenerator
  ) {}

  ngOnInit() {
  }

  irOpcion(asignatura: any){
    this.docenteService.asignaturaSeleccionada = asignatura;
    this.navCtrl.navigateForward('/docente/actividades', {
      animated: true
    });
  }

  logout(){
    console.log('Saliendo de la aplicación');
    // debe ser llamado por un output event emmiter.
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

}
