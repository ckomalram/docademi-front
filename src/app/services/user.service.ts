import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import { LoginForm, LoginResponse } from '../interfaces/interfaces';
import { UiService } from './ui.service';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;

  constructor(private http: HttpClient, private uiService: UiService, private storage: Storage) {
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

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('x-token', this.token);

    //TODO: validar endpoint /user para validar token.
    //  await  this.validaToken();
  }
}
