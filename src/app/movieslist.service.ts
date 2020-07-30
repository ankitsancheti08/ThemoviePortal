import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies-display/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieslistService {

  baseUrl = "https://ghibliapi.herokuapp.com/films";

  constructor(private http : HttpClient) { }

  getMoviesList(){
    return this.http.get<Movie[]>(this.baseUrl);
  }
}
