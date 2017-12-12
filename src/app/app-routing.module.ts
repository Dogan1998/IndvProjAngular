import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowsComponent } from './shows/shows.component';
//import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShowStartComponent } from './shows/show-start/show-start.component';
import { ShowDetailComponent } from './shows/show-detail/show-detail.component';
import { ShowEditComponent } from './shows/show-edit/show-edit.component';

import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';
//import{ MovieEditComponent} from './movies/movie-edit/movie-edit.component';

import { RoomDetailComponent } from './rooms/room-detail/room-detail.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';

import { RatingListComponent } from './ratings/rating-list/rating-list.component';
import { RatingsComponent } from './ratings/ratings.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/shows', pathMatch: 'full' },
  { path: 'shows', component: ShowsComponent, children: [
    { path: '', component: ShowStartComponent },
    { path: 'new', component: ShowEditComponent },
    { path: ':id', component: ShowDetailComponent },
    { path: ':id/edit', component: ShowEditComponent },
  ] },
   { path: 'movies', component: MoviesComponent, children: [
     {path: 'list', component: MovieListComponent},
     {path: ':id', component: MovieDetailComponent},
    // {path: ':id/edit', component: MovieEditComponent}
   ]},
   { path: 'rooms', component: RoomsComponent, children: [
    {path: 'list', component: RoomListComponent},
    {path: ':id', component: RoomDetailComponent}
    //{path: ':id/edit', component: MovieEditComponent}
  ]},
  { path: 'ratings', component: RatingsComponent, children: [
    {path: 'list', component: RatingListComponent}
  
  ]},
 // { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
