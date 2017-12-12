import { Movie } from '../models/movie.model';
import { Room } from '../models/room.model';

export class Show {
  public _id: string;
  public _time: string;
  public _movie: Movie;
  public _room: Room;

 // public room: string;
 // public name: string;
 // public imagePath: string;


  // constructor(_id: string, name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
  //   this._id = _id;
  //   this.name = name;
  //   this.description = desc;
  //   this.imagePath = imagePath;
  //   this.ingredients = ingredients;
  // }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


  get movie(): Movie {
    return this._movie;
  }

  set movie(value: Movie) {
    this._movie = value;
  }

  get room(): Room {
    return this._room;
  }

  set room(value: Room) {
    this._room = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  
}