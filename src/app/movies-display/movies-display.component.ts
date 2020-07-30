import { Component, OnInit } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { Movie } from './movie';

declare var $: any;

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.css']
})
export class MoviesDisplayComponent implements OnInit {
  movies : Movie[];
  selectedMovie : Movie= {};
  loading: boolean = true;
  error: string = "";
  constructor(private moviesService: MovieslistService) { }

  ngOnInit() {
    this.moviesService.getMoviesList().subscribe(
      movies => { this.movies = movies },
      error => { this.error = error; },
      () => { this.loading = false }
    )
  }

  selectMovie(movie){
    this.selectedMovie = movie;
    console.log(this.selectedMovie);
    $('#display-movie-modal').modal('show');
  }

}
