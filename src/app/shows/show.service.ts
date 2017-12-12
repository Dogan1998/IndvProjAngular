import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Show } from '../models/show.model';
import { Rating } from '../models/rating.model';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ShowService {
  showsChanged = new Subject<Show[]>();
  ratingsChanged = new Subject<Rating[]>();
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/shows';

  private shows: Show[];
  private ratings: Rating[];

  constructor( private http: Http) {}


  public getRatings(): Promise<Rating[]> {
    console.log('items ophalen');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then( response => {
        this.ratings = response.json().ratings as Rating[];
        return response.json() as Rating[];
      })
      .catch(( error => {
        return this.handleError(error);
      }));
  }


  public getShows(): Promise<Show[]> {
    console.log('items ophalen');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then( response => {
        this.shows = response.json().show as Show[];
        return response.json() as Show[];
      })
      .catch(( error => {
        return this.handleError(error);
      }));
  }

  public getShow(id: string): Promise<Show> {
    console.log('items ophalen');
    return this.http.get(this.serverUrl + '/' + id, { headers: this.headers })
      .toPromise()
      .then( response => {
        return response.json()
      })
      .catch(( error => {
        return this.handleError(error);
      }));
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject( error.message || error);
  }
 
  addShow(show: Show) {
    this.http.post(this.serverUrl, show)
      .map(response => response.json() as Show)
      .subscribe(result => {
        this.shows.push(result as Show);
        this.showsChanged.next(this.shows.slice());
      });
  }

  updateShow(index: string, newShow: Show) {
    return this.http.put(this.serverUrl + '/' + index, newShow, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.showsChanged.next(this.shows.slice());
      });
  }

  deleteShow(id: string) {

    return this.http.delete(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.showsChanged.next(this.shows.slice());
      })
      .catch(( error => {
        return this.handleError(error);
      }));

  }
}
