import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Show } from '../../models/show.model';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  show: Show = new Show({ movie: {imagePath: ''}, room: {roomname:''}});

  id: string;

  constructor(private showService: ShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          // this.recipe = this.recipeService.getRecipe2(this.id)

          this.showService.getShow(this.id)
            .then( show => this.show = show)
            .catch( error => console.log(error));
        }
      );


    // this.recipes = this.recipeService.getRecipes();
    //
    // this.recipeService.getRecipes()
    //   .then( users => this.recipes = users)
    //   .catch( error => console.log(error));
  }

  

  onEditShow() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteShow() {
    this.showService.deleteShow(this.id);
    this.router.navigate(['/shows']);
  }

}
