import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Rating } from '../../models/rating.model';
import { ShowService } from '../../shows/show.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit, OnDestroy {
  ratings: Rating[];
  subscription: Subscription;

  constructor(private showService: ShowService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.showService.ratingsChanged
      .subscribe(
        (ratings: Rating[]) => {
          this.ratings = ratings;
        }
      );
    // this.recipes = this.recipeService.getRecipes();

    this.showService.getRatings()
      .then( users => this.ratings = users)
      .catch( error => console.log(error));
  }

//   onNewShow() {
//     this.router.navigate(['new'], {relativeTo: this.route});
//   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
