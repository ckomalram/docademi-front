import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navCtrl: NavController, private userService: UserService) {}

  logout(){
  this.userService.logout();
  }

}
