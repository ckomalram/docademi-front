import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import { LoginForm, LoginResponse, RegisterForm, RegisterResponse } from '../interfaces/interfaces';
import { UiService } from './ui.service';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NavController } from '@ionic/angular';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;

  constructor(private http: HttpClient, private uiService: UiService, private storage: Storage,
    private navCtrl: NavController,) {
    this.init();
  }

  async init() {
    await this.storage.create();
  };

  login(dataForm: LoginForm) {
    const { email, password } = dataForm;

    return new Promise(resolve => {
      this.http.post<LoginResponse>(`${API_URL}/api/login?email=${email}&password=${password}`, null)
        .subscribe(async (resp) => {
          console.log(resp);
          //Guardar Token
          await this.guardarToken(resp.token);
          resolve(true);
          // resolve(resp);
        }, error => {
          this.token = null;
          this.storage.clear();
          resolve(false);
        });
    });
  }

  register(registerForm: RegisterForm) {
    const { name, email, password, password2, vprofile } = registerForm;
    console.log(registerForm);

    return new Promise(resolve => {
      // eslint-disable-next-line max-len
      this.http.post<RegisterResponse>(`${API_URL}/api/register?name=${name}&email=${email}&password=${password}&password_confirmation=${password2}&v_profile=${vprofile}`, null)
        .subscribe(async (resp) => {
          console.log(resp);
          //Guardar Token
          await this.guardarToken(resp.token);
          resolve(true);
          // resolve(resp);
        }, error => {
          this.token = null;
          this.storage.clear();
          // console.log(error);
          // console.log(error.error);
          // console.log(error.error.email);
          // console.log(error.error.email[0]);
          this.uiService.alertaInformativa(error.error.email[0]);
          resolve(false);
        });
    });
  }

  async guardarToken(token: string) {
    this.token = token;
    console.log('Guardando Token...',this.token);
    await this.storage.set('token', this.token);

    //TODO: validar endpoint /user para validar token.
    //  await  this.validaToken();
  }

  async logout(){
    console.log('Saliendo de la aplicación');
    await this.cargarToken();
    const token = this.token;
    //TODO: LLamar api y validar que este ok.
    this.http.get(`${API_URL}/api/logout`, {
      headers: {token}
    }).subscribe(async (resp) => {
      console.log(resp);
      await this.storage.remove('token');
    }, async (error) => {
      console.warn(error);
      await this.storage.remove('token');
    });
    //console.log(this.storage.get('token'));


    this.navCtrl.navigateRoot('/login', {animated: true});
  }

  async cargarToken(){
    this.token = await this.storage.get('token') || null;
  }


  async validateToken(): Promise<boolean>{
    await  this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/login', {animated: true});
      return Promise.resolve(false);
    }

    return new Promise<boolean>(resolve => {
      // const headers = new HttpHeaders({
      //   'token': this.token
      // });
      resolve(true);
      // this.http.get(`${API_URL}/api/user`, {headers}).subscribe(resp => {
      //   if (resp.ok) {
      //     this.usuario = resp.usuario;
      //     resolve(true);
      //   }else{
      //     this.navcontroller.navigateRoot('/login');
      //     resolve(false);
      //   }
      // });
    });


     //TODO: Integración con api para validar token
  //   return this.http.get(`${API_URL}/api/user`, {
  //     headers: {token}
  //   }).pipe(
  //     tap(async (resp: any) => {
  //       await this.storage.set('token', resp.token);
  //     }),
  //     map(resp => true),
  //     catchError(error =>  of(false))
  //   );
   }
}
