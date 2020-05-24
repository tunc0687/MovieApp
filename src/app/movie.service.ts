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
}
