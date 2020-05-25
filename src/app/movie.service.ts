import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MovieList } from './movie.datasource';
import { Observable, of} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    movie: Movie;

    constructor(private loggingService: LoggingService) { }

    getMovies(): Observable<Movie[]> {
        this.loggingService.add("MovieService: Listing movies");
        return of(MovieList);
    }

    getMovie(id): Observable<Movie> {
        this.movie = MovieList.find(movie => movie.id == id);
        this.loggingService.add("MovieService: " + this.movie.name + " movie details.");
        return of(this.movie);
    }

    update(movie: Movie): Observable<any> {
        this.loggingService.add("MovieService: " + this.movie.name + " movie update.");
        let i = MovieList.forEach(mv =>{
            if (mv.id === movie.id) {
                mv = movie;
            }
        });
        return of("");
    }

    addMovie(mov: Movie): Observable<Movie> {
        this.loggingService.add("MovieService: " + mov.name + " movie added.");
        MovieList.push(mov);
        return of(mov);
    }

    deleteMovie(mov: Movie): Observable<any> {
        this.loggingService.add("MovieService: " + mov.name + " movie deleted.");
        let i = MovieList.indexOf(mov);
        MovieList.splice(i, 1);
        return of("");
    }
}
