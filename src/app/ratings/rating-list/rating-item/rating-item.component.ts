import { Component, OnInit, Input } from '@angular/core';

import { Rating } from '../../../models/rating.model';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent implements OnInit {
  @Input() rating: Rating;
  @Input() id: string;

  ngOnInit() {
    this.id = this.rating._id;
  }
}
