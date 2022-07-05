import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pelicula',
    loadChildren: () => import('./pages/pelicula/pelicula.module').then( m => m.PeliculaPageModule)
  },
  //{
   // path: 'detalles-pelicula',
   // loadChildren: () => import('./pages/detalles-pelicula/detalles-pelicula.module').then(m => m.DetallesPeliculaPageModule)
  //},
  {
    path: 'detalles-pelicula',
    loadChildren: () => import('./pages/detalles-pelicula/detalles-pelicula.module').then( m => m.DetallesPeliculaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
