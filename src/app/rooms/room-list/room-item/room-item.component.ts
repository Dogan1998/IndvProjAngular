import { Component, OnInit, Input } from '@angular/core';

import { Show } from '../../../models/show.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() show: Show;
  @Input() id: string;

  ngOnInit() {
    this.id = this.show._id;
  }
}