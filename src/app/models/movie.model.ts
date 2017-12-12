export class Movie {
    public _id: string;
    public _name: string;
    public _genre: string;
    public _duration: string;
    public _imagePath: string;
  
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
  
 
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}