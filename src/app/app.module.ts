import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowListComponent } from './shows/show-list/show-list.component';
import { ShowDetailComponent } from './shows/show-detail/show-detail.component';
import { ShowItemComponent } from './shows/show-list/show-item/show-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
//import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ShowStartComponent } from './shows/show-start/show-start.component';
import { ShowEditComponent } from './shows/show-edit/show-edit.component';
import { ShowService } from './shows/show.service';

import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent} from './movies/movie-list/movie-item/movie-item.component';
import { MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import { MovieEditComponent} from './movies/movie-edit/movie-edit.component';

import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomItemComponent} from './rooms/room-list/room-item/room-item.component';
import { RoomDetailComponent} from './rooms/room-detail/room-detail.component';

import { RatingsComponent } from './ratings/ratings.component';
import { RatingListComponent } from './ratings/rating-list/rating-list.component';
import { RatingItemComponent} from './ratings/rating-list/rating-item/rating-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MovieListComponent,
    MoviesComponent,
    MovieEditComponent,
    ShowsComponent,
    ShowListComponent,
    ShowDetailComponent,
    ShowItemComponent,
    //ShoppingListComponent,
    //ShoppingEditComponent,
    DropdownDirective,
    ShowStartComponent,
    ShowEditComponent,
    RoomsComponent,
    RoomDetailComponent,
    RoomItemComponent,
    RoomListComponent,
    RatingsComponent,
    RatingItemComponent,
    RatingListComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShowService],    //ShoppingListService
  bootstrap: [AppComponent]
})
export class AppModule { }
