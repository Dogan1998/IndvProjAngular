import { Component, OnInit, Input } from '@angular/core';

import { Show } from '../../../models/show.model';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {
  @Input() show: Show;
  @Input() id: string;

  ngOnInit() {
    this.id = this.show._id;
  }
}

