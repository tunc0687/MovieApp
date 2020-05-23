import { Component, OnInit } from '@angular/core';
import { MovieList } from '../movie.datasource';
import { Movie } from '../movie';


@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    title = "Movie List";
    movies = MovieList;
    selectedMovie: Movie;
    
    ngOnInit(): void {
    }

    onSelect(movie: Movie) {
        this.selectedMovie = movie;
    }

    updateMovie() {
        this.selectedMovie = null;
    }
}
