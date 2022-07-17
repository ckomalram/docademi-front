import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slidePrincipal: IonSlides;

  loginUser = {
    email: 'ckomalram@gmail.com',
    password: 'ckomalram',
    nombre: 'Carlyle',
    profile: 'admin'
  };

  registerUser: Usuario = {
    email: 'ckomalram@gmail.com',
    password: 'ckomalram',
    nombre: 'Carlyle',
    profile: 'student'
  };

  imgfondo ='/assets/login-bg.jpg';


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.slidePrincipal.lockSwipes(true);
  }

  mostrarLogin(){
    this.slidePrincipal.lockSwipes(false);
    this.slidePrincipal.slideTo(0);
    this.slidePrincipal.lockSwipes(true);

  }

  mostrarRegistro(){
    this.slidePrincipal.lockSwipes(false);
    this.slidePrincipal.slideTo(1);
    this.slidePrincipal.lockSwipes(true);

  }

  chooseAvatar(event: string){
    console.log(event);
    this.registerUser.avatar=event;
  }

  async login(fLogin: NgForm){
    console.log(fLogin.valid);
    console.log(this.loginUser);
    if (fLogin.invalid) {
      return;
    }

    // const valido = await this.usuarioService.login(this.loginUser.email,this.loginUser.password);
    const valido = this.loginUser.profile;
    if (valido === 'admin') {
      //navegar a tabs
      this.navCtrl.navigateRoot('/docente', {
        animated: true
      });
    } else {
      //mostrar mensaje de credenciales no validad.
      // this.uiservice.alertaInformativa('Credenciales no validas.');
      // console.log('Credenciales no validas.');
      //Esta navgación solo es por demo. aun no se implementa middlewares.
      this.navCtrl.navigateRoot('/main/tabs/tab1', {
        animated: true
      });
    }

  }
  async register(fRegister: NgForm){
  console.log(fRegister);

  if (fRegister.invalid) {
    return;
  }

  // const valido = await  this.usuarioService.register(this.registerUser);
  const valido = this.registerUser.profile;
  if (valido === 'admin') {
    //navegar a tabs
    this.navCtrl.navigateRoot('/docente', {
      animated: true
    });
  } else {
    //mostrar mensaje de credenciales no validad.
    // this.uiservice.alertaInformativa('Correo Electronico ya existe');
    // console.log('Correo Electronico ya existe');
          //Esta navgación solo es por demo. aun no se implementa middlewares.
          this.navCtrl.navigateRoot('/main/tabs/tab1', {
            animated: true
          });
  }
  }

}
