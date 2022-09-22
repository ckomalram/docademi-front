import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AnimationController,Animation, IonSlides, NavController } from '@ionic/angular';
import { LoginResponse, Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from '../../services/user.service';
import { UiService } from '../../services/ui.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // @ViewChild('slidePrincipal') slidePrincipal: IonSlides;
  formSubmitted = false;
  loginForm: FormGroup;

  // loginUser = {
  //   email: '',
  //   password: ''
  // };

  registerUser: Usuario = {
    email: 'glaw14@gmail.com',
    password: '12345678',
    nombre: 'Carlyle',
    profile: 'docente'
  };

  imgfondo ='/assets/login-bg.jpg';
  registerbtn=true;

  constructor(private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private userService: UserService,
    private fb: FormBuilder,
    private uiservice: UiService,
    private storage: Storage
    ) {
        this.loginForm= this.fb.group({
          email: [ '', [Validators.required, Validators.email]] ,
          password: ['', [Validators.required]] ,
        });
      }

  ngOnInit() {
  }

  async tootgleAction(action: boolean){


    if (!action) {
      const elemento = document.querySelector('.boxregister');
      const animation: Animation = this.animationCtrl.create()
      .addElement(elemento)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
      const animation2: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('#loginbtn'))
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');

      const parent = this.animationCtrl.create()
      .duration(800)
      .addAnimation([animation, animation2]);
      await  parent.play();

    }else{
      const elemento = document.querySelector('.boxlogin');
      const animation: Animation = this.animationCtrl.create()
      .addElement(elemento)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100px)')
      .fromTo('opacity', '1', '0.2');

      const animation2: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('#registerbtn'))
      .fromTo('transform', 'translateX(0px)', 'translateX(-100px)')
      .fromTo('opacity', '1', '0.2');

      const parent = this.animationCtrl.create()
      .duration(800)
      .addAnimation([animation, animation2]);
      await  parent.play();
    }

    this.registerbtn = action;
  }

  // ionViewDidEnter() {
  //   this.slidePrincipal.lockSwipes(true);
  // }
  // chooseAvatar(event: string){
  //   console.log(event);
  //   this.registerUser.avatar=event;
  // }
  async login(){

    this.formSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const response = await this.userService.login(this.loginForm.value);
    // const token = await this.storage.get('x-token')||null;
    // console.log('Estado de login', response);
    // this.uiservice.alertaInformativa(token);

    if (response) {
      //navegar a tabs
      this.navCtrl.navigateRoot('/docente', {
        animated: true
      });
    }else {
      this.uiservice.alertaInformativa('Credenciales no validas.');
    }

  }

  campoNoValido(campo: string): boolean {

    if (this.loginForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
  // async register(fRegister: NgForm){
  // console.log(fRegister);

  // if (fRegister.invalid) {
  //   return;
  // }

  // // const valido = await  this.usuarioService.register(this.registerUser);
  // const valido = this.registerUser.profile;
  // if (valido === 'admin') {
  //   //navegar a tabs
  //   this.navCtrl.navigateRoot('/docente', {
  //     animated: true
  //   });
  // } else {
  //   //mostrar mensaje de credenciales no validad.
  //   // this.uiservice.alertaInformativa('Correo Electronico ya existe');
  //   // console.log('Correo Electronico ya existe');
  //         //Esta navgación solo es por demo. aun no se implementa middlewares.
  //         this.navCtrl.navigateRoot('/docente', {
  //           animated: true
  //         });
  // }
  // }

}
