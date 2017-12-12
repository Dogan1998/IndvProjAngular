import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Show } from '../../models/show.model';
import { ShowService } from '../../shows/show.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  shows: Show[];
  subscription: Subscription;

  constructor(private showService: ShowService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.showService.showsChanged
      .subscribe(
        (shows: Show[]) => {
          this.shows = shows;
        }
      );
    // this.recipes = this.recipeService.getRecipes();

    this.showService.getShows()
      .then( users => this.shows = users)
      .catch( error => console.log(error));
  }

//   onNewShow() {
//     this.router.navigate(['new'], {relativeTo: this.route});
//   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
