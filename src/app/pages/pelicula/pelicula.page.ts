import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {NavController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  peliculas: Observable<any>;
  constructor(public navCtrl: NavController,public navParams: NavParams,private httpClient: HttpClient) {
    this.peliculas = this.httpClient.get('http://swapi.co/api/films');
  }
  openDetails(pelicula){
    // this.navCtrl.push('FilmsDetailsPage', {pelicula: pelicula});
  }

  ngOnInit() {
  }

}
