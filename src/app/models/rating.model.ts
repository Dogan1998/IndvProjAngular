export class Rating {
    public _id: string;
    public _rating: string;



get rating(): string {
    return this._rating;
  }

  set rating(value: string) {
    this._rating = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}