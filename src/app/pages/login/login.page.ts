import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationController, Animation, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formSubmitted = false;
  registerFormSubmitted = false;
  loginForm: FormGroup;
  registerForm: FormGroup;

  imgfondo = '/assets/login-bg.jpg';
  registerbtn = true;

  constructor(private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private userService: UserService,
    private fb: FormBuilder,
    private uiservice: UiService,
    // private storage: Storage
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      vprofile: ['', [Validators.required]],
    }, {
      validators: this.passwordIguales('password', 'password2')
    });
  }

  ngOnInit() {
  }

  async login() {

    this.formSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const response = await this.userService.login(this.loginForm.value);
    //TODO: Manejo de perfiles para redireccionar.
    if (response) {
      //navegar a tabs
      this.navCtrl.navigateRoot('/docente', {
        animated: true
      });
    } else {
      this.uiservice.alertaInformativa('Credenciales no validas.');
    }

  }

  async register() {
    this.registerFormSubmitted = true;
    console.log(this.registerForm);

    if (this.registerForm.invalid) {
      return;
    }
    //TODO: Integracion con API para registrar usuario.
    const response = await this.userService.register(this.registerForm.value);
    //TODO: Manejo de perfiles para redireccionar.
    if (response) {
      //navegar a tabs
      this.navCtrl.navigateRoot('/docente', {
        animated: true
      });
    }
  }

  //Para mostrar mensaje.
  passwordNoNalido(): boolean {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ((pass1 !== pass2 && this.registerFormSubmitted)
      || (pass1 !== pass2 && this.registerForm.get('password2')?.touched)) {
      return true;
    } else {
      return false;
    }
  }

  //Para invalidar formulario
  passwordIguales(password1name: string, password2name: string) {

    return (formgroup: FormGroup) => {
      const pass1Control = formgroup.get(password1name);
      const pass2Control = formgroup.get(password2name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ passwordNoIguales: true });
      }
    };
  }

  campoNoValido(campo: string): boolean {
    if (this.loginForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  campoNoValidoRegister(campo: string): boolean {
    if ((this.registerForm.get(campo)?.invalid && this.registerFormSubmitted)
      || (this.registerForm.get(campo)?.invalid && this.registerForm.get(campo)?.touched)) {
      return true;
    } else {
      return false;
    }
  }

  async tootgleAction(action: boolean) {


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
      await parent.play();

    } else {
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
      await parent.play();
    }

    this.registerbtn = action;
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
