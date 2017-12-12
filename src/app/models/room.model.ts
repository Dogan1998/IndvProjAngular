export class Room {
    
      public _roomname: string;
      public _seats: number;
    
    
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
    

    get roomname(): string {
        return this._roomname;
      }
    
      set roomname(value: string) {
        this._roomname = value;
      }

      get seats(): number {
        return this._seats;
      }
    
      set seats(value: number) {
        this._seats = value;
      }
    }