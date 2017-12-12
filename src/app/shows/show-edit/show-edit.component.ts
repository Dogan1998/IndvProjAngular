import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ShowService } from '../show.service';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit {
  id: string;
  editMode = false;
  showForm: FormGroup;
  movieForm: FormGroup;
  roomForm: FormGroup;
  show: Show = new Show({ movie: {imagePath: ''}, room: {roomname:''}});


  constructor(private route: ActivatedRoute,
              private showService: ShowService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {


  if(this.editMode) {
    this.showService.updateShow(this.id, this.showForm.value);
  } else {
    this.showService.addShow(this.showForm.value);
    this.showService.getShows()
      .then(shows => {
        this.showService.showsChanged.next(shows.slice());
      });
    
  }
  this.onCancel();
}

  
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {

    let editShow = new Show({
      time: '',
      name:'',
      genre:'',
      imagePath:'',
      duration:'',
      roomname:'',
      seats: '',
      movie:({name:'', genre:'', imagePath:'', duration:''}),
      room:({roomname:'',seats:''})
    });

   // const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.showService.getShow(this.id)
        .then(show => {
          editShow = show;
          
          this.showForm = new FormGroup({
            'time': new FormControl(editShow.time, Validators.required),
            'movie': new FormGroup({
              'name': new FormControl(editShow.movie.name, Validators.required),
              'genre': new FormControl(editShow.movie.genre, Validators.required),
              'imagePath': new FormControl(editShow.movie.imagePath, Validators.required),
              'duration': new FormControl(editShow.movie.duration, Validators.required)
            }),
            'room': new FormGroup({
              'roomname': new FormControl(editShow.room.roomname, Validators.required),
              'seats': new FormControl(editShow.room.seats, Validators.required)
            })
          });
        })
        .catch(error => console.log(error));
    }

    this.showForm = new FormGroup({
      'time': new FormControl('', Validators.required),
      'movie': new FormGroup({
        'name': new FormControl('', Validators.required),
        'genre': new FormControl('', Validators.required),
        'imagePath': new FormControl('', Validators.required),
        'duration': new FormControl('', Validators.required)
      }),
      'room': new FormGroup({
        'roomname': new FormControl('', Validators.required),
        'seats': new FormControl('', Validators.required)
      })
    });
  }
}
