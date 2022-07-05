import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.page.html',
  styleUrls: ['./detalles-pelicula.page.scss'],
})
export class DetallesPeliculaPage implements OnInit {

  pelicula: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pelicula = this.navParams.get('pelicula');
  }

  ngOnInit() {
  }

}
