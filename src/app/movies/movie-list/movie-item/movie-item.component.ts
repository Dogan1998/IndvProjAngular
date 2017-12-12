import { Component, OnInit, Input } from '@angular/core';

import { Show } from '../../../models/show.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() show: Show;
  @Input() id: string;

  ngOnInit() {
    this.id = this.show._id;
  }
}

