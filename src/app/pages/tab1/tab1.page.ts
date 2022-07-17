import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navCtrl: NavController) {}

  logout(){
    console.log('Saliendo de la aplicación');
    // debe ser llamado por un output event emmiter.
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

}
