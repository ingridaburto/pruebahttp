import { Component } from '@angular/core';
//import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

import {Observable} from 'rxjs';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peliculas: Observable<any>;

  //constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.peliculas = this.httpClient.get('http://swapi.co/api/films');
    this.peliculas
      .subscribe(data => {
        console.log('my data: ', data);
      });
  }

}
